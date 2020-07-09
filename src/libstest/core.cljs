(ns libstest.core
  (:require [libstest.jsjoda]))

(defn yay []
  
   (.now libstest.jsjoda/Instant)
  ;(.-MONDAY libstest.jsjoda/DayOfWeek)
  )

