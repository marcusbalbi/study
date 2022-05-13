(ns playsync.core
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go chan buffer close! thread
                     alts! alts!! timeout]])
  (:gen-class))

(def echo-chan (chan))
(go (println (<! echo-chan)))
(>!! echo-chan "ketchup")

;;(>!! (chan) "mustard") runs forever cause there is no one listening
;; buffer
(def echo-buffer (chan 2))
(>!! echo-buffer "ketchup")
(>!! echo-buffer "ketchup")
; this time the buffer is full
;(>!! echo-buffer "ketchup")


;; parking
(def hi-chan (chan))
(doseq [n (range 1000)]
  (go (>! hi-chan (str "hi" n))))
(go (println (<! hi-chan)))


;; thread

(thread (println (<!! echo-chan)))
(>!! echo-chan "Mustard")


(let [t (thread "chilli")]
  (<!! t))







(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
