(ns the-divine-cheese-code.core
  ;; way presented in the book
  ;;(require 'the-divine-cheese-code.visualization.svg)
  ;;(refer 'the-divine-cheese-code.visualization.svg)
  ;; way that code editor suggest
  (:require [the-divine-cheese-code.visualization.svg :as svg])
  (:gen-class))

(def heists [
             {:location "Cologne, Germany"
              :cheese-name "Archbishop Hildebolds Cheese Pretzel"
              :lat 50.95
              :lng 6.97}
             {:location "Zurich, Switezerland"
              :cheese-name "The Standard Emmental"
              :lat 47.37
              :lng 8.55}
             {:location "Marseille, France"
              :cheese-name "Le Fromage de Cosquer"
              :lat 43.30
              :lng 5.37}
             {:location "Zurich, Switezerland"
              :cheese-name "The Lesser Emmental"
              :lat 47.37
              :lng 8.55}
             {:location "Vatican City"
              :cheese-name "The Cheese of Turin"
              :lat 41.90
              :lng 12.45}
])

(defn test-latlng->point []
  (svg/latlng->point { :lat 32.88 :lng 10.5}))

(test-latlng->point)

(defn- main [& args]
  (println (svg/points heists)))

(main)

