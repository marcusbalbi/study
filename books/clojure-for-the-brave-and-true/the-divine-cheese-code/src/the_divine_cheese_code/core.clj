(ns the-divine-cheese-code.core
  (:require [the-divine-cheese-code.visualization.svg :as svg]
            [clojure.java.browse :as browse]) ;ns macro
  (:gen-class))

  ;;(require 'the-divine-cheese-code.visualization.svg) ; used in repl
  ;;(refer 'the-divine-cheese-code.visualization.svg) ; used in repl


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

;; (defn test-latlng->point []
;;   (svg/latlng->point { :lat 32.88 :lng 10.5}))

;; (test-latlng->point)

(defn url [filename]
  (str "file:///"
       (System/getProperty "user.dir")
       "/"
       filename))

(defn template
  [contents]
  (str "<style>polyline { fill: none; stroke:#5881d8; stroke-width:3;}</style>" contents))


(defn- main [& args]
  (let [filename  "map.html"]
    (->> heists
         (svg/xml 50 100)
         template
         (spit filename))
    (browse/browse-url (url filename))))

(main)



