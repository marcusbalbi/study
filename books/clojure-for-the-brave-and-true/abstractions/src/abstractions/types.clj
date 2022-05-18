(ns abstractions.types)


(defmulti types (fn [x y] [(class x) (class y)]))

(defmethod types [java.lang.String java.lang.String]
  [x y]
  "Two Strings")

(types "String 1" "String 2")