(ns abstractions.wolf-extended
  (:require [abstractions.wolf]))

(defmethod abstractions.wolf/full-moon-behavior :bill-murray
  [were-creature]
  (str (:name were-creature) " will be the most likeable celebrity"))

(abstractions.wolf/full-moon-behavior {:name "Laura the intern"
                                       :were-type :bill-murray})

(abstractions.wolf/full-moon-behavior {:were-type :vampire
                     :name "Rafael from college"})