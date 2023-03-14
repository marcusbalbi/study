(ns examples.core
  (:gen-class) 
  (:require [clojure.string :as str]
            [clojure.string :as s]))

(some-> {:a [1 2 3 4 5]}
        (get :b)
        count)


