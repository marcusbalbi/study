(ns examples.chapter5
  (:require [clojure.core]
            [clojure.spec.alpha :as s]))

(defn scale-ingredient
  [ingrediant factor]
  (update ingrediant  :quantity * factor))

(scale-ingredient {:quantity 25 } 3)
(scale-ingredient {:name "Sugar" } 3)

(s/def ::ingredient (s/keys :req [::name ::quantity ::unit]))
(s/def ::name string?)
(s/def ::quantity number?)
(s/def ::unit keyword?)

(s/fdef scale-ingrediant :args (s/cat :ingredient ::ingredient :factor number?) :ret ::ingredient)


(s/def :my.app/company-name string?)

(s/valid? :my.app/company-name "Acme Moving")
(s/valid? :my.app/company-name 123)


(def valid-colors #{:red :green :blue})
(valid-colors :gray)
(valid-colors :green)
(s/def :marble/color2 (fn [c] (some #(= c %) valid-colors)))
(s/def :marble/color valid-colors)

(s/valid? :marble/color :gray)
(s/valid? :marble/color :green)
(s/valid? :marble/color2 :green)
(s/valid? :marble/color2 :gray)
(s/valid? :marble/color2 :blue)


(s/def :bowling/ranged-roll (s/int-in 0 11))
(s/valid? :bowling/ranged-roll 10)
(s/valid? :bowling/ranged-roll 11)
(s/valid? :bowling/ranged-roll 0)
(s/valid? :bowling/ranged-roll 4)


(s/def :my.app/company-description (s/nilable string?))

(s/valid? :my.app/company-description "Descp")
(s/valid? :my.app/company-description nil)
(s/valid? :my.app/company-description false)
(s/valid? :my.app/company-description 123)
(s/valid? :my.app/company-description "   ")

(s/def ::odd-int (s/and int? odd?))

(s/valid? ::odd-int 10)
(s/valid? ::odd-int 5)
(s/valid? ::odd-int 5.2)


(s/def ::odd-or-42 (s/or :odd ::odd-int :42 #{42}))

(s/valid? ::odd-or-42 42)
(s/valid? ::odd-or-42 19)
(s/valid? ::odd-or-42 2)
(s/conform ::odd-or-42 42)
(s/conform ::odd-or-42 19)
(s/conform ::odd-or-42 2)

(s/explain ::odd-or-42 0)
(s/explain-data ::odd-or-42 0)
(s/explain-str ::odd-or-42 0)

(s/def ::names (s/coll-of string?))

(s/valid? ::names ["Marcus" "Julia"])
(s/valid? ::names ["Marcus" :age])

(s/def ::my-sets (s/coll-of int? :kind set? :min-count 2))

(s/valid? ::my-sets #{2})
(s/explain ::my-sets #{2})
(s/valid? ::my-sets #{2 3})
(s/valid? ::my-sets '(0 1 2 3))
(s/valid? ::my-sets #{"Joana" "Juiana"})
(s/explain ::my-sets #{"Joana" 3})

(s/def ::scores (s/map-of string? int?))

(s/valid? ::scores {"Stu" 12 "Alex" 33})
(s/valid? ::scores {"Stu" 12 "Alex" "aa"})


(s/def ::point (s/tuple float? float?))

(s/conform ::point [1.3 2.7])
(s/conform ::point [1.3 2])

(.toString (java.util.UUID/randomUUID))

(s/def :music/id uuid?)
(s/def :music/artist string?)
(s/def :music/title string?)
(s/def :music/date inst?)



(s/def :music/release
  (s/keys :req [:music/id]
          :opt [:music/artist
                :music/title
                :music/date]))

(s/def ::cat-example (s/cat :s string? :i int?))

(s/valid? ::cat-example ["aas" 100])
(s/valid? ::cat-example ["aas" "asds"])
(s/conform ::cat-example ["aas" 100])

(s/def ::alt-example (s/alt :i int? :k keyword?))

(s/valid? ::alt-example [100])
(s/valid? ::alt-example [:foo])
(s/conform ::alt-example [:foo])
(s/valid? ::alt-example ["ste"])


(def rep (repeat "="))

(take 2 rep)






