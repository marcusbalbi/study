(ns jar-test.core
  (:gen-class)
  (:import [com.balbi Sum]))

(def a (new Sum))

(.sum a 2 222)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  
  (println "Hello, World!"))