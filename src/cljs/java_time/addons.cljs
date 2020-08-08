(ns cljs.java-time.addons
  (:require [raw.jsjoda]))

(def locale-props
  #js{"DateTimeFormatterBuilder" raw.jsjoda/DateTimeFormatterBuilder
      "DateTimeFormatter" raw.jsjoda/DateTimeFormatter})

(def tz-props
  #js{"use" raw.jsjoda/bindUse
      "ZoneId" raw.jsjoda/ZoneId
      "ZoneRules" raw.jsjoda/ZoneRules
      "ZoneRulesProvider" raw.jsjoda/ZoneRulesProvider})

