(ns in-memory-sql-db.logic.db-test
  (:require [clojure.test :refer :all]
            [in-memory-sql-db.logic.db :as db]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 1 1))))


(deftest test-create-db
  (testing "Create a empty database"
    (let [database (db/create-db)
          tables (get database :tables nil)]
      (is true (map? tables)))))


(deftest test-create-table
  (testing "Create a empty database"
    (let [database (db/create-db)
          database (db/create-table database "create table author (id number, name string, age number, city string, state string, country string)")
          author (get-in database [:tables :author] nil)] 
      (println (map (fn [a] (is (get a :name))) author)))))

(test-create-table)

(run-all-tests)
(->> database
     :tables
     :author
     (map #(:name %)))

(execute database "insert into author (id, name, age) values (1, Douglas Crockford, 62)")