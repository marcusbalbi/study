(ns examples.chapter7.gulp
  (:import (java.io FileInputStream
                    InputStreamReader BufferedReader)))


(defn make-reader [src]
  (-> src FileInputStream.
      InputStreamReader.
      BufferedReader.))


(defn make-reader-condp [src]
  (-> (condp (type src)
         java.io.FileInputStream src
         java.lang.String (FileInputStream. src)
         java.io.File (FileInputStream. src)
         java.net.Socket (.getInputStream src)
         java.net.URL (if (= "file" (.getProtocol src))
                        (-> src
                            .getPath
                            FileInputStream.)
                        (.openStream src)))
  InputStreamReader.
  BufferedReader.)) 

(defn gulp [src]
  (let [sb (StringBuilder.)]
    (with-open
     [reader (make-reader src)]
      (loop [c (.read reader)]
        (if (neg? c)
          (str sb)
          (do
            (.append sb (char c))
            (recur (.read reader))))))))


