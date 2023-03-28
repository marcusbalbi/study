(ns examples.chapter3.planets)

(def astros [
              {:name "earth" :moons 1 :type :planet}
              {:name "mars" :moons 2 :type :planet}
              {:name "sun" :planets 9 :type :star}
              {:name "june" :moons 3 :type :planet}])

(defn planet? [astro]
  (= (:type astro) :planet))

(filter planet? astros)
(def total-moon (reduce + 0 (map :moons (filter planet? astros))))

(->> astros
     (filter planet?)
     (map :moons)
     (reduce +))

(def moons-of-astros (comp (filter planet?) (map :moons)))

(defn total-moons [astros]
  (transduce moons-of-astros + 0 astros))

(total-moons astros)

(remove planet? astros)

(keep planet? astros)

(drop 1 astros)

(take 1 astros)

(take-while planet? astros)

(drop-while (complement planet?) astros)

(sort (map :name astros))

(sort-by :name astros)

(group-by :type astros)

(defn multi-moon [astro]
  (> 0 (:moons astro)))

(group-by multi-moon (filter planet? astros))
