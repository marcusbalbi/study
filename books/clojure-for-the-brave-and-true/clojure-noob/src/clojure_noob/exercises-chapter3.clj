(ns clojure-noob.exercises-chapter3)

(def name "Balbi")
(println (str "concat " "these " "strings " "with " name))

(println (vector "a" "b" :c))

(println (list "d" "e" :f))

(println '("g" "h" :i))

(println (hash-map  :name "Marcus" :lastname "Balbi"))

(println (hash-set :name :lastname :name))

(defn add100 "Add 100 to a number" [n] (+ n 100))

(println (add100 (rand-int 50)))


(defn dec-maker "build a function that - a number" [n] 
  (fn [n2] (- n2 n)))

(def dec5 (dec-maker 5))
(def dec9 (dec-maker 9))

(println (dec5 15))
(println (dec9 10))

(defn mapset [fn & args]
  (let [result (apply map fn args)]
    (set result)
    ))
    


(mapset inc [1 1 2 2])
