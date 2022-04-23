(ns testing-clojure.core
  (:gen-class) 
  (:require [clojure.string :as string]))


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

(def people [{ :name "Jhon" }
             { :name "Jane"}
             { :name "Balbi"}])

(string/starts-with? "Jane" "A")

(reduce (fn [acc person]
          (let [name (:name person)
                startWithJ (string/starts-with? name "J")]
            (if startWithJ (conj acc person)
                acc))) [] people)