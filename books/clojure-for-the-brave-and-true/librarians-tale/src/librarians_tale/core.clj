(ns librarians-tale.core
  (:gen-class))


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


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
