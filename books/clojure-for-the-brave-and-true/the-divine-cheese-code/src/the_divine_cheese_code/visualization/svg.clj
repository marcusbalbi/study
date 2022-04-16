(ns the-divine-cheese-code.visualization.svg 
  (:require [clojure.string :as string]))


(defn latlng->point 
  "Convert lat/lng map ti comma-separeted string"
  [latlng]
  (str (:lng latlng) "," (:lat latlng)))


(defn points 
  [locations]
  (string/join " " (map latlng->point locations)))