(ns in-memory-sql-db.logic.parser
  (:require [clojure.string :as str]))

(defn create-table [sql]
  (let [matcher (re-matcher #"create table (\w+) \((.* .*,?)\)" sql)
        result (re-find matcher)]
    (when result (let [table-name (second result)
                       columns-str (nth result 2)
                       columns-list (map #(str/split % #" ") (str/split columns-str #", ?"))
                       columns-map (map (fn [[name type]] {:name name :type type}) columns-list)]
                   {:table table-name :columns columns-map}))))

(defn insert [sql]
  (let [matcher (re-matcher #"insert into (\w+) \((.*,?)\) values \((.*,?)\)" sql)
        result (re-find matcher)
        table-name (second result)
        columns-str (nth result 2)
        columns-list (str/split columns-str #", ?")
        values-str (nth result 3)
        values-list (str/split values-str #", ?")] {:table table-name :columns columns-list :values values-list}))


(insert "insert into author (id, name, age) values (1, Douglas Crockford, 62)")