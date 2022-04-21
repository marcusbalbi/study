(ns writing-macros.core
  (:gen-class))


(defmacro infix [infixed]
  (list (second infixed) (first infixed) (last infixed)))

(infix (5 + 2))

(macroexpand '(infix (1 + 1)))

(macroexpand '(when (>= 5 2) (do (println "Hello world five is greater than 2"))))

(defmacro infix2 [[operand1 op operand2]]
  (list op operand1 operand2))

(infix2 (2 + 2))

(defmacro my-print-whoopsie
  [expression]
  (list 'let ['result expression]
        (list println 'result)
        'result))

(my-print-whoopsie [2 4 6 8 10])
+
'+

(quote +)

sweating-to-the-oldies
(quote sweating-to-the-oldies)

'(+ 1 2 )
'+
'clojure.core/+
`+
'(+ 2 9)
`(+ 2 9)

`(+ 1 ~(inc 1))


(defmacro code-critic 
  "Phrases are courtesy Hermes Conrad from Futurama"
  [bad good]
  `(do (println "Great squid of Madrid, this is bad code:"
                (quote ~bad))
       (println "Sweet gorilla of Manila, this is good code:"
                (quote ~good))))

(code-critic (1 + 1) (+ 1 1))



(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
