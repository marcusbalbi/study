(ns chapter1.core)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(foo "Balbi")

(defn blank? [str]
  (every? #(Character/isWhitespace %) str))

(blank? "    ")
(blank? "TEST")

(blank? nil)
(blank? "")

(defrecord Person [first-name last-name])

(def balbi (->Person "Marcus" "Balbi"))
(:last-name balbi)
(:first-name balbi)
(get balbi :first-name)
(conj balbi {:first-name "Vinicius"})

(defn hello-world [username]
  (println (str "hello world, " username)))


(hello-world "Balbi")

(def my-vector [1,2,3,4,5])
(def my-vector2 [1 2 3 4 5])

(def x 8)
(cond (= x 10) "Equal"
      (> x 10) "more"
      (< x 10) "less")

;; const x = 10;
;; if (x === 10) return "Equal"
;; if (x > 10) return "more"
;; if (x < 10) return "less"


(def compositions [
                   {:name "Black Sabbath" :composer "Ozzy Osbourne"}
                   {:name "Rock n Roll" :composer "Led Zeppelin"}
                   {:name "Black Night" :composer "Deep purple"}])
(for [c compositions :when (= (:name c) "Black Night")]
(:composer c))

(System/getProperties)

(def accounts (ref #{}));
(defrecord Account [id balance])

(dosync
(alter accounts conj (->Account "CLJ" 1000)))

(.. "hello" getClass getProtectionDomain)

