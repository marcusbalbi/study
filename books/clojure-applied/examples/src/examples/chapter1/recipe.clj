(ns examples.chapter1.recipe)

(defrecord Recipe [name
                   author
                   description
                   ingredients
                   steps
                   servings])

(defrecord Person [fname lname])


(def toast (->Recipe "Toast"
                     (->Person "Marcus" "Balbi")
                     "Crispy bread"
                     ["Slice of Bread"]
                     ["Toast Bread in toaster"]
                     1))

(def people {:p1 (->Person "Marcus" "Balbi")})

(def recipes {:r1 (->Recipe "Toast"
                            :p1
                            "Crispy bread"
                            ["Slice of Bread"]
                            ["Toast Bread in toaster"]
                            1)})


