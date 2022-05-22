(ns auth-example-hash.db.jsonfile)


(defn save
  "Saves an User into database"
  [filename user])

(defn findByEmail
  "Find an User by its email"
  [filename email])

(defn exists?
  "true if the user already exists on database false otherwise"
  [filename email])
