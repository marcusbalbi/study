(ns examples.chapter4
  (:require [clojure.core]))


(def a '(1 2))
(def b (cons 0 a))
(def c (conj a 0))
(println a b c)

(map inc (range 5 10))
(drop 3 (map inc (range 5 10)))

(defn fibo []
  (map first (iterate (fn [[a b]] [b (+ a b)]) [0N 1N])))

;; (fibo)

(take 10 (drop 1 (fibo)))

;; this do not calc untill it is needed
(def lots-of-fibos (take 1000000 (fibo)))

(nth lots-of-fibos 10000)


(set! *print-length* 10)
(take 100 (fibo))


; finite sequence ok to use recur
(defn count-heads-pairs
  [coll]
  (loop [cnt 0 coll coll]
    (if (empty? coll)
      cnt
      (recur (if (= :h (first coll) (second coll))
               (inc cnt)
               cnt)
             (rest coll)))))

(count-heads-pairs [:h:t :h :t :t :h])
(count-heads-pairs [:h:t :h :h :t :t])


(defn by-pairs
  [coll]
  (let [take-pair (fn [c]
                     (when (next c)
                       (take 2 c)))]
    (lazy-seq (when-let [pair (seq (take-pair coll))]
                (cons pair (by-pairs (rest coll)))))))

(by-pairs [:h :t :h :t])


(defn count-heads-pairs-2 [coll]
  (count (filter (fn [pair] (every? #(= :h %) pair))
                 (by-pairs coll))))

(count-heads-pairs-2 [:h:t :h :t :t :h])
(count-heads-pairs-2 [:h:t :h :h :t :t])


(partition 2 [:h :t :h :h])
(partition 2 1 [:h :t :h :h])


(def add-3 (partial + 3))

(add-3 7)

(trampoline + 2 2)