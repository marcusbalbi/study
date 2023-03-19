(ns examples.chapter1.recipe-schema
  (:require [schema.core :as s]))

(s/defschema Ingredient
  {:name s/Str
   :quantity s/Int
   :unit s/Keyword})

(s/def spaghhetti :- Ingredient {:name "Spaghetti"
                 :quantity 200
                 :unit :gr})

(s/def pasta-sauce :- Ingredient {:name "Sauce"
                                 :quantity 100
                                 :unit :ml})

(s/def taco :- Ingredient {:name "Taco"
                                  :quantity 1
                                  :unit :qtde})

(s/defschema Recipe
  "A schema for Recipes"
  {:name s/Str
   :description s/Str
   :ingredients [Ingredient]
   :steps [s/Str]
   :servings s/Int})

(s/def spaghetti-tacos :- Recipe {:name "Spaghetti Tacos"
                      :description "A spaghetti with Tacos"
                      :ingredients [spaghhetti pasta-sauce taco]
                      :steps ["Do the pasta" "add the sauce" "put everything inside taco"]
                      :servings 1})

(s/explain Recipe)
(s/check Recipe spaghetti-tacos)
(s/validate Recipe spaghetti-tacos)


(s/defn add-ingredients :- Recipe
  [recipe :- Recipe
   ingredient :- Ingredient]
  (update-in recipe [:ingredients] conj ingredient))

(add-ingredients spaghetti-tacos pasta-sauce)
