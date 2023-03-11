(ns in-memory-sql-db.logic.db-test
  (:require [clojure.test :refer :all]
            [in-memory-sql-db.logic.db :as db]))


(deftest test-create-db
  (testing "Create an empty database"
    (let [database (db/create-db)
          tables (get database :tables nil)]
      (is true (map? tables)))))


(deftest test-create-table
  (testing "Create a database and create table author"
    (let [database (db/create-db)
          database (db/execute database "create table author (id number, name string, age number, city string, state string, country string)")
          author (get-in database [:tables :author] nil)
          columns-count (count author)]
      (is (= columns-count 6))
      (map (fn [a] (is (get a :name))) author))))


;; todo create error commmands

(run-all-tests)
;; (->> database
;;      :tables
;;      :author
;;      (map #(:name %)))

;; (execute database "insert into author (id, name, age) values (1, Douglas Crockford, 62)")