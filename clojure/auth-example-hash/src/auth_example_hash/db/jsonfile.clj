(ns auth-example-hash.db.jsonfile
  (:require [clojure.data.json :as json]))

(defn- fetch-data
  "Loads a json file in memory and return the data parsed"
  [filename]
  (json/read-str (slurp filename) :key-fn keyword))

(fetch-data "db.json")

(defn- persist
  "save file"
  [filename data]
  (spit filename (json/write-str data)))

(persist "db2.json" (fetch-data "db.json"))

(defn save
  "Saves an User into database"
  [filename user])

(defn findByEmail
  "Find an User by its email"
  [filename email])

(defn exists?
  "true if the user already exists on database false otherwise"
  [filename email])
