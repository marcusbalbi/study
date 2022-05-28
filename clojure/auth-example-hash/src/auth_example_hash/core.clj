(ns auth-example-hash.core
  (:gen-class))


;; signup -> email, password-> hash password -> save as text
;; signin -> email, password -> hash password -> read text compare password and email -> true or false
;; bonus add salt


(defn -main [& args]
  (println args))