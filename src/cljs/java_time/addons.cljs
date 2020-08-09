(ns cljs.java-time.addons
  (:require [raw.jsjoda]))

(def locale-fn
  (memoize
    (fn [f]
      (let [in #js{"DateTimeFormatterBuilder" raw.jsjoda/DateTimeFormatterBuilder
                   "DateTimeFormatter"        raw.jsjoda/DateTimeFormatter
                   "ValueRange"               raw.jsjoda/ValueRange
                   "ChronoField"              raw.jsjoda/ChronoField
                   "ChronoUnit"               raw.jsjoda/ChronoUnit
                   "IsoFields"                raw.jsjoda/IsoFields
                   "DayOfWeek"                raw.jsjoda/DayOfWeek
                   "_"                        #js{"assert"   #js {"requireNonNull"  raw.jsjoda/requireNonNull
                                                                  "requireInstance" raw.jsjoda/requireInstance} ;raw.jsjoda/assert
                                                  "MathUtil" raw.jsjoda/MathUtil
                                                  }
                   }
            use (fn [f] (f in))]
        (goog.object/set in "use" use)
        (f in)
        ;(set! raw.jsjoda/DateTimeFormatterBuilder (goog.object/get in "DateTimeFormatterBuilder"))
        ;(set! raw.jsjoda/DateTimeFormatter (goog.object/get in "DateTimeFormatter"))
        ))))

(defn tz-fn [f]
  (let [in #js{"ZoneId"            raw.jsjoda/ZoneId
               "ZoneRules"         raw.jsjoda/ZoneRules
               "ZoneRulesProvider" raw.jsjoda/ZoneRulesProvider}
        use (fn [f] (f in))]
    (goog.object/set in "use" use)
    (f in)
    (set! raw.jsjoda/ZoneId (goog.object/get in "ZoneId"))
    (set! raw.jsjoda/ZoneRules (goog.object/get in "ZoneRules"))
    (set! raw.jsjoda/ZoneRulesProvider (goog.object/get in "ZoneRulesProvider"))))

