(ns pure-functions.core
  (:require [clojure.string :as s]))

(+ 1 2)

(defn wisdom [words]
  (str words ", Daniel-san"))


(wisdom "Always bathe on fridays")

; not referentialy transparent

(defn year-end-evaluation []
  (if (> (rand) 0.5)
    "You get a raise!"
    "Better luck next year!"))

(year-end-evaluation)


(defn analysis [text]
  (str "Character count:" (count text)))

(defn analyze-file [filename]
  (analysis (slurp filename)))


(analyze-file "text.txt")

(def great-baby-name "Rosanthony")

(let [great-baby-name "BloodHunter"])

great-baby-name

(defn sum
  ([vals] (sum vals 0))
  ([vals acc-total]
   (if (empty? vals) acc-total
       (sum (rest vals) (+ (first vals) acc-total)))))

(sum [1 2 3 4 5 6])

(rest [0 1 2 3 4 5])

(defn sum ([vals] (sum vals 0))
  ([vals acc-total]
   (if (empty? vals)
     acc-total
     (recur (rest vals) (+ (first vals) acc-total)))))

(sum [2 4 6 8 10])

(sum (range 20000))

(defn clean [text] (s/replace (s/trim text) #"lol" "LOL"))

(clean "My boa constrictor is so sassy lol!        ")


;; comp

((comp inc *) 2 3)


(def character
  {:name "Smooches Mcutes"
   :attributes {:intelligence 10
                :strenght 4
                :dexterity 5}})

(def c-int (comp :intelligence :attributes))
(def c-str (comp :strenght :attributes))
(def c-dex (comp :dexterity :attributes))

(c-int character)
(c-str character)
(c-dex character)


(defn getAttribute [c attr]
  (get-in c [:attributes attr]))

(defn getAttribute2 [c attr]
  (attr (:attributes c)))

(defn getIntelligence [c]
  (:intelligence (:attributes c)))

(getAttribute character :dexterity)
(getAttribute2 character :strenght)

(getIntelligence character)

(int 25.7)

(defn spell-slots [char]
  (int (inc (/ (c-int char) 2))))

(spell-slots character)

(def spell-slots-comp (comp int inc #(/ % 2) c-int))

(spell-slots-comp character)

(defn two-comp
  [f g]
  (fn [& args]
    (f (apply g args))))

((two-comp inc *) 2)


;; memoize

(defn sleepy-identity [x] (Thread/sleep 1000) x)


(sleepy-identity "Mr Fantastico")

(def memo-sleeppy-identity (memoize sleepy-identity))

(map memo-sleeppy-identity 
     ["Mr memoized6"
      "Mr memoized6"
      "Mr memoized6"])


;; assoc-in


(assoc-in {} [:person :address :street-name] "Rua Joao Cardozo")









