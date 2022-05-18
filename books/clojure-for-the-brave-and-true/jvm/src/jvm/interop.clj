(ns jvm.interop
  (:import [java.util Date]))

(Date.)

(.toUpperCase "By Bluebeards bananas!")

(.indexOf "Let's synergize our bleeding edges", "y")

(java.lang.Math/abs -30)

(java.lang.Math/PI)


(macroexpand-1 '(.toUpperCase "By Bluebeards bananas!"))

(new String)

(String.)

(String. "To Davey Jones Locker with ye hardies")


(let [stack (java.util.Stack.)]
  (.push stack "Latest episode of Game of thrones!")
  (println (first stack))
  stack)

(doto (java.util.Stack.)
  (.push "I do love Breaking bad")
  (.push "I prefer Prison Break!"))

(macroexpand-1 '(doto (java.util.Stack.)
                 (.push "I do love Breaking bad")
                 (.push "I prefer Prison Break!")))


(import java.util.Stack)
(Stack.)


;; commonly use java classes

(clojure.pprint/pprint (System/getenv))

(System/getProperty "user.dir")
(System/getProperty "java.version")

;; #inst


;; IO

(let [file (java.io.File. (System/getProperty "user.dir"))]
  (println (.exists file))
  (println (.canWrite file))
  (println (.getPath file)))










