(ns cloure-noob.datastructure)


(println "Data Structures")

(println 93)
(println 1.2)
(println 1/5)


;(println 'Lord Voldemort') invalid
(println "Lord Voldemort")
(println "\"He who must not be named\"")
(def name "Galvão Bueno")
(println (str "Gooooooooooooooooooool é do Brasil!!!!!!" " - " name))


(def first-map { :first-name "Marcus" :last-name "Balbi" })

(def map-function { "string-key" + })

(def nested-map { :name { :first "Marcus" :middle "Vinicius" :last "Balbi" } })

(println map-function)

(hash-map :a 1 :b 2)

(get {:a 0 :b 1} :b)

; GET

(println (get {:a 0 :b { :c "Ha ha!"  }} :b))

(println (get {:a 0 :b { :c "Ha ha!"  }} :d))

(println (get {:a 0 :b { :c "Ha ha!"  }} :d "Unicorns?"))

; GET-IN

(println (get-in {:a 0 :b { :c "Ha ha!"  }} [:b :c] "HEHE!"))

(println (get-in {:a 0 :b { :c "Ha ha!"  }} [:b :c :d] "HEHE!"))

(println ({:a 0 :b { :c "Ha ha!"  }} :a))


; keywords as functions

(println (:a { :a "Test keyword as func to get" :b "another keyword" }))

(println (:q { :a "Test keyword as func to get" :b "another keyword" } "DEFAULT VALUE")) ; has default as get


; Vectors

(println [1 2 3])

(println (get [3 2 1] 0))

(println (get [3 { :name "Marcus" :lastname "Balbi" } 1] 1))

(println (vector "creepy" "Full" "Moon"))


; Lists

(println '(1 2 3 4))

(println (nth '(:a :b :c) 0)) ; nth is slower beacause it need to traverse

; (println (nth '(:a :b :c) 10)) IndexOutOfBoundsException

(println (list 1 "two" {3 4}))



; Sets

(println #{"Kurt vonnegut" 20 :circle})

(println #{"Kurt vonnegut" 20 :circle 20}) ;duplicated exception

(println (hash-set  1 1 2 2 3 3 4 4))

(println (conj #{:a :b} :b))

(println (set [3 3 3 4 4 4]))

(println (contains? #{:a :b} :a))

(println (contains? #{:a :b} 5))

(println (contains? #{nil} nil))

(println (:a #{:a :b}))

(println (get #{:a :b} :a))

(println (get #{:a nil} nil))

(println (get #{:a :b} "Kurt Vonnegut"))


; Functions

(println ((get map-function "string-key") 1 2 3))

(println ((get map-function "inv" -) 1 2 3))

(or + - )

(println ((or + -) 1 2 3))

(and (= 1 1) +)
((and (= 1 1) +) 1 2 3)

((first [+ 0]) 1 2 3)


(inc 1.1)

(map inc [0 1 2 3])

(defn example-fn
  "This is an Example of a Function with all its 5 parts"
  [name]
  (str "Oh my good! " name "I am enjoying learning clojure and emacs")
)

(example-fn "Julia!")
