(ns in-memory-sql-db.core
  (:require [in-memory-sql-db.logic.parser :as parser])
  (:gen-class))






(parser/create-table "create table author (id number, name string, age number, city string, state string, country string)")
(parser/create-table "create table author (id numb")