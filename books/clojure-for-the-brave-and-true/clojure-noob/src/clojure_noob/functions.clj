(ns cloure-noob.functions)

; Functions

(println ((get map-function "string-key") 1 2 3))

(println ((get map-function "inv" -) 1 2 3))

(or + -)

(println ((or + -) 1 2 3))

(and (= 1 1) +)
((and (= 1 1) +) 1 2 3)

((first [+ 0]) 1 2 3)

(inc 1.1)

(map inc [0 1 2 3])

(defn example-fn
  "This is an Example of a Function with all its 5 parts"
  [name]
  (str "Oh my good! " name "I am enjoying learning clojure and emacs"))

(println (example-fn "Julia!"))



;; Functions Multi-arity


(defn multi-arity
  ([x y]
   (str "Hello " x " and " y))
  ([x y z]
   (str "Hi " x " and " y " and " z)))

(println (multi-arity "Marcus" "Julia"))

(println (multi-arity "Marcus" "Julia" "Isabela"))

(defn x-chop
  ([name chop-type]
   (str "I " chop-type " chop " name "! Take that!"))
  ([name]
   (x-chop name "Karate")))

(x-chop "Kanye West" "slap")

(x-chop "Kanye West")

(defn call-names [& names]
  (str "Hello " names))

(println (call-names " Marcus" "Isabela" "Julia"))

(defn favorite-things [name & things]
  (str "Hi! this is the favorite things of " name ": " things))

(println (favorite-things "Marcus" "Books" "Computer" "Cars"))



;; Functions Destructuring


(defn my-first [[first-thing]]
  first-thing)

(my-first ["Car" "candy"])

(defn announce-treasure-location
  [{lat :lat lng :lng}]
  (println (str "Treasure lat " lat))
  (println (str "Treasure lng " lng)))

(announce-treasure-location {:lat 28.22 :lng 81.33})

(defn announce-treasure-location
  [{:keys [lat lng] :as treasure-location}] ; as is options to get access the original map
  (println treasure-location)
  (println (str "Treasure lat " lat))
  (println (str "Treasure lng " lng)))

(announce-treasure-location {:lat 15.10 :lng 45.33})


;; Functions Body


(defn returns-last-form
  []
  (+ 1 2 3 4)
  30
  "Joe")

(returns-last-form)

(defn number-comment [n]
  (if (> n 6)
    "Oh My God! this is a really big number"
    "That number is ok!, i Guess!"))

(number-comment 5)

(number-comment 7)



;; Anonymous Functions


((fn [x] (* x 3)) 8)

(map (fn [name] (str "Hi " name)) ["Darth Vader" "Spock"])

(def my-special-multiply (fn [x] (* x 3)))

(my-special-multiply 12)

(#(* % 3) 8)

(map #(str "Hi " %) ["Marcus Balbi" "Julia Balbi"])

(#(str %1 " and " %2) "Joao" "Joana")

(#(identity %&) "amanha" :amanha 2)



;; returning functions 


(defn inc-maker
  "Create a custom incrementor"
  [inc-by]
  #(+ % inc-by))

(def inc3 (inc-maker 3))

(inc3 30)



