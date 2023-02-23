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