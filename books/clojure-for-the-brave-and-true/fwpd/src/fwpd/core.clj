(ns fwpd.core 
  (:require [clojure.string :as string]))
(def filename "suspects.csv")
;(slurp filename)

(def vamp-keys [:name :glitter-index])

(defn str->int [str] (Integer. str))

(def conversions {:name identity :glitter-index str->int})

(defn convert [vamp-key, value]
  ((get conversions vamp-key) value))

(defn parse "Convert a CSV into rows of Columns" [string]
  (map #(string/split % #",")
       (string/split string #"\n")))

(parse (slurp filename))

(defn mapify "return  a seq of maps like {:name \"Edward\" :glitter-index 10}"
  [rows]
  (map (fn [unmapped-row]
         (reduce (fn [row-map [vamp-key value]]
                   (assoc row-map vamp-key (convert vamp-key value)))
                 {} (map vector vamp-keys unmapped-row))) rows))


(first (mapify (parse (slurp filename))))


(defn glitter-filter [minimum-glitter records]
  (filter #(>= (:glitter-index %) minimum-glitter), records))

(def suspects (mapify (parse (slurp filename))))

(glitter-filter 6 suspects)

(defn grab-names [suspects] (map #(:name %) suspects))

(grab-names (glitter-filter 3 suspects))

(defn append [suspect suspects] (conj suspects suspect))

(defn validate [validate-map record] ())

(append {:name "Samuel Oliver" :glitter-index 10} suspects)


(defn vampire-map->csv-string [vampires-map]
               (map (fn [vampire]
                      (let [name (:name vampire)
                            glitter-index (:glitter-index vampire)]
                        (string/join "," [name glitter-index]))) vampires-map))


(def recriatedcsv (string/join "\n" (concat (vampire-map->csv-string suspects))))


(= recriatedcsv (slurp filename))


