(ns testing-clojure.core
  (:gen-class))


(do (
    println "Hello World")
    (println (map inc [1 2 3 4 5]))
    (println (reduce + [2 4 6 8 10]))
    )

(conj [2 4 6] 5)
    
(filter #(>= % 5) [2 4 6 8 10])

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))