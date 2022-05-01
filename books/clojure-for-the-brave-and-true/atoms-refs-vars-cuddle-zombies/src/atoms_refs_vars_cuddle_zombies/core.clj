(ns atoms-refs-vars-cuddle-zombies.core
  (:gen-class))


(def fred (atom {
                 :cuddle-hunger-level 0
                 :percent-deteriorated 0
}))

@fred

(let [zombie-state @fred]
  (if (>= (:percent-deteriorated zombie-state) 50)
    (future (println (:cuddle-hunger-level zombie-state)))))

(swap! fred (fn [current-satate]
              (merge-with + current-satate {:cuddle-hunger-level 1})))

@fred


(swap! fred (fn [current-satate]
              (merge-with + current-satate {:cuddle-hunger-level 1
                                            :percent-deteriorated 1})))

(defn increase-cuddle-hunger-level
  [zombie-state increase-by]
  (merge-with + zombie-state {:cuddle-hunger-level increase-by}))


(increase-cuddle-hunger-level @fred 10)

(swap! fred increase-cuddle-hunger-level 10)

@fred

(update-in {:a {:b 3}} [:a :b] inc)

(update-in {:a {:b 3}} [:a :b] + 10)

(swap! fred update-in [:cuddle-hunger-level] + 5)

(let [num (atom 1)
      s1 @num]
  (swap! num inc)
  (println "version 1 of num" s1)
  (println "new version of num " @num))


(reset! fred {:cuddle-hunger-level 0 :percent-deteriorated 0})



(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
