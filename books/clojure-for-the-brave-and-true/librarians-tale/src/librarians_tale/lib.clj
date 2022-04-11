(ns librarians-tale.lib)

(def greeting "Hello")

(defn- say-hello [name]
  (println (str greeting ", " name)))

(defn hello [name]
  (say-hello name))