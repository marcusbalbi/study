(ns functions-in-depth.core)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(def person { :name "Balbi" :age 15 })

(map (fn [p] (println (first p))) person)

(defn titleize [topic] (str topic " for the brave and true"))

(println (map titleize ["Hamsters" "Ragnarok"]))

(println (map titleize '("Empathy" "Decorating")))

(println (map titleize #{"Elbows" "Soap Carving"}))

(println (map #(titleize (second %)) {:uncomfortable-thing "winking"}))


(println (seq '(1 2 3)))

(println (seq  [1 2 3]))

(println (seq #{1 2 3}))

(println (seq person))

(println (into {} (seq person)))



