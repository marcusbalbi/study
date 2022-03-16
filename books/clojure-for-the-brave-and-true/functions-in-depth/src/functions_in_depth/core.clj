(ns functions-in-depth.core)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(def person { :name "Balbi" :age 15 })

(map (fn [p] (println (first p))) person)

(defn titleize [topic] (str topic " for the brave and true"))

(println (map titleize ["Hamsters" "Ragnarok"]))

(println (map titleize '("Empathy" "Decorating")))

(println (map titleize #{"Elbows" "Soap Carving"}))

(println (map #(titleize (second %)) {:uncomfortable-thing "winking"}))


(println (seq '(1 2 3)))

(println (seq  [1 2 3]))

(println (seq #{1 2 3}))

(println (seq person))

(println (into {} (seq person)))

(println (map inc [1 2 3]))

(println (map str ["a" "b" "c"] ["A" "B" "C"]))


;; vampire example map

(def human-consumption [8.1 7.3 6.6 5.0])

(def critter-consumption [0.0 0.2 0.3 1.1])

(defn unify-diet-data [human critter] {:human human :critter critter})

(map unify-diet-data human-consumption critter-consumption)

;; map with collection of functions
(def sum #(reduce + %))
(def avg #(/ (sum %) (count %)))

(defn stats 
  [numbers]
  (map #(% numbers) [sum count avg]))

(stats [3 4 10])

(stats [80 1 44 13 6])


;; keys as functions to map

(def identities [
                 {:alias "Batman" :real "Bruce Wayne"}
                 {:alias "Spider-man" :real "Perter Parker" }
                 {:alias "Santa" :real "Your Mom"}
                 {:alias "Easter Bunny" :real "Ÿour Dad"}
                 {:alias "Balbi" :real "Marcus Balbi"}
                 ])

(println (map :real identities))


;; reduce


(reduce 
 (fn)) [new-map [key val]] (assoc new-map key (inc val)) {} {:max 31 :min 10}



(reduce 
 (fn [new-map [key val]] 
   (if (> val 4) 
     (assoc new-map key val) 
     new-map))
 {} 
 {:human 4.1 :critter 4.2 :other 2})

(reduce (fn [n-val val] (if (> val 3) (conj n-val val))) []  [1 2 3 4 5 10 15 20 30])


(defn enabled? [transaction] (= (:enabled transaction) true))

(println (enabled? { :enabled false }))

(defn only-enabled [enabled-transactions transaction]
  (if (enabled? transaction) (conj enabled-transactions transaction) enabled-transactions))


(def transactions [
                   {:id 1 :amount 30 :description "Teste 1" :enabled true}
                   {:id 2 :amount 23.50 :description "Teste 3" :enabled true}
                   {:id 3 :amount 15 :description "Teste 2" :enabled true}
))                   {:id 4 :amount 5.50 :description "Teste 4" :enabled false}])

(println (reduce only-enabled [] transactions))

(filter (fn [transaction] (enabled? transaction)) transactions)




;; take, drop, take-while, drop-while

(println (take 1 transactions))

(println (drop 3 transactions))











