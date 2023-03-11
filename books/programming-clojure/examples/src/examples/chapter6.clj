(ns examples.chapter6
  (:require [clojure.core])
  (:use clojure.pprint)
  (:import javax.swing.JOptionPane))


(def current-track (ref "The wizard"))

current-track

(deref current-track)

@current-track

; (ref-set current-track "N.I.B") ; refs are mutuble protect update

(dosync
  (ref-set current-track "N.I.B"))

@current-track

(def current-composer (ref "Black Sabbath"))


(dosync
  (ref-set current-track "Burn")
  (ref-set current-composer "Deep Purple"))

(println @current-track "," @current-composer)

(defrecord Message [sender text])

(->Message "Aaron" "Hello there!")

(def messages (ref ()))


; bad idea

(defn naive-add-msg [msg]
  (dosync 
    (ref-set messages (cons msg @messages))))

(naive-add-msg (->Message "Balbi" "bad idea"))

@messages

(defn add-message [msg]
  (dosync
    (alter messages conj msg)))

(add-message (->Message "Balbi" "Hi there!"))

@messages

(defn add-message-commute [msg]
  (dosync
    (commute messages conj msg)))

(add-message-commute (->Message "User2" "Hello!"))

(defn valid-message? [msg]
  (and (:sender msg) (:text msg))) 

(defn validate-message-list [messages]
  (every? valid-message? messages))

(def messages (ref () :validator validate-message-list))

(add-message {})
(add-message "ASDASDAS")
(add-message {:sender "UserA" :text "Hi from map"})
(add-message (->Message "Balbi" "Hi there!"))


(def person-name (atom "Joe"))

(deref person-name)
@person-name

(reset! person-name "Jane")

(def person (atom {:name "Joe" :age 15}))

(reset! person {:name "Jane" :age 16})

(swap! person assoc :age 12)



(def counter (agent 0))

(send counter inc)

@counter

(await-for 1000 counter)
(await-for 1000 (send counter inc))

@counter


(def bcounter (agent 0 :validator number?))

(send bcounter (fn [v] (+ 2 v)))
(send bcounter (fn [v] (str v "t")))

; error still in fail
(send bcounter (fn [v] (+ 2 v)))

; last valid value
@bcounter

(agent-error bcounter)

(restart-agent bcounter 0)

(send bcounter inc)


(def bcounter2 (agent 0 
                      :validator number? 
                      :error-handler #(println (.getMessage %2))))

(send bcounter2 inc)

(send bcounter2 (fn [v] "vv"))

;; still works cause error-handler supplied
(send bcounter2 inc)

(def testmap {:customer/id 123})

(:customer/id testmap)

(def ^:dynamic foo 10)

foo

(def bar (fn [] (println "aa")))
(.start (Thread. (fn [] (println foo))))


(binding [foo 23]
  (println foo))

(defn print-foo [] (println foo))

(print-foo)

(let [foo "leet foo"]
  (print-foo))


(binding [foo "bind foo"]
  (print-foo))


(defn ^:dynamic slow-double [n]
  (Thread/sleep 100)
  (* n 2))

(pprint (meta #'slow-double))

(defn ^:this-is-a-tag slow-double2 [n]
  (Thread/sleep 100)
  (* n 2))


(pprint (meta #'slow-double2))

(slow-double 10)

(defn calls-slow-double []
  (map slow-double [1 2 1 2 1 2]))

(calls-slow-double)

(time (calls-slow-double))

(time (dorun (calls-slow-double)))

(defn demo-memorize []
  (time (dorun (binding [slow-double (memoize slow-double)]
                 (calls-slow-double)))))

(demo-memorize)


;; (JOptionPane/showMessageDialog nil "Teste")





