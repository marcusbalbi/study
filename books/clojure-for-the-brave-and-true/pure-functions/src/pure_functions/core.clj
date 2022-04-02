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





