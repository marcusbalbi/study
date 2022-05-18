(ns abstractions.were-records)

(defrecord WereWolf [name title])

(WereWolf. "David" "London Tourist")

(->WereWolf "Jacob" "Lead shirt Discarder")

(map->WereWolf {:name "Lucian" :title "CEO of Melodrama"})

(def balbi (->WereWolf "Balbi" "Software enginneer"))

(:name balbi)
(.title balbi)
(get balbi :name)


(= balbi (->WereWolf "Balbi" "Software enginneer"))

(= balbi (WereWolf. "Balbi" "Software enginneer"))

(= balbi { :name "Balbi" :title "Software enginneer"})

(assoc balbi :title "Developer")

(dissoc balbi :name)

(defprotocol WereCreature
  (full-moon-behavior [x]))

(defrecord WereWolf [name title]
  WereCreature
  (full-moon-behavior [x]
                      (str name " will howl and murder!")))

(full-moon-behavior (map->WereWolf { :name "Balbi" :title "Developer" }))