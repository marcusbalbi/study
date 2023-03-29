(ns examples.chapter4.shopping.store)

(def inventory (atom {}))

(defn no-negative-values? [m]
  (not-any? neg? (vals m)))

(defn in-stock? [item]
  (let [cnt (item @inventory)]
    (and (pos? cnt))))

(defn init [items]
  (set-validator! inventory no-negative-values?)
  (reset! inventory items))

(defn grab [item]
  (if (in-stock? item)
    (swap! inventory update-in [item] dec)))

(defn stock [item]
  (if (in-stock? item)
    (swap! inventory update-in [item] inc)))

(init {:bacon 12 :pasta 10 :pizza 4})

(stock :bacon)
(grab :pizza)

;; (add-watch inventory :log (fn [k ref old-value new-value]
;;                             (println "LOG: " new-value)))

(add-watch inventory :stock-low-items (fn [k ref old-value new-value]
                                        (mapv (fn [[k v]]
                                               (when (= 1 v)
                                                 (do (println "Item " k "is close zero, stocking...")
                                                   (swap! ref assoc k 10)))) new-value)))

(.getWatches inventory)
(stock :pizza)
(grab :pizza)