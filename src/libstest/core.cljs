(ns libstest.core
  (:require [raw.jsjoda]
            [addons.timezone.js-joda-timezone]
            [cljs.java-time.addons]))

(defn add-tz! []
  (addons.timezone.js-joda-timezone/f cljs.java-time.addons/tz-props))


(defn yay []
  (add-tz!)
  (.of raw.jsjoda/ZoneId "Europe/Berlin")
  ;(.now raw.jsjoda/Instant)
  ;(.-MONDAY libstest.jsjoda/DayOfWeek)
  )

