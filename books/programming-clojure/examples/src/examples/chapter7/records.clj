(ns examples.chapter7.records
  (:require [clojure.core])) 

(defrecord Note [pitch octave duration]
 )


(->Note :D# 4 1/2)

(.pitch (->Note :D# 4 1/2))
(:pitch (->Note :D# 4 1/2))

(map?  (->Note :D# 4 1/2))

(def d# (->Note :D4 4 1/2))

(assoc d# :octave 8)

(update-in d# [:octave] inc)

(def new-d# (assoc d# :velocity 100))

(class (dissoc new-d# :velocity))
(class (dissoc new-d# :duration))
