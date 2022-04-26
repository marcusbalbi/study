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



(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
