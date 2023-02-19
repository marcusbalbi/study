(ns examples.chapter2
  (:require [clojure.core])
  (:require [clojure.string :as str])
  (:import (java.io File)))


(println "hello")
(str/split "SPLIT THIS STRING" #"\s")

(+ 2 3)

(+ 1 2 3 4 5)

(+)

(- 10 5)
(* 3 10 10)
(> 5 2)
(>= 2 2)
(<= 2 4)
(= 5 3)

(/ 22 7)
(/ 22.0 7)

(/ 10 2)

(quot 22 7)
(rem 22 7)

(* 22M 10M)
(* 10N 23N)

(+ 5 6 7 8 9 10M)

(Integer/parseInt "1222")

(rand-int 200)

[1 2 3]

;(1 2 3)
(quote (1 2 3))
'(1 2 3 4 5 6 2)

#{1 2 3 4 5}
;#{1 2 3 4 5 6 4}

{"Lisp" "Mcarthy" "Clojure" "Hickey"}

(def employees {"Daniel" "Marketing" "Rafael" "Sales" "Lucas" ["IT", "Devops"]})

employees
(get employees "Lucas")


:foo

(def inventors {:lisp "Mcarthy" :clojure "Hickey"})

(:lisp inventors)

(defrecord Book [title auhtor])

(->Book "Fundação" "Isac Asimov")

(println "This is a \nMultiline string")
(println "This is also
multiline string")

(str 1 2 3 nil "a" true false)

;(def true "eba")

(if true true false)
(if false false false)
(if "" true false)
(if 0 true false)
(if nil true false)
(if {} true false)
(if '() true false)

(true? true)
(true? "string")
(false? true)
(zero? 12)
(nil? "")


(str "Hello" " " "World")

(string? "hello")
(keyword? :hello)
(symbol? 'hello)

(let [name "TESTE" inventor (:lisp inventors)] (str "name" name " Inventor: " inventor))


(defn greeting
  "Returns a greeting of the form 'Hello, username.'"
  ([] (greeting "Stranger"))
  ([username]
   (str "Hello, " username))
  ([username second] (str "hello, " username second)))

(greeting "Balbi")
(greeting)
(greeting "abbli", "masdas")

;(doc greeting)

(defn date
  [person-1 person-2 & chaperones]
  (println person-1 "and" person-2 "Went out with " (count chaperones) "chaperones"))

(type :test)
(type +)
(type true)
(type nil)

(date "Marcus" "Julia" "Rafael" "Joao")


(defn indexable-word? [word]
  (> (count word) 2))

(require '[clojure.string :as str])
(filter indexable-word? (str/split "A fine day it is" #"\W+"))
(filter (fn [w] (> (count w) 2)) (str/split "A fine day it is" #"\W+"))
(filter #(> (count %) 2) (str/split "A fine day it is" #"\W+"))

(defn indexable-words
  [text]
  (let [indexable-word? #(> (count %) 2)]
    (filter indexable-word? text)))

(indexable-words (str/split "A fine day it is" #"\W+"))


(defn make-greeter
  [greeting-prefix]
  (fn [username] (str greeting-prefix ", " username)))

(def hi-there-greeting (make-greeter "Hi there"))
(def aloha-greeting (make-greeter "Aloha"))

(hi-there-greeting "Balbi")
(aloha-greeting "Balbi")

((make-greeter "Hello there") "Balbi")

(def foo 10)
foo
(var foo)
#'foo


(defn triple
  ([number] (* 3 number))
  ([number & numbers]
   (map triple (conj numbers number))))

(triple 10 20 30)

(fn? triple)
(fn? foo)

(defn square-corners [bottom left size]
  (let [top (+ bottom size)
        right (+ left size)]
    [[bottom left] [top left] [top right] [bottom right]]))

(square-corners 5 5 10)

(defn greet-author-1 [author]
  (println "Hello," (:first-name author)))

(greet-author-1 {:first-name "Jhon" :last-name "Doe"})

(defn greet-author-2 [{fname :first-name}]
  (println "Hello," fname))


(greet-author-2 {:first-name "Jhon" :last-name "Doe"})

(let [[x y :as coords] [1 2 3 4 5 6]]
  (str " x: " x " y: " y " , number of coords:" (count coords)))


(require '[clojure.string :as str])
(defn ellipsize [words]
  (let [[w1 w2 w3] (str/split words #"\s+")]
    (str/join " " [w1 w2 w3 "..."])))

(ellipsize "This is my first text do you think it will be nice")


(resolve 'foo)

(java.io.File/separator)

;; only for java classes
(import '(java.io InputStream File))
(.exists (File. "/tmp"))

(require 'clojure.string)
(clojure.string/split "Hello there", #"\s")

(require '[clojure.string :as s])
(s/join "|" ["separate" "by" "pipe"])

(meta #'foo)

(def ^{:tag "important"} PI 3.14)

(meta #'PI)


(new java.util.Random)
(java.util.Random.)

(. (java.util.Random.) nextInt)
(def rnd (java.util.Random.))

(. rnd nextInt 10)

(. Math PI)
(. System lineSeparator)

(.nextInt rnd 10)

(System/lineSeparator)

(comment
  (defn ignore-me
    []
    ;; ignored!
    ))

;; (ignore-me)

(defn double [number]
  #_(println "doubles the number" number)
  (* number 2))

(double 23)


(defn is-small? [number]
  (if (< number 50)
    "Yes"))

(is-small? 30)

(is-small? 130)

(defn is-big? [number]
  (if (> number 100)
    "Yes" "No"))

(is-big? 100)
(is-big? 10090M)


(defn is-small2? [number]
  (if (< number 100)
    (do
      (println number " is small")
      "Yes")
    (do
      (println number "is greater")
      "No")))

(is-small2? 150)

(loop [result [] x 5]
  (if (zero? x)
    result
    (recur (conj result x) (dec x))))


(defn countdown [result x]
  (if (zero? x)
    result
    (recur (conj result x) (dec x))))


(countdown [] 10)

(into [] (take 5 (iterate dec 5)))

(into [] (drop-last (reverse (range 6))))

(vec (reverse (rest (range 6))))

(reverse (range 10))

(into [1 2 3] [4 5 6])
(into {:job "Engineer" :hobbie "Play Video games"} {:name "Donovan", :job "Salesman"})

(defn indexed [coll] (map-indexed vector coll))

(reverse (map-indexed vector "Marcus"))

(indexed "abcderf")

(defn index-filter [pred coll]
  (when pred
    (for [[idx elt] (indexed coll)
          :when (pred elt)] idx)))

(index-filter #{\a \b} "abcbbb")

(defn index-of-any [pred coll]
  (first (index-filter pred coll)))



(index-of-any #{\a \b} "abcbbb")

(index-filter #{:h} [:t :t :t :h :h :h])
(nth (index-filter #{:h} [:t :t :t :h :h :h]) 2 nil)
(nth (index-filter #{:h} [:t :t :t :h :h :h]) 3 nil)