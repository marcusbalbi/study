(ns examples.chapter3
(:require [clojure.core]
          [clojure.string :as str]
          [clojure.java.io :refer [reader]]
          [clojure.set])
  (:import java.io.File))

(first nil)
(first [])
(first ["Joana" "Santos"])
(first [["Joana" "Santos"]])
(first {:name "Jonas"})

(rest nil)
(rest [])
(rest ["Joana"])
(rest ["Joana" "Santos"])
(rest {:name "Jhon" :age 15 :job "Student"})

(cons "Doe" ["Jhon"])

(seq nil)
(seq [])
(seq '())
(seq ["jonas"])
(seq {:name "Julia"})

(next ["jonas" "Doe"])

(seq? (rest [1 2 3 ]))

(first {:first-name "June" :last-name "Doe"})
(second {:first-name "June" :last-name "Doe"})
(rest {:first-name "June" :last-name "Doe"})
(second {:first-name "June"})
(nth (seq {:first-name "June"}) 0)

(cons [:last-name "Balbi"] {:first-name "Marcus"})

(first #{:the :quick :brown :fox})
(second #{:the :quick :brown :fox})
(rest #{:the :quick :brown :fox})
(cons :jumped #{:the :quick :brown :fox})

(sorted-set :the :quick :brown :fox)

{:a 1 :b 2 :c 3}
(sorted-map :a 1 :b 2 :c 3)
(sorted-map :c 3 :b 2 :a 1)


(conj '(1 2 3) :a)
(into '(1 2 3) '(:a :b :c))

(conj [1 2 3] :a)
(into [1 2 3] [:a :b :c])

;; seqs prints as list
;; seqs are logical lists
(rest [1 2 3])
(list? (rest [1 2 3]))
(seq? (rest [1 2 3]))


(count (range 2))
(range 2, 10)
(range 10)
(range 10 20)
(range 1 22, 2)
(range 0 -10 -1)
(range 1/2 4 1)

(repeat 12 "M")
(clojure.string/join "|"(repeat 4 "A"))

(take 10 (iterate inc 1))

(take 5 {:name "Josep" :age 23})

(def whole-numbers (iterate inc 1))

(rand-nth [0 1 2 3])
(take 20 (repeat 1))

(take 10 (cycle (range 3)))

(interleave whole-numbers ["A", "B", "C"])

(interpose "|" ["Banana" "Apple"])

(apply str (interpose " | " ["Banana" "Apple"]))

(require '[clojure.string :refer [join]])
(join " | " ["Banana" "Apple"])

(list "a" "b" "c")
(vector "a" "b" "c")
(hash-set 1 2 3 1 1 2 2 2 3)
(hash-map :name "Jhon" :age 34 :job "Freelancer")


(set [1 2 3 2 3 4 5 5 5 5])
(vec (range 10))


(take 10 (filter even? whole-numbers))
(take 10 (filter odd? whole-numbers))

(def vowel? #{\a \e \i \o \u})
(vowel? \o)
(def consonant? (complement vowel?))
(take-while consonant? "The-quick-fox-is-brown")
(drop-while consonant? "The-quick-fox-is-brown")


(split-at 5 (range 10))
(split-at 3 '({:a 1},{:b 2},{:c 3}, {:d 4}, {:e 5}))


(split-with #(<= % 10) (range 20))

(every? odd? [1 3 5])
(every? odd? [1 2 3 5])

(some even? [1 2 3])
(some even? [1 3 5])

(true? (some even? [1 3 5]))
(nil? (some even? [1 3 5]))

(some identity [nil false 1 nil 2])

(some #{3} (range 10))

(not-every? even? whole-numbers)
(not-any? even? whole-numbers)

(map #(format "<p>%s</p>" %) ["the" "quick" "brow" "fox"])


(map
  #(format "<%s>%s</%s>" %1 %2 %1)
  ["h1" "h2" "h3" "h4"]
  ["the" "quick" "brow" "fox"])


(reduce + (range 1 11))
(reduce * (range 1 11))

(sort [42 1 7 11])
(sort-by #(.toString %) [42 1 7 11])

(sort-by :grade > [{:grade 10} {:grade 1} {:grade 80}])


(def x (for [i (range 1 3)] (do (println i) i)))

x
(doall x)


(first (.getBytes "Hello"))
(rest (.getBytes "Hello"))

(cons (int \h) (.getBytes "ello"))


(first (System/getProperties))

(rest (System/getProperties))

(first "Marcus")
(rest "Balbi")
(cons \B "Albi")

(reverse "Hello")
(apply str (reverse "Hello"))

(map str (reverse "Hello"))

(re-seq #"\w+" "The quick brown fox")
(re-seq #"\s+" "The quick brown fox")

(sort (re-seq #"\w+" "the quick brown fox"))

(drop 2 (re-seq #"\w+" "The quick brown fox"))

(map str/upper-case (re-seq #"\w+" "The quick brown fox"))

(.listFiles (File. "."))

(seq (.listFiles (File. ".")))

(map #(.getName %) (seq (.listFiles (File. "."))))
(map #(.getName %) (.listFiles (File. ".")))

(file-seq (File. "."))
(count (file-seq (File. ".")))


(defn minutes-to-millis [mins]
  (* mins 1000 60))

(minutes-to-millis 5)

(defn recently-modified? 
  [file]
  (> (.lastModified file)
     (- (System/currentTimeMillis) (minutes-to-millis 30))))

(filter recently-modified? (.listFiles (File. ".")))
(filter recently-modified? (file-seq (File. ".")))



(defn make-last-modified
  [mins]
  (fn [file]
    (> (.lastModified file)
       (- (System/currentTimeMillis) (minutes-to-millis mins)))))

(filter (make-last-modified 1200) (file-seq (File. ".")))

(reader "./LICENSE")
(take 10 (line-seq (reader "./LICENSE")))

(with-open [rdr (reader "./LICENSE")]
  (count (filter #(not (str/blank? %)) (line-seq rdr))))

(defn clojure-source?
  [file]
  (.endsWith (.toString file) ".clj"))

(filter  clojure-source? (file-seq (File. ".")))



(peek '(1 2 3))
(pop '(1 2 3))

(rest '())
(pop '())

(peek [1 2 3])
(pop [1 2 3])

(get [:a :b :c], 1)
(get [:a :b :c], 5, :not-found)

([1 2 3 4 5] 1)
([1 2 3 4 5] 10)

(assoc [0 1 2 3 4] 2 :two)
(assoc {:name "Jhon"} :name "Jonas")

(subvec [1 2 3 4 5] 3)
(subvec [1 2 3 4 5] 1 3)

(take 2 (drop 3 [1 2 3 4 5]))


(keys {:name "Jhon" :age 12 :job "student"})
(str/join " - " (vals {:name "Jhon" :age 12 :job "student"}))

(get {:name "Jhon" :age 12 :job "student"} :job)

({:name "Jhon" :age 12 :job "student"} :name)
(:name {:name "Jhon" :age 12 :job "student"})

(:last-name {:name "Jhon" :age 12 :job "student"})
(:last-name {:name "Jhon" :age 12 :job "student" :last-name nil})
(contains? {:name "Jhon" :age 12 :job "student"} :last-name)
(contains? {:name "Jhon" :age 12 :job "student" :last-name nil} :last-name)

(def song {:name "Black night" :composer "Deep purple" :length 3.23})

(assoc song :year 1970)
(dissoc song :length)
(select-keys song [:name :length])

(merge song 
       {:name "BLACK NIGHT" :year 1970},
       {:name (str/upper-case (:name song))})

(str/includes? (:name song) "Bl")


(def languages #{"Java" "Clojure" "PHP" "Javascript" "F#" "Lisp"})

(def func-languages #{"Clojure" "F#" "Lisp"})

(clojure.set/union languages func-languages)
(clojure.set/difference languages func-languages)
(clojure.set/intersection languages func-languages)
(clojure.set/select #(str/starts-with? % "Java") languages)


(def songs (ref []))

(dosync 
(alter songs conj {:title "Black Sabbath"}))
@songs