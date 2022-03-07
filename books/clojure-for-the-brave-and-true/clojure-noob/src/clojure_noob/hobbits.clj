(ns clojure-noob.hobbits 
  (:require [clojure.string :as string]))

;; let

(println (let [x 3] x))

(def dalmatians-list ["Pongo" "Perdita" "Puppy 1" "Puppy 2"])

(let [dalmatians (take 2 dalmatians-list)] dalmatians)

(def x 0)

(let [x 10] x)

(let [x (inc x)] x)

(let [[pongo & rest] dalmatians-list] [pongo rest])


(into [] (set [:a :a]))


(loop [iteration 0]
  (println "iteration: " iteration)
  (if (> iteration 3)
    (println "Goodbye!")
    (recur (inc iteration))))


(re-find #"^left-" "left-eye")

(re-find #"^left-" "left-chin")

(re-find #"^left-" "cleft-body")


(reduce + [1 2 3 4])

(reduce + 15 [1 2 3 4])




;; Hobbits 

(def asym-hobbit-body-parts [
                             {:name "head" :size 3}
                             {:name "left-eye" :size 1}
                             {:name "left-ear" :size 1}
                             {:name "mouth" :size 1}
                             {:name "nose" :size 1}
                             {:name "neck" :size 2}
                             {:name "left-shoulder" :size 3}
                             {:name "left-upper-arm" :size 2}
                             {:name "chest" :size 10}
                             {:name "back" :size 10}
                             {:name "left-forearm" :size 3}
                             {:name "abdomen" :size 6}
                             {:name "left-kidney" :size 1}
                             {:name "left-hand" :size 2}
                             {:name "left-knee" :size 2}
                             {:name "left-thigh" :size 4}
                             {:name "left-lower-leg" :size 3}
                             {:name "left-achilles" :size 1}
                             {:name "left-foot" :size 2}])


(defn matching-part
  [part]
  {:name (string/replace (:name part) #"^left-" "right-")}
  :size (:size part))


(defn better-symmetrize-body-parts
  "Expects a seq of maps that a :name and :size"
  [asym-body-parts]
  (reduce (fn [final-body-parts part]
            (into final-body-parts (set [part (matching-part part)]))), [] asym-body-parts))

(better-symmetrize-body-parts asym-hobbit-body-parts)


(defn symmetrize-body-parts 
  "Expects a seq of maps that have a :name and :size" 
  [asym-body-parts]
  (loop [remaining-asym-parts asym-body-parts final-body-parts []]
    (if (empty? remaining-asym-parts)
      final-body-parts
      (let [[part & remaining] remaining-asym-parts]
        (recur remaining 
               (into final-body-parts
                     (set [part (matching-part part)])))))))

(symmetrize-body-parts asym-hobbit-body-parts)














