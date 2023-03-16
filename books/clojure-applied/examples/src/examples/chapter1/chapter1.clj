(ns examples.chapter1.chapter1)

(defrecord Planet [
                  name
                  moons
                  volume
                  mass
                  aphelion
                  perihelion
])


(map->Planet {
              :name "Earth"
              :moons 1
              :volume 1.08321e12
              :mass 5.97219e24
              :aphelion 152098232
              :perihelion 147098290})


(hash-map :name "Jhon" :last-name "Doe")

(defn empty-planet [name & [k v]]
  (map->Planet {:name name k v}))

(empty-planet "Mars" :moons 2)


(partition 2 [:a 1 :b 2 :c 3])



(defrecord Banana [qty])

;;; 'subtotal' differ from each fruit.

(defprotocol Fruit
  (subtotal [item]))

(extend-type Banana
  Fruit
  (subtotal [item]
    (* 158 (:qty item))))

(subtotal (->Banana 214))