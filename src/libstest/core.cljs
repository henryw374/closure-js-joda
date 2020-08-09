(ns libstest.core
  (:require [raw.jsjoda]
            [addons.timezone.js-joda-timezone]
            [addons.locale.en-us]
            [cljs.java-time.addons]))

(defn add-en-us! []
  (cljs.java-time.addons/locale-fn addons.locale.en-us/f)) ;

(defn add-tz! []
  (cljs.java-time.addons/tz-fn addons.timezone.js-joda-timezone/f))


(defn yay []
  (add-tz!)
  (.of raw.jsjoda/ZoneId "Europe/Berlin")
  (add-en-us!)
  ;(.now raw.jsjoda/Instant)
  ;(.-MONDAY libstest.jsjoda/DayOfWeek)
  )

(comment 
  (add-en-us!)
  (-> raw.jsjoda/DateTimeFormatter
      (.ofPattern "dd/MM/yy")
      (.withLocale
        (some->
          (goog.object/get (add-en-us!) "Locale")
          (goog.object/get "US")))
      (.format (.parse raw.jsjoda/LocalDate "2020-02-02")))
  (.getAvailableZoneIds raw.jsjoda/ZoneId)
  (.now raw.jsjoda/Instant)
  )
