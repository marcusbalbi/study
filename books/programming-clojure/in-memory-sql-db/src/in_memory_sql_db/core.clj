(ns in-memory-sql-db.core
  (:require [in-memory-sql-db.logic.db :as db])
  (:gen-class))



(def database (db/create-db))


(db/create-table database "create table author (id number, name string, age number, city string, state string, country string)")