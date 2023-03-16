(ns examples.chapter1.money)

(defrecord Currency [divisor sym desc])

(defrecord Money [amount ^Currency currency])

(defn validate-same-currency [m1 m2]
  (or (= (:currency m1) (:currency m2))
      (throw (ex-info "Currencies do not match" {:m1 m1 :m2 m2}))))

;; (defprotocol Comparable
;;  (compareTo [m1 m2]))

(defprotocol CompareMoney
  (compare-with [m1 m2]))

(extend-type Money
  CompareMoney
  (compare-with [this m2]
             (validate-same-currency this m2)
    (compare (:amount this) (:amount m2))))

(defn compare-money [m1 m2]
            (validate-same-currency m1 m2)
            (compare (:amount m1) (:amount m2)))

(def currencies {:usd (->Currency 100 "USD" "US Dollars")
                 :eur (->Currency 100 "EUR" "Euro")})


(defn =$ ([m1] true)
  ([m1 m2] (zero? (compare-with m1 m2)))
  ([m1 m2 & monies]
   (every? zero? (map #(compare-with m1 %) (conj monies m2)))))

(=$ (->Money 250 (:usd currencies))
    (->Money 250 (:usd currencies)) 
    (->Money 230 (:usd currencies)))