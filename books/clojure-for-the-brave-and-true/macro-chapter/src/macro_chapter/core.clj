(ns macro-chapter.core
  (:gen-class))

(defmacro backwords [form]
  (reverse form))


(backwords (" Backwords" " am" "i" str))

(def addition-list (list + 1 2))
(eval addition-list)
(eval (concat addition-list [10]))
(eval (list 'def 'lucky-number (concat addition-list [10])))
lucky-number

(str "To understand what recursion is" ", " "you must first understand recursion")

;; (defmacro infix [[n1 symb n2]]
;;   (println symb n1 n2)
;;   (symb n1 n2))

;; (infix (2 * 2))
;; (macroexpand '(infix (2 * 2)))


(read-string "(+ 2 2)")
(list? (read-string "(+ 2 2)"))
(eval (read-string "(+ 2 2)"))
(conj (read-string "(+ 2 2)") :zag)

(read-string "#(+ 1 %)")
(read-string "'(a b c)")
(read-string "@var")
(read-string "; ignore!\n(+1 2)")

(if true :a :b)
;; if 

(let [x 5]
  (+ x 3))

(def x 15)
(+ x 3)

(def x 15)
(let [x 5]
  (+ x 5))

(let [x 5]
  (let [x 3]
    (* x x)))

(defn exclaim [st] 
  (str st "!"))
(exclaim "Haddoken")

(map inc [1 2 3])

(read-string "+")
(type (read-string "+"))

(list (read-string "+") 1 2)
(eval (list (read-string "+") 1 2))

(defn sum [* n2]
  (+ * n2)) ;; crazy !
(sum 2 2)

(eval (read-string "()"))

(eval(read-string "(let [x 3] (+ x 2))"))

(read-string "(1 + 1)")
(eval (read-string "(1 + 1)"))

(let [infix (read-string "(1 + 1)")]
  (list (second infix) (first infix) (last infix)))

(eval (let [infix (read-string "(1 + 1)")]
        (list (second infix) (first infix) (last infix))))

(defmacro ignore-last-operand [function-call]
  (butlast function-call))
(ignore-last-operand (+ 1 2 10))
(ignore-last-operand (println "Dont show" "this"))
(macroexpand '(ignore-last-operand (+ 1 2 10)))


(defmacro infix [infixed]
  (list 
   (second infixed)
   (first infixed)
   (last infixed)))

(infix (1 + 2))


(def numbers [1 2 3 4 5])
(-> numbers
    println)

(def nested {
            :name "Jhon"
             :address {
                       :city {
                            :name "Nova Friburgo"
                            :state {
                                  :name "Rio de Janeiro"
                            }
                       }
             }})

(-> nested ;;-> is a macro
    :address
    :city
    :state
    :name
    println)





(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


