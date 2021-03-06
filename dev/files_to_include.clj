(ns files-to-include)

(def locale
  ;"plug.js" - do my own versino of that that refers to individual properties?
  "Locale.js" ; needs getters
  "temporal/WeekFields.js" ; needs getters to remove init
  ;"init.js - nope
  ; local would also need cldr stuff
  )

(def tz-files
  ["unpack.js"
   "MomentZoneRulesProvider.js"
   "MomentZoneRules.js"
   "js-joda-timezone.js"
   "system-default-zone.js"
   ;"plug.js" - do my own versino of that
   ;macros that read json file and return contents
   ])

(def core-files
  ["errors.js"
   "Enum.js"
   "temporal/TemporalAccessor.js"
   "temporal/Temporal.js"
   "temporal/TemporalAdjuster.js"
   "temporal/DefaultInterfaceTemporal.js"
   "temporal/TemporalAdjusters.js"
   "temporal/TemporalAmount.js"
   "temporal/TemporalField.js"
   "temporal/TemporalQueries.js"
   "temporal/TemporalQueriesFactory.js"
   "temporal/TemporalQuery.js"
   "temporal/TemporalUnit.js"
   "chrono/ChronoLocalDate.js"
   "chrono/ChronoLocalDateTime.js"
   "chrono/ChronoZonedDateTime.js"
   "chrono/IsoChronology.js"
   "temporal/ChronoField.js"
   "temporal/ChronoUnit.js"
   "Clock.js"
   "DayOfWeek.js"
   "Duration.js"
   "Instant.js"
   "LocalDate.js"
   "LocalTime.js"
   "LocalDateTime.js"
   "Month.js"
   "MonthDay.js"
   "Period.js"
   "Year.js"
   "YearConstants.js"
   "YearMonth.js"
   "ZonedDateTime.js"
   "ZoneIdFactory.js"
   "ZoneId.js"
   "ZoneOffset.js"
   "ZoneRegion.js"
   "zone/SystemDefaultZoneId.js"
   "zone/ZoneOffsetTransition.js"
   "zone/ZoneRules.js"
   "zone/SystemDefaultZoneRules.js"
   "zone/ZoneRulesProvider.js"
   "temporal/IsoFields.js"
   "temporal/ValueRange.js"
   "format/DateTimeBuilder.js"
   "format/DateTimeFormatter.js"
   
   "format/DateTimeParseContext.js"
   "format/DateTimePrintContext.js"
   "format/DecimalStyle.js"
   "format/EnumMap.js"
   "format/ParsePosition.js"
   "format/parser/CharLiteralPrinterParser.js"
   "format/parser/CompositePrinterParser.js"
   "format/parser/FractionPrinterParser.js"
   "format/parser/NumberPrinterParser.js"
   "format/parser/OffsetIdPrinterParser.js"
   "format/parser/PadPrinterParserDecorator.js"
   "format/parser/SettingsParser.js"
   "format/parser/StringLiteralPrinterParser.js"
   "format/parser/ZoneIdPrinterParser.js"
   "format/ResolverStyle.js"
   "format/SignStyle.js"
   "format/StringBuilder.js"
   "format/TextStyle.js"
   "format/DateTimeFormatterBuilder.js"
   "MathUtil.js"
   "StringUtil.js"
   "assert.js"
   "convert.js"
   "temporal/NativeJsTemporal.js"
   "use.js"])
