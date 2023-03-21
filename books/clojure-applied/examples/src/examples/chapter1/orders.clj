(ns examples.chapter1.orders)

(defn new-orders [] (clojure.lang.PersistentQueue/EMPTY))

(defn add-order [orders order]
  (conj orders order))

(defn cook [order]
  (println "cooking..." order))

(defn cook-order [orders]
  (cook (peek orders)) (pop orders))

(let [orders (new-orders)
      orders (add-order orders "ORder 1")
      orders (add-order orders "ORder 2")
      orders (add-order orders "ORder 3")]
  (cook-order orders))