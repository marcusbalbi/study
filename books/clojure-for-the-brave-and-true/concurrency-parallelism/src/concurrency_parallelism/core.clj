(ns concurrency-parallelism.core
  (:gen-class))

(future
  (Thread/sleep 1000)
  (println "Hi there one second later!"))
(println "hi there now!")


(let [result (future (println "this prints once")
                     (+ 1 1))]
  (println result)
  (println "deref:" (deref result))
  (println "@:" @result))


(let [result (future (Thread/sleep 3000)
                     (+ 1 1))]
  (println "THe result is " @result)
  (println "It will be at least 3 seconds before I Print!"))


;; wait for 1 second if no response returns 5
(deref (future (Thread/sleep 5000) 0) 1000 5)

(realized? (future (Thread/sleep 1000)))

(let [f (future)]
  @f
  (realized? f))


;;; Delays

(def jackson-5-delay
  (delay (let [message "Just call my name and I'll be there!"]
           (println "First deref:" message)
           message)))

(force jackson-5-delay)


(def my-pictures ["serious.jpg" "fun.jpg" "smiling.jpg"])

(defn email-user [email-address]
  (println "Sending picture notification to " email-address))

(defn upload-document
  "Needs to be implemented"
  [picture]
  true)


(let [notify (delay (email-user "balbimarcus@gmail.com"))]
  (doseq [picture my-pictures]
    (future (upload-document picture)
            (force notify))))


;;; Promises

(def my-promise (promise))
(deliver my-promise (+ 1 2))
@my-promise


(def yak-butter-international
  {:store "Yak Butter International"
   :price 90
   :smoothness 90})

(def butter-than-nothing
  {:store "Butter Than Nothink"
   :price 150
   :smoothness 83})

;; buttter that meets requirements
(def baby-got-yak
  {:store "Baby Got Yak"
   :price 94
   :smoothness 99})

(defn mock-api-call [result]
  (Thread/sleep 1000)
  result)

(defn satisfactory?
  "If the butter meets our criteria, return the butter, ele return false"
  [butter]
  (and (<= (:price butter) 100)
       (>= (:smoothness butter) 97)
       butter))


(time (some (comp satisfactory? mock-api-call)
            [yak-butter-international butter-than-nothing baby-got-yak]))


(time
 (let [butter-promise (promise)]
   (doseq [butter [yak-butter-international butter-than-nothing baby-got-yak]]
     (future (if-let [satisfactory-butter (satisfactory? (mock-api-call butter))]
               (deliver butter-promise satisfactory-butter))))
   ;; (println "And the winner is " @butter-promise) this could block the thread if none is satisfact
   (println "And the winner is" (deref butter-promise 2000"timed out!"))))


(let [ferengi-wisdom-promise (promise)]
      (future (println "Here is some Ferengi wisdom: " @ferengi-wisdom-promise))
  (Thread/sleep 100)
  (deliver ferengi-wisdom-promise "Whisper your way to success")
  nil)







(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
