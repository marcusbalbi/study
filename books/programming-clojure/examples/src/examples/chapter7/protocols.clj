(ns examples.chapter7.protocols
  (:require [clojure.core]))

(defprotocol Display
  (title [this])
  (description [this description]))


(def vw-up {:make "VolksWagen" :model "Up!"})

(defrecord CarModel [make model]
  Display
  (title [_] (str make " - " model))
  (description [_ desc] (str "Corolla is the best " desc)))

(def toyota-corolla (->CarModel "Toyota" "Corolla"))
(def honda-civic (map->CarModel {:make "Honda" :model "Civic"}))


(class vw-up)
(class toyota-corolla)
(class honda-civic)

(title toyota-corolla)
(description toyota-corolla "asdssa")


(defrecord Product [name])

(extend-protocol Display Product
                 (title [_] (str "This is the product " name))
                 (description [_ desc] (str "The product " name "is the best " desc)))


(let [p (->Product "TV Samsumg")]
  (str (title p) " and " (description p "big")))


