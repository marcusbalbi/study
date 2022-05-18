(ns abstractions.wolf)

;; (def were-types [:wolf :simmons])

;; (defn- valid-were-type? [were-type]
;;   (some #(= were-type %) were-types))

;; (valid-were-type? :simmons)

;; (defn were-creature-type-selector [were-creature]
;;   (if (valid-were-type? (:were-type were-creature))
;;     (:were-type were-creature)
;;     nil))

;; (were-creature-type-selector { :were-type :wolf })

;; (defmulti full-moon-behavior were-creature-type-selector)

(defmulti full-moon-behavior (fn [were-creature] (:were-type were-creature)))

(defmethod full-moon-behavior :wolf
  [were-creature]
  (str (:name were-creature) " will howl and murder"))

(defmethod full-moon-behavior :simmons
  [were-creature]
  (str (:name were-creature) " will encourage people and sweat to the oldies"))

(defmethod full-moon-behavior nil
  [were-creature]
  (str (:name were-creature) " will keep doing whatever it was doing before!"))

(defmethod full-moon-behavior :default
  [were-creature]
  (str (:name were-creature) " will rock n roll"))

(full-moon-behavior { :were-type :wolf
                      :name "Rachel from next door"})

(full-moon-behavior {:were-type :simmons
                     :name "Andy the baker"})

(full-moon-behavior {:were-type :vampire
                     :name "Carlos from college"})

(full-moon-behavior {:were-type nil
                     :name "Lucas from Work"})


