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
 (fn [new-map [key val]] (assoc new-map key (inc val))) {} {:max 31 :min 10})



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
                   {:id 4 :amount 5.50 :description "Teste 4" :enabled false}])

(println (reduce only-enabled [] transactions))

(filter (fn [transaction] (enabled? transaction)) transactions)




;; take, drop, take-while, drop-while

(println (take 1 transactions))

(println (drop 3 transactions))

(def food-journal [
                   {:month 1 :day 1 :human 5.3 :critter 2.3}
                   {:month 1 :day 2 :human 5.1 :critter 2.0}
                   {:month 2 :day 1 :human 4.9 :critter 2.1}
                   {:month 2 :day 2 :human 5.0 :critter 2.5}
                   {:month 3 :day 1 :human 4.2 :critter 3.3}
                   {:month 3 :day 2 :human 4.0 :critter 3.8}
                   {:month 4 :day 1 :human 3.7 :critter 3.9}
                   {:month 4 :day 2 :human 3.7 :critter 3.6}
                   ])

;; jan and feb
(println (take-while (fn [m] (< (:month m) 3)) food-journal))

;; only mars
(println (drop-while (fn [m] (< (:month m) 3)) food-journal))



(println (filter #(< (:human %) 5) food-journal))

(println (filter #(< (:month %) 3) food-journal))


(println (some #(> (:month %) 4) food-journal))

(println (some #(< (:human %) 4) food-journal))

(println (some #(and (< (:human %) 4) %) food-journal))


;; sort


(println (sort [3 2 1]))

(println (sort-by count ["aa" "a" "aaaa" "b"]))

(println (concat [1 2] [3 4]))


;; lazy seqs

(def vampire-database {
                       0 {:makes-blood-puns? false :has-pulse? true :name "Mcfishick"}
                       1 {:makes-blood-puns? false :has-pulse? true :name "Marcus"}
                       2 {:makes-blood-puns? true :has-pulse? false :name "Joao"}
                       3 {:makes-blood-puns? true :has-pulse? true :name "Julio"}
})

(defn vampire-related-details 
  [social-securirt-number]
  (Thread/sleep 1000)
  (get vampire-database social-securirt-number))


(defn vampire?
  "Is a Vampire"
  [record]
  (and (:makes-blood-puns? record)
       (not (:has-pulse? record))
       record))

(defn identify-vampires 
  [social-security-numbers]
  (first (filter vampire? (map vampire-related-details social-security-numbers))))


(time (vampire-related-details 0))

(time (def mapped-details (map vampire-related-details (range 1 1000000))))

(time (get mapped-details 2 0))

;(time (identify-vampires (range 1 1000000)))


;; infinite lists


(concat (take 8 (repeat "na")) ["Batman"])

(def bla (take 10 (repeat "bla")))

(println bla)


(take 3 (repeatedly (fn [] (rand-int 10))))

(defn even-numbers
  ([] (even-numbers 0))
  ([n] (cons n (lazy-seq (even-numbers (+ n 2))))))

(take 50 (even-numbers))










