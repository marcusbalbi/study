(ns auth-example-hash.logic.auth
  (:require [clojure.string :as string]) 
  (:import (java.security MessageDigest)))

(defn- encrypt [email password]
  (let [algo (MessageDigest/getInstance "SHA256")
        data (str (string/lower-case email) password)
        raw (.digest algo (.getBytes data))]
    (string/upper-case (format "%032x" (BigInteger. 1 raw)))))

(defn create-user
  "Creates a new User with encrypted password"
  [email password]
  (let [
        low-case-email (string/lower-case email)
        hashed (encrypt low-case-email password)]
    {:email low-case-email :password hashed}))

;;(defn compare-password)