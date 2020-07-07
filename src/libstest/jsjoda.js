goog.module('libstest.jsjoda')
goog.module.declareLegacyNamespace()

const esm = goog.require('libstest.jsjodasingle')

    esm.YearConstantsInit();
    esm.DurationInit();
    esm.ChronoUnitInit();
    esm.ChronoFieldInit();
    esm.LocalTimeInit();
    esm.IsoFieldsInit();
    esm.TemporalQueriesFactoryInit();
    esm.DayOfWeekInit();
    esm.InstantInit();
    esm.LocalDateInit();
    esm.LocalDateTimeInit();
    esm.YearInit();
    esm.MonthInit();
    esm.YearMonthInit();
    esm.MonthDayInit();
    esm.PeriodInit();
    esm.ZoneOffsetInit();
    esm.ZonedDateTimeInit();
    esm.ZoneIdFactoryInit();
    esm.IsoChronologyInit();
    esm.DateTimeFormatterInit();
    esm.DateTimeFormatterBuilderInit();

exports.ArithmeticException = esm.ArithmeticException;
exports.ChronoField = esm.ChronoField;
exports.ChronoLocalDate = esm.ChronoLocalDate;
exports.ChronoLocalDateTime = esm.ChronoLocalDateTime;
exports.ChronoUnit = esm.ChronoUnit;
exports.ChronoZonedDateTime = esm.ChronoZonedDateTime;
exports.Clock = esm.Clock;
exports.DateTimeException = esm.DateTimeException;
exports.DateTimeFormatter = esm.DateTimeFormatter;
exports.DateTimeFormatterBuilder = esm.DateTimeFormatterBuilder;
exports.DateTimeParseException = esm.DateTimeParseException;
exports.DayOfWeek = esm.DayOfWeek;
exports.DecimalStyle = esm.DecimalStyle;
exports.Duration = esm.Duration;
exports.IllegalArgumentException = esm.IllegalArgumentException;
exports.IllegalStateException = esm.IllegalStateException;
exports.Instant = esm.Instant;
exports.IsoChronology = esm.IsoChronology;
exports.IsoFields = esm.IsoFields;
exports.LocalDate = esm.LocalDate;
exports.LocalDateTime = esm.LocalDateTime;
exports.LocalTime = esm.LocalTime;
exports.Month = esm.Month;
exports.MonthDay = esm.MonthDay;
exports.NullPointerException = esm.NullPointerException;
exports.Period = esm.Period;
exports.ResolverStyle = esm.ResolverStyle;
exports.SignStyle = esm.SignStyle;
exports.Temporal = esm.Temporal;
exports.TemporalAccessor = esm.TemporalAccessor;
exports.TemporalAdjuster = esm.TemporalAdjuster;
exports.TemporalAdjusters = esm.TemporalAdjusters;
exports.TemporalAmount = esm.TemporalAmount;
exports.TemporalField = esm.TemporalField;
exports.TemporalQueries = esm.TemporalQueries;
exports.TemporalQuery = esm.TemporalQuery;
exports.TemporalUnit = esm.TemporalUnit;
exports.TextStyle = esm.TextStyle;
exports.UnsupportedTemporalTypeException = esm.UnsupportedTemporalTypeException;
exports.ValueRange = esm.ValueRange;
exports.Year = esm.Year;
exports.YearConstants = esm.YearConstants;
exports.YearMonth = esm.YearMonth;
exports.ZoneId = esm.ZoneId;
exports.ZoneOffset = esm.ZoneOffset;
exports.ZoneOffsetTransition = esm.ZoneOffsetTransition;
exports.ZoneRegion = esm.ZoneRegion;
exports.ZoneRules = esm.ZoneRules;
exports.ZoneRulesProvider = esm.ZoneRulesProvider;
exports.ZonedDateTime = esm.ZonedDateTime;
exports._ = esm._;
exports.convert = esm.convert;
exports.nativeJs = esm.nativeJs;
exports.use = esm.use;
//const instant = goog.require('jsjoda.Instant')
//const errors = goog.require('jsjoda.errors')
//const assert = goog.require('jsjoda.assert')

//exports.Instant = instant.Instant;
//exports.assert = assert;
//exports.errors = errors;