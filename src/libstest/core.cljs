(ns libstest.core
  (:require [raw.jsjoda]
            [addons.timezone.js-joda-timezone]
            [addons.locale.en-us]
            [cljs.java-time.addons]))

(defn add-en-us! []
  (cljs.java-time.addons/load-locale-addon addons.locale.en-us/f)) ;

(defn add-tz! []
  (cljs.java-time.addons/load-timezone-addon addons.timezone.js-joda-timezone/f))


(defn yay []
  (add-tz!)
  ;(add-en-us!)
  [(.of raw.jsjoda/ZoneId "Europe/Berlin")
   (.now raw.jsjoda/Instant)
   (.now raw.jsjoda/LocalDate)
   (.-MONDAY raw.jsjoda/DayOfWeek)
   #_(-> raw.jsjoda/DateTimeFormatter
       (.ofPattern "dd/MM/yy")
       (.withLocale
         (some->
           (goog.object/get (add-en-us!) "Locale")
           (goog.object/get "US")))
       (.format (.parse raw.jsjoda/LocalDate "2020-02-02")))]
  )

(comment 
  (add-en-us!)
  
  (.getAvailableZoneIds raw.jsjoda/ZoneId)
  
  
  )
