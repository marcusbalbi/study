(ns examples.chapter9
  (:require [clojure.string :as str]))

(defn my-print [ob]
  (.write *out* ob)
  (.write *out* "\n"))

(my-print "Hello")


(defn my-print [ob]
  (cond
    (nil? ob) (.write *out* "nil")
  :else (.write *out* ob))
  (.write *out* "\n"))


(my-print nil)


(defmulti my-print class)

(defmethod my-print String [ob]
  (.write *out* ob)
  (.write *out* "\n"))

(defmethod my-print nil [ob]
  (.write *out* "nil")
  (.write *out* "\n"))

(defmethod my-print java.util.Collection [ob]
  (.write *out* (str "[" (str/join ", " ob) "]"))
  (.write *out* "\n"))

(defmethod my-print Number [ob]
  (.write *out* (.toString ob))
  (.write *out* "\n"))

(my-print "aaa")
(my-print nil)
(class [1 2 3])
(my-print [1 2 3])

(my-print 12)

(isa? Long Number)

(defmethod my-print :default
 [ob]
  (.write *out* "#<")
(.write *out* (.toString ob))
(.write *out* ">"))


(my-print (java.util.Random. ))
(my-print (java.sql.Date. 0))

(my-print (take 6 (cycle [1 2])))


:checking
::cheking