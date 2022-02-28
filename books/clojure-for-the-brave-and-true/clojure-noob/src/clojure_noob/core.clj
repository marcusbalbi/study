(ns clojure-noob.core
(:gen-class))


(defn -main
  "I don't do a whole lot ... yet."
 [& args]
  (do
    (println "I'm a little Teapot! Editing from Emacs")
    (println (+ 1 2 3 4))
    (println (map inc [1 2 3 4]))
    (println (reduce + [5 6 100]))))
    

(defn reduce-example []
  (println (reduce + [5 6 100 105 106])))

(println "Eval this!")
(println (map #(* % %) (range 100)))
(println (* 2 5))

(println (str "it was me, " " I am so sorry" " About That!"))

     
(if true 
  "By Zeus's Hammer"
"By Aquaman' Trident")

(if false
  "By Zeus's Hammer"
"By Aquaman' Trident")


(if true
  (do (println"By Zeus's Hammer")
      "Done!")
  (do (println "By Aquaman' Trident")
      "Done!"))

(when true (println "Success!") "Done")

(nil? 1)

(nil? nil)


(if "A string is truthy" (println "Correct! a String is a Truthy value"))

(if nil "this should not happen" (println "Nil is falsy"))


(= 1 1)

(= nil nil)

(= 1 2)


(or false nil :large_I_mean_venti :why_cant_I_Just_say_larger)

(or (= 0 1) (= "yes" "no"))

(or nil)

(and :free_wifi :hot_coffee)

(and :feeling_super_cool nil false)


(def failed-protagonist-names
  ["Larry potter" "Doreen the Explorer" "THe Incredible Bulk"])

(println failed-protagonist-names)

(defn error-message [severity]
  (str "Oh god! it is a disaster here "
       (if (= severity :mild )
         "MIDDLE INCONVENIENCE"
         "DOOOOMED")))









