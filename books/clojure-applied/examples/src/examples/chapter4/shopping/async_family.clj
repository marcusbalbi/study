(ns examples.chapter4.shopping.async-family
  (:require [clojure.core.async :refer [<! >!! chan go go-loop]]
            [examples.chapter4.shopping.store :as store]))


(def shopping-list (ref #{}))
(def assignments (ref #{}))
(def shopping-cart (ref #{}))
(def my-kids {:jhon 0})

(defn init []
  (store/init {:eggs 2 :bacon 3 :apples 3 :candy 5 :soda 2
               :milk 1 :bread 3 :carrots 1 :potatos 1 :cheese 3})
  (dosync
   (ref-set shopping-list #{:milk :butter :bacon :eggs})
   (ref-set assignments #{})
   (ref-set shopping-cart #{})))

(defn assignment [child]
  (get @assignments child))

(defn buy-cand []
  (dosync
    (commute shopping-cart conj (store/grab :candy))))

(defn maybe? [fn]
  (let [chance (rand-int 6)]
  (when (< 3 chance)
    (fn))))

(defn dawdle []
  (let [t (rand-int 5000)]
    (Thread/sleep t)
    (maybe? buy-cand)))

(defn collect-assignement [child]
  (let [item (assignment child)]
    (dosync
      (alter shopping-cart conj item)
      (alter assignments dissoc child)
      (ensure shopping-list))))

(defn assign-item-to-child [child]
  (let [item (first @shopping-list)]
    (dosync
      (alter assignments assoc child item)
      (alter shopping-list disj item))))

(defn send-child-for-item [child item q]
  (println "child " child "is searching for item " item)
  (dawdle)
  (collect-assignement child)
  (>!! q child))

(defn report []
  (println "Story Inventory" @store/inventory)
  (println "Shopping list" @shopping-list)
  (println "Assignments" @assignments)
  (println "shopping cart" @shopping-cart))

(defn go-shopping []
  (init)
  (report)
  (let [kids (chan 10)]
    (doseq [k my-kids]
           (>!! kids k))
    (go-loop [kid (<! kids)]
           (if (seq @shopping-list)
             (do
               (go (send-child-for-item kid (assign-item-to-child kid) kids))
               (recur (<! kids)))
             (do 
               (println "done shopping")
               (report))))))

(go-shopping)

(def [{:a "a"} {:b "b"} {:c "c"}])