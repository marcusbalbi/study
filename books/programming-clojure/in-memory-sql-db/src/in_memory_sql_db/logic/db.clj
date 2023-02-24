(ns in-memory-sql-db.logic.db
  (:require [in-memory-sql-db.logic.parser :as parser]
            [clojure.string :as str]))


(defn create-db
  []
  {:tables {}})


(defn create-table
  [db sql]
  (let [structure (parser/create-table sql)]
    (if (nil? structure)
      (throw (ex-info "Invalid SQL!" {:sql sql}))
      (update-in db [:tables] #(conj % {(keyword (:table structure)) (:columns structure)})))))

(defn get-command [sql]
  (cond
   (str/starts-with? sql "create table") create-table
   :else (fn [db sql] (throw (ex-info "Command not found for sql " {:sql sql :db db})))))


(defn execute [db sql]
  (let [command (get-command sql)]
    (println command)
    (command db sql)))

(def database (create-db))

(def database (execute database "create table author (id number, name string, age number, city string, state string, country string)"))
(def database (execute database "create table songs (id number, name string, age number, city string, state string, country string)"))

(->> database
    :tables
    :author
    (map #(:name %) ,,,))

(execute database "insert into author (id, name, age) values (1, Douglas Crockford, 62)")