(ns libstest.core
  (:require [libstest.jsjodacompiled]))

(js/console.log (.now libstest.jsjodacompiled/Instant))

