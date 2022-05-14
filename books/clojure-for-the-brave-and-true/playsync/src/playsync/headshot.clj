(ns playsync.headshot
                        (:require [clojure.core.async
                                   :as a
                                   :refer [>! <! >!! <!! go chan buffer close! thread
                                           alts! alts!! timeout]]))


(defn upload
  [headshot c]
  (go (Thread/sleep (rand 100))
      (>! c headshot)))

(let [c1 (chan)
      c2 (chan)
      c3 (chan)]
  (upload "serious.jpg" c1)
  (upload "fun.jpg" c2)
  (upload "sassy.jpg" c3)
  (let [[headshot channel] (alts!! [c1 c2 c3 (timeout 100)])]
    (println "Sending headshot notification for" headshot)))
