(ns functions-in-depth.core-test
  (:require [clojure.test :refer :all]
            [functions-in-depth.core :refer :all]))

(deftest titleize-test
  (testing "titleize"
    (is (= (titleize "BALBI") "BALBI for the brave and true"))))
