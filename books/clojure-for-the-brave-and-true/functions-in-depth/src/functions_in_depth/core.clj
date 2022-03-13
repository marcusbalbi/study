(ns functions-in-depth.core)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(def person { :name "Balbi" :age 15 })

(map (fn [p] (println (first p))) person)

