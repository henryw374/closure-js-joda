(ns libstest.core
  (:require [libstest.jsjoda])
  )

(defn yay []
  (.init libstest.jsjoda)
  (.now libstest.jsjoda/Instant)
  )

