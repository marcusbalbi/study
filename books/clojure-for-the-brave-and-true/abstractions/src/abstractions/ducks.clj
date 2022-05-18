(ns abstractions.ducks)


(defprotocol Duck
  "Ducks behaviors"
  (fly [x] "Implement the Fly behavior")
  (quack [x] "Implement the quack sound"))


(defrecord MallardDuck [name]
 Duck
  (fly [x] "Flying like a MallardDuck")
  (quack [x] (str "the " (.name x) " is quacking"))
 )

(MallardDuck. "Mallard1")

(fly (MallardDuck. "Mallard1"))
(quack (MallardDuck. "Mallard1"))