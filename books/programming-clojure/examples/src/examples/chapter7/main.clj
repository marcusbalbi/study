(ns examples.chapter7.main)


;;(definterface IOFactory
;;  (^java.io.BufferedReader makereader [this])
;;  (^java.io.BufferedWriter makewriter [this])) 


(defprotocol IOFactory 
  "A protocol for things that can be read from and written to."
  (make-reader [this] "Creates a BuferedReader")
  (make-writer [this] "Creates a BufferedWriter")
 )