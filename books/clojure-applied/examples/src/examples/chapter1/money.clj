(ns examples.chapter1.money)

(defrecord Currency [divisor sym desc])

(defrecord Money [amount ^Currency currency])

(defn validate-same-currency [m1 m2]
  (or (= (:currency m1) (:currency m2))
      (throw (ex-info "Currencies do not match" {:m1 m1 :m2 m2}))))

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

;; (=$ (->Money 250 (:usd currencies))
;;     (->Money 250 (:usd currencies)) 
;;     (->Money 250 (:usd currencies)))

(defn +$
  ([m1] m1)
  ([m1 m2]
   (validate-same-currency m1 m2)
   (->Money (+ (:amount m1) (:amount m2)) (:currency m1)))
  ([m1 m2 & monies]
   (reduce +$ m1 (conj monies m2))))

(+$ (->Money 23 :usd)
    (->Money 43 :usd)
    (->Money 1 :usd))

(defn *$ [m n]
  (->Money (* n (:amount m)) (:currency m)))

(*$ (->Money 10 :eur) 2.1)

(defn make-money
  ([] (make-money 0))
  ([amount] (make-money amount :usd))
  ([amount currency] (->Money amount currency)))

(defn new-money []
  (->Money 0 :usd))

;; in JS we might use this approach
(new-money)
;;or
;; in javascript since objects are multuble we could mutate zero-dollars
;; in clojure the only way is to redef (avoided)
(def zero-dollars (->Money 0 :usd))

zero-dollars

(make-money)
(make-money 1250)
(make-money 1250 :eur)
