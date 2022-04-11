(ns librarians-tale.core
  (:gen-class) 
  (:require [librarians-tale.lib :as lib]))


(ns-name *ns*)

inc
'inc

map
'map

'(map inc [1 2 3])
(map inc [1 2 3])

(def great-books ["East of Eden" "The glass bead game"])

great-books


(ns-interns *ns*)

(get (ns-interns *ns*) 'great-books)

(deref #'great-books)

(def great-books ["The power of Bees" "Journey to the Upstairs"])

(create-ns 'cheese.taxonomy)

(ns-name (create-ns 'cheese.taxonomy))

(in-ns 'cheese.analysis)

;;great-books
;;librarians-tale/great-books

;(alias 'hello 'librarians-tale.lib/hello)

(lib/hello "Balbi")
;(lib/say-hello "Balbino")








(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
