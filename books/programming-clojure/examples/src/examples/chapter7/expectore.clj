(ns examples.chapter7.expectore
  (:import (java.io FileOutputStream
                    OutputStreamWriter BufferedWriter)))

(defn make-writer [dst]
  (-> dst
      FileOutputStream.
      OutputStreamWriter.
      BufferedWriter.))


(defn make-writer-condp [dst]
  (-> (condp = (type dst)
             java.io.OutputStream dst
             java.lang.String (FileOutputStream. dst)
             java.io.File (FileOutputStream. dst)
             java.net.Socket (.getOutputStream dst)
             java.net.URL (if (= "file" (.getProtocol dst))
                            (-> dst
                                .getPath
                                FileOutputStream.)
                            (throw (IllegalArgumentException. "Can not write"))))
      OutputStreamWriter.
      BufferedWriter.))

(defn expectore [dst content]
  (with-open [writer (make-writer dst)]
    (.write writer (str content))))


