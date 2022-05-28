(ns auth-example-hash.app.auth
  (:require [auth-example-hash.logic.auth :as l]
            [auth-example-hash.db.jsonfile :as db]))

(def filename "db.json")

(defn signup [email passowrd]
  (let [user (l/create-user email passowrd)
        save (partial db/save filename)
        exists? (partial db/exists? filename)]
    (if (exists? email) (throw (ex-info "User already exists" (dissoc user :password)))
        (save user))
    user))

;; (signup "joao.daniel@gmail.com", "123456")
(defn signin [])
(defn signout [])
