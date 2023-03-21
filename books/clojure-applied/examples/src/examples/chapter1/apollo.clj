(ns examples.chapter1.apollo)

(def mission-default {:orbits 0 :evas 0})

(defn make-mission [name system launched manned? opts]
  (let [{:keys [cm-name
                lm-name
                orbits
                evas]} (merge mission-default opts)]
    {:name name :system system :launched launched :manned? manned?
     :cm-name cm-name :lm-name lm-name :orbits orbits :evas evas}))

(defn make-mission-2 [name system launched manned? & opts]
  (let [{:keys [cm-name
                lm-name
                orbits
                evas] :or {orbits 0 evas 0}} opts]
    {:name name :system system :launched launched :manned? manned?
     :cm-name cm-name :lm-name lm-name :orbits orbits :evas evas}))


(def appolo-4 (make-mission "Apllo 4" "Saturn IV" "1967-11-09" false {:orbits 3}))

(def appolo-3 (make-mission-2 "Apllo 4" "Saturn IV" "1967-11-09" false :orbits 3))

(let [{:keys [orbits name]} appolo-4]
  [name orbits])


(appolo-3 :orbits)
(get appolo-3 :orbits)
(:orbits appolo-3)

(:not-exists appolo-3)
(appolo-3 :not-exists)
(get appolo-3 :not-exists)

(get nil :orbits)
(:not-exists nil)
;; (nil :not-exists) error

(select-keys appolo-3 [:name :orbits])