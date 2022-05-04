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


(defn shuffle-speed
  [zombie]
  (* (:cuddle-hunger-level zombie)
     (- 100 (:percent-deteriorated zombie))))

(defn shuffle-alert
 [key watched old-state new-state]
 (let [sph (shuffle-speed new-state)]
   (if (> sph 5000)
     (do
       (println "Run you Fool!")
       (println "The zombies speed is now " sph)
       (println "This message brought to your courtesy" key))
     (do
       (println "All well with " key)
       (println "Cuddle Hunger:" (:cuddle-hunger-level new-state))
       (println "Percent Deterioreted:" (:percent-deteriorated new-state))
       (println "SPH" sph)))))

(reset! fred {:cuddle-hunger-level 80
              :percent-deteriorated 2})

(add-watch fred :fred-shuffle-alert shuffle-alert)

(swap! fred update-in [:percent-deteriorated] + 1)

(swap! fred update-in [:percent-deteriorated] + 60)

(defn percent-deteriorated-validator
  [{:keys [percent-deteriorated]}]
  (or (and (>= percent-deteriorated 0)
           (<= percent-deteriorated 100))
      (throw (IllegalStateException. "Thats not mathy!!"))))


(def bobby 
  (atom {:cuddle-hunger-level 0 :percent-deteriorated 0}
        :validator percent-deteriorated-validator))

(swap! bobby update-in [:percent-deteriorated] + 200)



(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
