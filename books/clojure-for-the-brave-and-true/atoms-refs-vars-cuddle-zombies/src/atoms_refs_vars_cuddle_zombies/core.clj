(ns atoms-refs-vars-cuddle-zombies.core
  (:gen-class))


(def fred (atom {:cuddle-hunger-level 0
                 :percent-deteriorated 0}))

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


(def sock-varieties #{"Darned" "argyle" "wool" "Mulleted"
                      "passive-aggressive" "striped" "polka-dotted"
                      "athletic" "business" "power" "invisible" "gollumed"})

(defn sock-count
  [sock-variety count]
  {:variaty sock-variety
   :count count})

(defn generate-sock-gnome
  "Create an initial  sock gnome state with no socks"
  [name]
  {:name name
   :socks {}})

(def sock-gnome (ref (generate-sock-gnome "Barumpharumph")))
(def dryer (ref {:name "LG 1337"
                 :socks (set (map #(sock-count % 2) sock-varieties))}))


@dryer

(defn steal-sock
  [gnome dryer]
  (dosync
   (when-let [pair (some #(when (= (:count %) 2) %) (:socks @dryer))]
     (let [updated-count (sock-count (:variaty pair) 1)]
       (println "The " (:name @gnome) " gnome is about to steal one sock of variety " (:variaty pair))
       (alter gnome update-in [:socks] conj updated-count)
       (alter dryer update-in [:socks] disj pair)
       (alter dryer update-in [:socks] conj updated-count)))))
(steal-sock sock-gnome dryer)


(defn missing-variety-socks [dryer]
  (let [socks (:socks @dryer)]
    (filter (fn [pair] (= (:count pair) 1)) socks)))

(missing-variety-socks dryer)

(def counter (ref 0))
(future
  (dosync
   (alter counter inc)
   (println @counter "First increment")
   (Thread/sleep 500)
   (alter counter inc)
   (println @counter "Second Incremetn, Finish Transaction")))
(Thread/sleep 250)
(println @counter, "This still have the 0 value read outside the transaction")
(Thread/sleep 500)
(println @counter, "after ref updated by transaction")


(defn sleep-print-update
  [sleep-time thread-name update-fn]
  (fn [state]
    (Thread/sleep sleep-time)
    (println (str thread-name ": " state))
    (update-fn state)))

(def counter2 (ref 0))

(future (dosync (commute counter2 (sleep-print-update 100 "Thread A" inc))))
(future (dosync (commute counter2 (sleep-print-update 150 "Thread B" inc))))




(def ^:dynamic *notification-address* "dobby@elf.org")
*notification-address*
(binding [*notification-address* "test@elf.org"]
  *notification-address*)


(defn notify [message]
  (str "TO: " *notification-address* "\n"
       "MESSAGE:" message))
(notify "I fell")

(binding [*notification-address* "test@elf.org"]
  (notify "Test"))


(binding [*out* (clojure.java.io/writer "print-output")]
  (println "A man who carries a cat by the tail learns something he can learn in no other way"))

(slurp "print-output")


(println ["print" "all" "the" "things"])

(binding [*print-length* 1]
  (println ["print" "Just one"]))


(def ^:dynamic *troll-thought* nil)

(defn troll-riddle
  [your-answer]
  (let [number "man meat"]
    (when (thread-bound? #'*troll-thought*)
      (set! *troll-thought* number))
    (if (= number your-answer)
      "Troll: You can cross the bridge"
      "Troll: Time to eat you")))

(binding [*troll-thought* nil]
  (println (troll-riddle 2))
  (println "SUCCULENT HUMAN: oooooooh!" "The answer was" *troll-thought*))



(def power-source "Hair")

(alter-var-root #'power-source (fn [_] "7-eleven park lot"))

power-source


(defn always-1
  []
  1)

(take 5 (repeatedly always-1))
(take 5 (repeatedly (partial rand-int 10)))

(def alphabet-length 26)

(def letters
  (mapv
   (comp str char (partial + 65))
   (range alphabet-length)))

(defn random-string
  [length]
  (apply 
   str (take length 
             (repeatedly 
              #(rand-nth letters)))))

(defn random-string-list
  [list-length string-length]
  (doall (take list-length (repeatedly (partial random-string string-length)))))

(def orc-names (random-string-list 3000 7000))

(time (dorun (map clojure.string/lower-case orc-names)))
(time (dorun (pmap clojure.string/lower-case orc-names)))

(def numbers [1 2 3 4 5 6 7 8 9 10])

(partition-all 3 numbers)

(pmap inc numbers)

(pmap (fn [number-group] (doall (map inc number-group)))
      (partition-all 3 numbers))

(apply concat (pmap (fn [number-group] (doall (map inc number-group)))
                    (partition-all 3 numbers)))

(def orc-names-abbrevs (random-string-list 20000 300))

(time (dorun
       (apply concat
              (pmap (fn [name] (doall (map clojure.string/lower-case name)))
                    (partition-all 1000 orc-names-abbrevs)))))










(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
