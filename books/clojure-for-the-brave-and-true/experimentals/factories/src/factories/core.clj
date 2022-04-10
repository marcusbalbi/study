(ns factories.core
  (:gen-class))

(defn car-factory [model color velocity]
  {:model model
   :color color
   :velocity velocity})

(conj (car-factory "up!" "blue" 180) {:gas 100})

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hi there We are building a new car for you!")
  (let [model (read-line)
        color (read-line)]
    (println "The model of your car is" model "and the colro is" color)))
