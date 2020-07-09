(ns libstest.core
  (:require [raw.jsjoda]))

(defn yay []
  
   (.now raw.jsjoda/Instant)
  ;(.-MONDAY libstest.jsjoda/DayOfWeek)
  )

