(ns chapter1.fibs)

(def fibs (lazy-cat [0 1] (map + fibs (rest fibs))))