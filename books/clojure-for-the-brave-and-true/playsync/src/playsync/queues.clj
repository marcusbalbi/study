(ns playsync.queues
  (:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go chan buffer close! thread
                     alts! alts!! timeout]]
            [clojure.data.json :as json]
            [cheshire.core :as j]))


(defn append-to-file
  "Write a string to the end of a file"
  [filename s]
  (spit filename s :append true))


(defn format-quote 
  "Delineate the begining and end of a quote because it's convenient"
  [quote]
  (let [parsed (json/read-str quote :key-fn keyword)
        ;; better (j/parse-string quote true)
        parsed-quote (first parsed)
        q (:q parsed-quote)
        author (:a parsed-quote)]
    (str "=== BEGIN QUOTE ===\n" q " - " author "\n=== END QUOTE ===\n\n")))

(defn random-quote
  "Retrieves a random quote and format it"
  []
  (format-quote (slurp "https://zenquotes.io/api/random")))


(random-quote)


(defn snag-quotes
  [filename num-quotes]
  (let [c (chan)]
    (go (while true (append-to-file filename (<! c))))
    (dotimes [n num-quotes] (go (>! c (random-quote))))))

(snag-quotes "test-quotes" 3)