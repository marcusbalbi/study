(ns in-memory-sql-db.core
  (:require [in-memory-sql-db.logic.db :as db]
            [clojure.data.json :as json])
  (:gen-class))

(def database (atom (db/create-db)))


;; (db/create-table database "create table author (id number, name string, age number, city string, state string, country string)")
(swap! database db/create-table "create table author (id number, name string, age number, city string, state string, country string)")

(println (json/write-str @database))


(println (json/write-str {:hello "world" :nested {:obj {:value 12}}}))



;; (t/run-all-tests)

;; (t/testing "TESTE" (t/is true))

;; (def nested-map {
;;                  :a {:b {:c "haha"}}
;; })

;; (-> nested-map :a :b :c)

;; (-> 20
;;     (+ 2)
;;     (* 3))

;; (def numbers [2 4 6 8 10])

;; (apply + numbers)