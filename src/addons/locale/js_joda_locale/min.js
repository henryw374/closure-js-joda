goog.provide('addons.locale.js_joda_locale.min');

addons.locale.js_joda_locale.min.f = ( (function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
var i=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._field=t,this._textStyle=r,this._provider=n}var t,r,i;return t=e,(r=[{key:"field",value:function(){return this._field}},{key:"textStyle",value:function(){return this._textStyle}},{key:"provider",value:function(){return this._provider}},{key:"print",value:function(e,t){var r=e.getValue(this._field);if(null===r)return!1;var n=this._provider.getText(this._field,r,this._textStyle,e.locale());return null===n?this._numberPrinterParser().print(e,t):(t.append(n),!0)}},{key:"parse",value:function(e,t,r){var a=t.length;if(r<0||r>a)throw new n.IllegalArgumentException("The position is invalid: ".concat(r));var i=e.isStrict()?this._textStyle:null,o=this._provider.getTextIterator(this._field,i,e.locale());if(null!=o){var l=!0,u=!1,s=void 0;try{for(var f,c=o[Symbol.iterator]();!(l=(f=c.next()).done);l=!0){var h=f.value,d=h.key;if(e.subSequenceEquals(d,0,t,r,d.length))return e.setParsedField(this._field,h.value,r,r+d.length)}}catch(e){u=!0,s=e}finally{try{l||null==c.return||c.return()}finally{if(u)throw s}}if(e.isStrict())return~r}return this._numberPrinterParser().parse(e,t,r)}},{key:"_numberPrinterParser",value:function(){return null==this._currentNumberPrinterParser&&(this._currentNumberPrinterParser=new n.DateTimeFormatterBuilder.NumberPrinterParser(this._field,1,19,n.SignStyle.NORMAL)),this._currentNumberPrinterParser}},{key:"toString",value:function(){return this._textStyle===n.TextStyle.FULL?"Text(".concat(this._field,")"):"Text(".concat(this._field,",").concat(this._textStyle,")")}}])&&a(t.prototype,r),i&&a(t,i),e}(),o=r(2),l=r.n(o),u=r(1),s=r.n(u);function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */
var c=function(e,t){return{key:e,value:t,toString:function(){return e+"->"+t}}},h=function(e,t){return t.key.length-e.key.length},d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._valueTextMap=t;var r={},n=[];Object.keys(t).forEach((function(e){var a={};Object.keys(t[e]).forEach((function(r){var n=t[e][r];void 0===a[n]&&(a[n]=c(n,Number.parseInt(r)))}));var i=Object.values(a);i.sort(h),r[e]=i,n=n.concat(i),r.null=n})),n.sort(h),this._parsable=r}var t,r,n;return t=e,(r=[{key:"getText",value:function(e,t){var r=this._valueTextMap[t];return null!=r?r[e]:null}},{key:"getTextIterator",value:function(e){var t=this._parsable[e];return null!=t?t[Symbol.iterator]():null}}])&&f(t.prototype,r),n&&f(t,n),e}();function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */
var _=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cache={},s.a.load(l()("supplemental/likelySubtags.json"))}var t,r,a;return t=e,(r=[{key:"getAvailableLocales",value:function(){return"undefined"!=typeof JS_JODA_LOCALE_AVAILABLE_LOCALES?JS_JODA_LOCALE_AVAILABLE_LOCALES:l()("availableLocales.json").availableLocales}},{key:"getText",value:function(e,t,r,n){var a=this._findStore(e,n);return a instanceof d?a.getText(t,r):null}},{key:"getTextIterator",value:function(e,t,r){var n=this._findStore(e,r);return n instanceof d?n.getTextIterator(t):null}},{key:"_findStore",value:function(e,t){var r=c(e,t),n=this._cache[r];return void 0===n&&(n=this._createStore(e,t),this._cache[r]=n),n}},{key:"_createStore",value:function(e,t){s.a.load(l()("main/".concat(t.localeString(),"/ca-gregorian.json")));var r=new s.a(t.localeString());if(e===n.ChronoField.MONTH_OF_YEAR){var a=r.main("dates/calendars/gregorian/months/format"),i={},o={};return o[1]=a.wide[1],o[2]=a.wide[2],o[3]=a.wide[3],o[4]=a.wide[4],o[5]=a.wide[5],o[6]=a.wide[6],o[7]=a.wide[7],o[8]=a.wide[8],o[9]=a.wide[9],o[10]=a.wide[10],o[11]=a.wide[11],o[12]=a.wide[12],i[n.TextStyle.FULL]=o,(o={})[1]=a.narrow[1],o[2]=a.narrow[2],o[3]=a.narrow[3],o[4]=a.narrow[4],o[5]=a.narrow[5],o[6]=a.narrow[6],o[7]=a.narrow[7],o[8]=a.narrow[8],o[9]=a.narrow[9],o[10]=a.narrow[10],o[11]=a.narrow[11],o[12]=a.narrow[12],i[n.TextStyle.NARROW]=o,(o={})[1]=a.abbreviated[1],o[2]=a.abbreviated[2],o[3]=a.abbreviated[3],o[4]=a.abbreviated[4],o[5]=a.abbreviated[5],o[6]=a.abbreviated[6],o[7]=a.abbreviated[7],o[8]=a.abbreviated[8],o[9]=a.abbreviated[9],o[10]=a.abbreviated[10],o[11]=a.abbreviated[11],o[12]=a.abbreviated[12],i[n.TextStyle.SHORT]=o,this._createLocaleStore(i)}if(e===n.ChronoField.DAY_OF_WEEK){var u=r.main("dates/calendars/gregorian/days/format"),f={},c={};return c[1]=u.wide.mon,c[2]=u.wide.tue,c[3]=u.wide.wed,c[4]=u.wide.thu,c[5]=u.wide.fri,c[6]=u.wide.sat,c[7]=u.wide.sun,f[n.TextStyle.FULL]=c,(c={})[1]=u.narrow.mon,c[2]=u.narrow.tue,c[3]=u.narrow.wed,c[4]=u.narrow.thu,c[5]=u.narrow.fri,c[6]=u.narrow.sat,c[7]=u.narrow.sun,f[n.TextStyle.NARROW]=c,(c={})[1]=u.abbreviated.mon,c[2]=u.abbreviated.tue,c[3]=u.abbreviated.wed,c[4]=u.abbreviated.thu,c[5]=u.abbreviated.fri,c[6]=u.abbreviated.sat,c[7]=u.abbreviated.sun,f[n.TextStyle.SHORT]=c,this._createLocaleStore(f)}if(e===n.ChronoField.AMPM_OF_DAY){var h=r.main("dates/calendars/gregorian/dayPeriods/format"),d={},y={};return y[0]=h.wide.am,y[1]=h.wide.pm,d[n.TextStyle.FULL]=y,(y={})[0]=h.narrow.am,y[1]=h.narrow.pm,d[n.TextStyle.NARROW]=y,(y={})[0]=h.abbreviated.am,y[1]=h.abbreviated.pm,d[n.TextStyle.SHORT]=y,this._createLocaleStore(d)}if(e===n.ChronoField.ERA){var _=r.main("dates/calendars/gregorian/eras"),p={},v={};return v[0]=_.eraNames[0],v[1]=_.eraNames[1],p[n.TextStyle.FULL]=v,(v={})[0]=_.eraNarrow[0],v[1]=_.eraNarrow[1],p[n.TextStyle.NARROW]=v,(v={})[0]=_.eraAbbr[0],v[1]=_.eraAbbr[1],p[n.TextStyle.SHORT]=v,this._createLocaleStore(p)}if(e===n.IsoFields.QUARTER_OF_YEAR){var k=r.main("dates/calendars/gregorian/quarters/format"),O={},S={};return S[1]=k.wide[1],S[2]=k.wide[2],S[3]=k.wide[3],S[4]=k.wide[4],O[n.TextStyle.FULL]=S,(S={})[1]=k.narrow[1],S[2]=k.narrow[2],S[3]=k.narrow[3],S[4]=k.narrow[4],O[n.TextStyle.NARROW]=S,(S={})[1]=k.abbreviated[1],S[2]=k.abbreviated[2],S[3]=k.abbreviated[3],S[4]=k.abbreviated[4],O[n.TextStyle.SHORT]=S,this._createLocaleStore(O)}return null}},{key:"_createLocaleStore",value:function(e){return e[n.TextStyle.FULL_STANDALONE]=e[n.TextStyle.FULL],e[n.TextStyle.SHORT_STANDALONE]=e[n.TextStyle.SHORT],Object.keys(e).includes(n.TextStyle.NARROW)&&!Object.keys(e).includes(n.TextStyle.NARROW_STANDALONE)&&(e[n.TextStyle.NARROW_STANDALONE]=e[n.TextStyle.NARROW]),new d(e)}}])&&y(t.prototype,r),a&&y(t,a),e}();function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */
var v=n._.assert,k=v.requireNonNull,O=v.requireInstance,S=function(e,t){var r=t.length-e.length;return 0===r&&(r=e.localeCompare(t)),r},m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(t,"textStyle"),O(t,n.TextStyle,"textStyle"),this._textStyle=t,s.a.load(l()("supplemental/likelySubtags.json")),s.a.load(l()("supplemental/metaZones.json"))}var t,r,a;return t=e,(r=[{key:"_resolveZoneIdText",value:function(e,t,r,n,a){var i=e.main("dates/timeZoneNames/zone/".concat(t,"/").concat(r,"/").concat(n));if(i)return i;var o=e.get("supplemental/metaZones/metazoneInfo/timezone/".concat(t));if(o){var l=o[o.length-1].usesMetazone._mzone,u=e.main("dates/timeZoneNames/metazone/".concat(l,"/").concat(r,"/").concat(n));if(u)return u;if((u=e.main("dates/timeZoneNames/metazone/".concat(l,"/").concat(r,"/generic")))||(u=e.main("dates/timeZoneNames/metazone/".concat(l,"/").concat(r,"/standard"))),u)return u;var s=a[l][e.attributes.territory];if(s){if(s!==t)return this._resolveZoneIdText(e,s,r,n,a)}else{var f=a[l]["001"];if(f!==t)return this._resolveZoneIdText(e,f,r,n,a)}}}},{key:"print",value:function(e,t){var r=e.getValueQuery(n.TemporalQueries.zoneId());if(null==r)return!1;if(r.normalized()instanceof n.ZoneOffset)return t.append(r.id()),!0;var a=this._textStyle.asNormal()===n.TextStyle.FULL?"long":"short";s.a.load(l()("main/".concat(e.locale().localeString(),"/timeZoneNames.json")));var i=new s.a(e.locale().localeString()),o={};i.get("supplemental/metaZones/metazones").forEach((function(e){e.mapZone&&(o[e.mapZone._other]||(o[e.mapZone._other]={}),o[e.mapZone._other][e.mapZone._territory]=e.mapZone._type)}));var u=this._resolveZoneIdText(i,r.id(),a,"generic",o);return u?t.append(u):t.append(r.id()),!0}},{key:"parse",value:function(e,t,r){var a={};s.a.load(l()("main/".concat(e.locale().localeString(),"/timeZoneNames.json")));var i=new s.a(e.locale().localeString()),o={};i.get("supplemental/metaZones/metazones").forEach((function(e){e.mapZone&&(o[e.mapZone._other]||(o[e.mapZone._other]={}),o[e.mapZone._other][e.mapZone._territory]=e.mapZone._type)}));var u=!0,f=!1,c=void 0;try{for(var h,d=n.ZoneRulesProvider.getAvailableZoneIds()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var y=h.value;a[y]=y;var _=this._textStyle.asNormal()===n.TextStyle.FULL?"long":"short",p=this._resolveZoneIdText(i,y,_,"generic",o);p&&(a[p]=y);var v=this._resolveZoneIdText(i,y,_,"standard",o);v&&(a[v]=y);var k=this._resolveZoneIdText(i,y,_,"daylight",o);k&&(a[k]=y)}}catch(e){f=!0,c=e}finally{try{u||null==d.return||d.return()}finally{if(f)throw c}}var O=Object.keys(a).sort(S),m=!0,g=!1,E=void 0;try{for(var w,b=O[Symbol.iterator]();!(m=(w=b.next()).done);m=!0){var F=w.value;if(e.subSequenceEquals(t,r,F,0,F.length))return e.setParsedZone(n.ZoneId.of(a[F])),r+F.length}}catch(e){g=!0,E=e}finally{try{m||null==b.return||b.return()}finally{if(g)throw E}}return~r}},{key:"toString",value:function(){return"ZoneText(".concat(this._textStyle,")")}}])&&p(t.prototype,r),a&&p(t,a),e}();function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
var E=n._.MathUtil,w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._textStyle=t}var t,r,a;return t=e,(r=[{key:"textStyle",value:function(){return this._textStyle}},{key:"print",value:function(e,t){var r=e.getValue(n.ChronoField.OFFSET_SECONDS);if(null==r)return!1;if(t.append("GMT"),this._textStyle===n.TextStyle.FULL)return new n.DateTimeFormatterBuilder.OffsetIdPrinterParser("","+HH:MM:ss").print(e,t);var a=E.safeToInt(r);if(0!==a){var i=Math.abs(E.intMod(E.intDiv(a,3600),100)),o=Math.abs(E.intMod(E.intDiv(a,60),60)),l=Math.abs(E.intMod(a,60));t.append(a<0?"-":"+").append(i),(o>0||l>0)&&(t.append(":").append(E.intDiv(o,10)).append(E.intMod(o,10)),l>0&&t.append(":").append(E.intDiv(l,10)).append(E.intMod(l,10)))}return!0}},{key:"parse",value:function(e,t,r){if(!1===e.subSequenceEquals(t,r,"GMT",0,3))return~r;if(r+=3,this._textStyle===n.TextStyle.FULL)return new n.DateTimeFormatterBuilder.OffsetIdPrinterParser("","+HH:MM:ss").parse(e,t,r);var a=t.length;if(r===a)return e.setParsedField(n.ChronoField.OFFSET_SECONDS,0,r,r);var i=t.charAt(r);if("+"!==i&&"-"!==i)return e.setParsedField(n.ChronoField.OFFSET_SECONDS,0,r,r);var o="-"===i?-1:1;if(r===a)return~r;r++;var l=t.charAt(r);if(l<"0"||l>"9")return~r;r++;var u=E.parseInt(l);if(r!==a&&(l=t.charAt(r))>="0"&&l<="9"){if((u=10*u+E.parseInt(l))>23)return~r;r++}if(r===a||":"!==t.charAt(r)){var s=3600*o*u;return e.setParsedField(n.ChronoField.OFFSET_SECONDS,s,r,r)}if(++r>a-2)return~r;if((l=t.charAt(r))<"0"||l>"9")return~r;r++;var f=E.parseInt(l);if((l=t.charAt(r))<"0"||l>"9")return~r;if(r++,(f=10*f+E.parseInt(l))>59)return~r;if(r===a||":"!==t.charAt(r)){var c=o*(3600*u+60*f);return e.setParsedField(n.ChronoField.OFFSET_SECONDS,c,r,r)}if(++r>a-2)return~r;if((l=t.charAt(r))<"0"||l>"9")return~r;r++;var h=E.parseInt(l);if((l=t.charAt(r))<"0"||l>"9")return~r;if(r++,(h=10*h+E.parseInt(l))>59)return~r;var d=o*(3600*u+60*f+h);return e.setParsedField(n.ChronoField.OFFSET_SECONDS,d,r,r)}},{key:"toString",value:function(){return"LocalizedOffset(".concat(this._textStyle,")")}}])&&g(t.prototype,r),a&&g(t,a),e}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t,r){return t&&F(e.prototype,t),r&&F(e,r),e}
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */var W=n._.MathUtil,T=n._.assert,A=T.requireNonNull,Y=T.requireInstance,C=n.ValueRange.of(1,7),x=n.ValueRange.of(0,1,4,6),R=n.ValueRange.of(0,1,52,54),N=n.ValueRange.of(1,52,53),U=n.ChronoField.YEAR.range(),L={mon:n.DayOfWeek.MONDAY,tue:n.DayOfWeek.TUESDAY,wed:n.DayOfWeek.WEDNESDAY,thu:n.DayOfWeek.THURSDAY,fri:n.DayOfWeek.FRIDAY,sat:n.DayOfWeek.SATURDAY,sun:n.DayOfWeek.SUNDAY},I=function(){function e(t,r,n,a,i){b(this,e),this._name=t,this._weekDef=r,this._baseUnit=n,this._rangeUnit=a,this._range=i}return D(e,null,[{key:"ofDayOfWeekField",value:function(t){return new e("DayOfWeek",t,n.ChronoUnit.DAYS,n.ChronoUnit.WEEKS,C)}},{key:"ofWeekOfMonthField",value:function(t){return new e("WeekOfMonth",t,n.ChronoUnit.WEEKS,n.ChronoUnit.MONTHS,x)}},{key:"ofWeekOfYearField",value:function(t){return new e("WeekOfYear",t,n.ChronoUnit.WEEKS,n.ChronoUnit.YEARS,R)}},{key:"ofWeekOfWeekBasedYearField",value:function(t){return new e("WeekOfWeekBasedYear",t,n.ChronoUnit.WEEKS,n.IsoFields.WEEK_BASED_YEARS,N)}},{key:"ofWeekBasedYearField",value:function(t){return new e("WeekBasedYear",t,n.IsoFields.WEEK_BASED_YEARS,n.ChronoUnit.FOREVER,U)}}]),D(e,[{key:"getFrom",value:function(e){var t=this._weekDef.firstDayOfWeek().value(),r=this._localizedDayOfWeek(e,t);if(this._rangeUnit===n.ChronoUnit.WEEKS)return r;if(this._rangeUnit===n.ChronoUnit.MONTHS)return this._localizedWeekOfMonth(e,r);if(this._rangeUnit===n.ChronoUnit.YEARS)return this._localizedWeekOfYear(e,r);if(this._rangeUnit===n.IsoFields.WEEK_BASED_YEARS)return this._localizedWOWBY(e);if(this._rangeUnit===n.ChronoUnit.FOREVER)return this._localizedWBY(e);throw new n.IllegalStateException("unreachable")}},{key:"_localizedDayOfWeek",value:function(e,t){var r=e.get(n.ChronoField.DAY_OF_WEEK);return W.floorMod(r-t,7)+1}},{key:"_localizedWeekOfMonth",value:function(t,r){var a=t.get(n.ChronoField.DAY_OF_MONTH),i=this._startOfWeekOffset(a,r);return e._computeWeek(i,a)}},{key:"_localizedWeekOfYear",value:function(t,r){var a=t.get(n.ChronoField.DAY_OF_YEAR),i=this._startOfWeekOffset(a,r);return e._computeWeek(i,a)}},{key:"_localizedWOWBY",value:function(t){var r=this._weekDef.firstDayOfWeek().value(),a=t.get(n.ChronoField.DAY_OF_WEEK),i=W.floorMod(a-r,7)+1,o=this._localizedWeekOfYear(t,i);if(0===o){var l=n.LocalDate.from(t).minus(1,n.ChronoUnit.WEEKS);return this._localizedWeekOfYear(l,i)+1}if(o>=53){var u=this._startOfWeekOffset(t.get(n.ChronoField.DAY_OF_YEAR),i),s=t.get(n.ChronoField.YEAR),f=n.Year.isLeap(s)?366:365,c=e._computeWeek(u,f+this._weekDef.minimalDaysInFirstWeek());if(o>=c)return o-(c-1)}return o}},{key:"_localizedWBY",value:function(t){var r=this._weekDef.firstDayOfWeek().value(),a=t.get(n.ChronoField.DAY_OF_WEEK),i=W.floorMod(a-r,7)+1,o=t.get(n.ChronoField.YEAR),l=this._localizedWeekOfYear(t,i);if(0===l)return o-1;if(l<53)return o;var u=this._startOfWeekOffset(t.get(n.ChronoField.DAY_OF_YEAR),i),s=n.Year.isLeap(o)?366:365;return l>=e._computeWeek(u,s+this._weekDef.minimalDaysInFirstWeek())?o+1:o}},{key:"_startOfWeekOffset",value:function(e,t){var r=W.floorMod(e-t,7),n=-r;return r+1>this._weekDef.minimalDaysInFirstWeek()&&(n=7-r),n}},{key:"adjustInto",value:function(e,t){var r=this._range.checkValidIntValue(t,this),a=e.get(this);if(r===a)return e;if(this._rangeUnit===n.ChronoUnit.FOREVER){var i=e.get(this._weekDef.weekOfWeekBasedYear()),o=W.roundDown(52.1775*(t-a)),l=e.plus(o,n.ChronoUnit.WEEKS);if(l.get(this)>r){var u=l.get(this._weekDef.weekOfWeekBasedYear());l=l.minus(u,n.ChronoUnit.WEEKS)}else{l.get(this)<r&&(l=l.plus(2,n.ChronoUnit.WEEKS));var s=l.get(this._weekDef.weekOfWeekBasedYear());(l=l.plus(i-s,n.ChronoUnit.WEEKS)).get(this)>r&&(l=l.minus(1,n.ChronoUnit.WEEKS))}return l}var f=r-a;return e.plus(f,this._baseUnit)}},{key:"resolve",value:function(e,t,r){var a=this._weekDef.firstDayOfWeek().value();if(this._rangeUnit===n.ChronoUnit.WEEKS){var i=e.remove(this),o=this._range.checkValidIntValue(i,this),l=W.floorMod(a-1+(o-1),7)+1;return e.put(n.ChronoField.DAY_OF_WEEK,l),null}if(!1===e.containsKey(n.ChronoField.DAY_OF_WEEK))return null;if(this._rangeUnit===n.ChronoUnit.FOREVER){if(!1===e.containsKey(this._weekDef.weekOfWeekBasedYear()))return null;var u,s,f=n.ChronoField.DAY_OF_WEEK.checkValidIntValue(e.get(n.ChronoField.DAY_OF_WEEK)),c=W.floorMod(f-a,7)+1,h=this.range().checkValidIntValue(e.get(this),this);if(r===n.ResolverStyle.LENIENT){u=n.LocalDate.of(h,1,this._weekDef.minimalDaysInFirstWeek());var d=e.get(this._weekDef.weekOfWeekBasedYear()),y=this._localizedDayOfWeek(u,a);s=7*(d-this._localizedWeekOfYear(u,y))+(c-y)}else{u=n.LocalDate.of(h,1,this._weekDef.minimalDaysInFirstWeek());var _=this._weekDef.weekOfWeekBasedYear().range().checkValidIntValue(e.get(this._weekDef.weekOfWeekBasedYear()),this._weekDef.weekOfWeekBasedYear),p=this._localizedDayOfWeek(u,a);s=7*(_-this._localizedWeekOfYear(u,p))+(c-p)}if(u=u.plus(s,n.ChronoUnit.DAYS),r===n.ResolverStyle.STRICT&&u.getLong(this)!==e.get(this))throw new n.DateTimeException("Strict mode rejected date parsed to a different year");return e.remove(this),e.remove(this._weekDef.weekOfWeekBasedYear()),e.remove(n.ChronoField.DAY_OF_WEEK),u}if(!1===e.containsKey(n.ChronoField.YEAR))return null;var v=n.ChronoField.DAY_OF_WEEK.checkValidIntValue(e.get(n.ChronoField.DAY_OF_WEEK)),k=W.floorMod(v-a,7)+1,O=n.ChronoField.YEAR.checkValidIntValue(e.get(n.ChronoField.YEAR));if(this._rangeUnit===n.ChronoUnit.MONTHS){if(!1===e.containsKey(n.ChronoField.MONTH_OF_YEAR))return null;var S,m,g=e.remove(this);if(r===n.ResolverStyle.LENIENT){var E=e.get(n.ChronoField.MONTH_OF_YEAR);S=(S=n.LocalDate.of(O,1,1)).plus(E-1,n.ChronoUnit.MONTHS);var w=this._localizedDayOfWeek(S,a);m=7*(g-this._localizedWeekOfMonth(S,w))+(k-w)}else{var b=n.ChronoField.MONTH_OF_YEAR.checkValidIntValue(e.get(n.ChronoField.MONTH_OF_YEAR));S=n.LocalDate.of(O,b,8);var F=this._localizedDayOfWeek(S,a);m=7*(this._range.checkValidIntValue(g,this)-this._localizedWeekOfMonth(S,F))+(k-F)}if(S=S.plus(m,n.ChronoUnit.DAYS),r===n.ResolverStyle.STRICT&&S.getLong(n.ChronoField.MONTH_OF_YEAR)!==e.get(n.ChronoField.MONTH_OF_YEAR))throw new n.DateTimeException("Strict mode rejected date parsed to a different month");return e.remove(this),e.remove(n.ChronoField.YEAR),e.remove(n.ChronoField.MONTH_OF_YEAR),e.remove(n.ChronoField.DAY_OF_WEEK),S}if(this._rangeUnit===n.ChronoUnit.YEARS){var D,T=e.remove(this),A=n.LocalDate.of(O,1,1);if(r===n.ResolverStyle.LENIENT){var Y=this._localizedDayOfWeek(A,a);D=7*(T-this._localizedWeekOfYear(A,Y))+(k-Y)}else{var C=this._localizedDayOfWeek(A,a);D=7*(this._range.checkValidIntValue(T,this)-this._localizedWeekOfYear(A,C))+(k-C)}if(A=A.plus(D,n.ChronoUnit.DAYS),r===n.ResolverStyle.STRICT&&A.getLong(n.ChronoField.YEAR)!==e.get(n.ChronoField.YEAR))throw new n.DateTimeException("Strict mode rejected date parsed to a different year");return e.remove(this),e.remove(n.ChronoField.YEAR),e.remove(n.ChronoField.DAY_OF_WEEK),A}throw new n.IllegalStateException("unreachable")}},{key:"name",value:function(){return this._name}},{key:"baseUnit",value:function(){return this._baseUnit}},{key:"rangeUnit",value:function(){return this._rangeUnit}},{key:"range",value:function(){return this._range}},{key:"isDateBased",value:function(){return!0}},{key:"isTimeBased",value:function(){return!1}},{key:"isSupportedBy",value:function(e){if(e.isSupported(n.ChronoField.DAY_OF_WEEK)){if(this._rangeUnit===n.ChronoUnit.WEEKS)return!0;if(this._rangeUnit===n.ChronoUnit.MONTHS)return e.isSupported(n.ChronoField.DAY_OF_MONTH);if(this._rangeUnit===n.ChronoUnit.YEARS)return e.isSupported(n.ChronoField.DAY_OF_YEAR);if(this._rangeUnit===n.IsoFields.WEEK_BASED_YEARS)return e.isSupported(n.ChronoField.EPOCH_DAY);if(this._rangeUnit===n.ChronoUnit.FOREVER)return e.isSupported(n.ChronoField.EPOCH_DAY)}return!1}},{key:"rangeRefinedBy",value:function(t){if(this._rangeUnit===n.ChronoUnit.WEEKS)return this._range;var r=null;if(this._rangeUnit===n.ChronoUnit.MONTHS)r=n.ChronoField.DAY_OF_MONTH;else{if(this._rangeUnit!==n.ChronoUnit.YEARS){if(this._rangeUnit===n.IsoFields.WEEK_BASED_YEARS)return this._rangeWOWBY(t);if(this._rangeUnit===n.ChronoUnit.FOREVER)return t.range(n.ChronoField.YEAR);throw new n.IllegalStateException("unreachable")}r=n.ChronoField.DAY_OF_YEAR}var a=this._weekDef.firstDayOfWeek().value(),i=t.get(n.ChronoField.DAY_OF_WEEK),o=W.floorMod(i-a,7)+1,l=this._startOfWeekOffset(t.get(r),o),u=t.range(r);return n.ValueRange.of(e._computeWeek(l,u.minimum()),e._computeWeek(l,u.maximum()))}},{key:"_rangeWOWBY",value:function(t){var r=this._weekDef.firstDayOfWeek().value(),a=t.get(n.ChronoField.DAY_OF_WEEK),i=W.floorMod(a-r,7)+1,o=this._localizedWeekOfYear(t,i);if(0===o)return this._rangeWOWBY(n.IsoChronology.INSTANCE.date(t).minus(2,n.ChronoUnit.WEEKS));var l=this._startOfWeekOffset(t.get(n.ChronoField.DAY_OF_YEAR),i),u=t.get(n.ChronoField.YEAR),s=n.Year.isLeap(u)?366:365,f=e._computeWeek(l,s+this._weekDef.minimalDaysInFirstWeek());return o>=f?this._rangeWOWBY(n.IsoChronology.INSTANCE.date(t).plus(2,n.ChronoUnit.WEEKS)):n.ValueRange.of(1,f-1)}},{key:"getDisplayName",value:function(e){return A(e,"locale"),this._rangeUnit===n.ChronoUnit.YEARS?"Week":this.toString()}},{key:"toString",value:function(){return this._name+"["+this._weekDef.toString()+"]"}}],[{key:"_computeWeek",value:function(e,t){return W.intDiv(7+e+(t-1),7)}}]),e}(),M=new Map,P=function(){function e(t,r){if(b(this,e),A(t,"firstDayOfWeek"),Y(t,n.DayOfWeek,"firstDayOfWeek"),A(r,"minimalDaysInFirstWeek"),r<1||r>7)throw new n.IllegalArgumentException("Minimal number of days is invalid");this._firstDayOfWeek=t,this._minimalDays=r,this._dayOfWeek=I.ofDayOfWeekField(this),this._weekOfMonth=I.ofWeekOfMonthField(this),this._weekOfYear=I.ofWeekOfYearField(this),this._weekOfWeekBasedYear=I.ofWeekOfWeekBasedYearField(this),this._weekBasedYear=I.ofWeekBasedYearField(this),s.a.load(l()("supplemental/likelySubtags.json"))}return D(e,null,[{key:"of",value:function(t,r){return void 0===r?e.ofLocale(t):e.ofFirstDayOfWeekMinDays(t,r)}},{key:"ofLocale",value:function(t){A(t,"locale"),s.a.load(l()("supplemental/weekData.json"));var r=new s.a(t.localeString()).get("supplemental/weekData"),n=L[r.firstDay[t.country()]];n||(n=L[r.firstDay["001"]]);var a=r.minDays[t.country()];return a||(a=r.minDays["001"]),e.ofFirstDayOfWeekMinDays(n,a)}},{key:"ofFirstDayOfWeekMinDays",value:function(t,r){A(t,"firstDayOfWeek"),Y(t,n.DayOfWeek,"firstDayOfWeek"),A(r,"minimalDaysInFirstWeek");var a=t.toString()+r,i=M.get(a);return null==i&&(i=new e(t,r),M.set(a,i),i=M.get(a)),i}}]),D(e,[{key:"firstDayOfWeek",value:function(){return this._firstDayOfWeek}},{key:"minimalDaysInFirstWeek",value:function(){return this._minimalDays}},{key:"dayOfWeek",value:function(){return this._dayOfWeek}},{key:"weekOfMonth",value:function(){return this._weekOfMonth}},{key:"weekOfYear",value:function(){return this._weekOfYear}},{key:"weekOfWeekBasedYear",value:function(){return this._weekOfWeekBasedYear}},{key:"weekBasedYear",value:function(){return this._weekBasedYear}},{key:"equals",value:function(t){return this===t||t instanceof e&&this.hashCode()===t.hashCode()}},{key:"hashCode",value:function(){return 7*this._firstDayOfWeek.ordinal()+this._minimalDays}},{key:"toString",value:function(){return"WeekFields["+this._firstDayOfWeek+","+this._minimalDays+"]"}}]),e}();function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */
var B=n._.StringBuilder,z=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._letter=t,this._count=r}var t,r,a;return t=e,(r=[{key:"print",value:function(e,t){var r=P.of(e.locale());return this._evaluate(r).print(e,t)}},{key:"parse",value:function(e,t,r){var n=P.of(e.locale());return this._evaluate(n).parse(e,t,r)}},{key:"_evaluate",value:function(e){var t=null;switch(this._letter){case"e":case"c":t=new n.DateTimeFormatterBuilder.NumberPrinterParser(e.dayOfWeek(),this._count,2,n.SignStyle.NOT_NEGATIVE);break;case"w":t=new n.DateTimeFormatterBuilder.NumberPrinterParser(e.weekOfWeekBasedYear(),this._count,2,n.SignStyle.NOT_NEGATIVE);break;case"W":t=new n.DateTimeFormatterBuilder.NumberPrinterParser(e.weekOfMonth(),1,2,n.SignStyle.NOT_NEGATIVE);break;case"Y":t=2===this._count?new n.DateTimeFormatterBuilder.ReducedPrinterParser(e.weekBasedYear(),2,2,0,n.DateTimeFormatterBuilder.ReducedPrinterParser.BASE_DATE):new n.DateTimeFormatterBuilder.NumberPrinterParser(e.weekBasedYear(),this._count,19,this._count<4?n.SignStyle.NORMAL:n.SignStyle.EXCEEDS_PAD,-1)}return t}},{key:"toString",value:function(){var e=new B(30);return e.append("Localized("),"Y"===this._letter?1===this._count?e.append("WeekBasedYear"):2===this._count?e.append("ReducedValue(WeekBasedYear,2,2,2000-01-01)"):e.append("WeekBasedYear,").append(this._count).append(",").append(19).append(",").append(this._count<4?n.SignStyle.NORMAL:n.SignStyle.EXCEEDS_PAD):("c"===this._letter||"e"===this._letter?e.append("DayOfWeek"):"w"===this._letter?e.append("WeekOfWeekBasedYear"):"W"===this._letter&&e.append("WeekOfMonth"),e.append(","),e.append(this._count)),e.append(")"),e.toString()}}])&&j(t.prototype,r),a&&j(t,a),e}();function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}
/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */var J=n._.assert,G=J.requireNonNull,Q=J.requireInstance,X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Z(this,H(t).apply(this,arguments))}var r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),r=t,(a=[{key:"appendText",value:function(e,t){return void 0===t?this.appendTextField(e):t instanceof n.TextStyle?this.appendTextFieldStyle(e,t):this.appendTextFieldMap(e,t)}},{key:"appendTextField",value:function(e){return this.appendTextFieldStyle(e,n.TextStyle.FULL)}},{key:"appendTextFieldStyle",value:function(e,t){return G(e,"field"),Q(e,n.TemporalField,"field"),G(t,"textStyle"),Q(t,n.TextStyle,"textStyle"),this._appendInternal(new i(e,t,new _)),this}},{key:"appendTextFieldMap",value:function(e,t){G(e,"field"),Q(e,n.ChronoField,"field"),G(t,"textLookup");var r=Object.assign({},t),a={};a[n.TextStyle.FULL]=r;var o=new d(a),l={getText:function(e,t,r){return o.getText(t,r)},getTextIterator:function(e,t){return o.getTextIterator(t)}};return this._appendInternal(new i(e,n.TextStyle.FULL,l)),this}},{key:"appendWeekField",value:function(e,t){return G(e,"field"),G(t,"count"),this._appendInternal(new z(e,t)),this}},{key:"appendZoneText",value:function(e){return this._appendInternal(new m(e)),this}},{key:"appendLocalizedOffset",value:function(e){if(G(e,"textStyle"),e!==n.TextStyle.FULL&&e!==n.TextStyle.SHORT)throw new n.IllegalArgumentException("Style must be either full or short");return this._appendInternal(new w(e)),this}}])&&V(r.prototype,a),o&&V(r,o),t}(n.DateTimeFormatterBuilder);function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ee(e,t,r){return t&&$(e.prototype,t),r&&$(e,r),e}
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */var te=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._language=t,this._country=r,this._localeString=n}return ee(e,null,[{key:"getAvailableLocales",value:function(){return(new _).getAvailableLocales()}}]),ee(e,[{key:"language",value:function(){return this._language}},{key:"country",value:function(){return this._country}},{key:"localeString",value:function(){return this._localeString.length>0?this._localeString:this._country.length>0?"".concat(this._language,"-").concat(this._country):this._language}},{key:"toString",value:function(){return"Locale[".concat(this.localeString(),"]")}},{key:"equals",value:function(t){return!!t&&(t instanceof e&&this.localeString()===t.localeString())}}]),e}();function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ae(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */var le=n._.assert.requireNonNull,ue=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,ie(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,e),r=t,(a=[{key:"withLocale",value:function(e){return le(e,"locale"),e.equals(this._locale)?this:new n.DateTimeFormatter(this._printerParser,e,this._decimalStyle,this._resolverStyle,this._resolverFields,this._chrono,this._zone)}}])&&ne(r.prototype,a),i&&ne(r,i),t}(n.DateTimeFormatter),se=!1;se||(se=!0,te.ENGLISH=new te("en"),te.US=new te("en","US","en"),te.UK=new te("en","GB"),te.CANADA=new te("en","CA"),te.FRENCH=new te("fr"),te.FRANCE=new te("fr","FR","fr"),te.GERMAN=new te("de"),te.GERMANY=new te("de","DE","de"),P.ISO=P.of(n.DayOfWeek.MONDAY,4),P.SUNDAY_START=P.of(n.DayOfWeek.SUNDAY,1));r.d(t,"Locale",(function(){return te})),
/*
 * @copyright (c) 2017, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
 */
Object(n.use)((function(e){Object.getOwnPropertyNames(X.prototype).forEach((function(t){"constructor"!==t&&(e.DateTimeFormatterBuilder.prototype[t]=X.prototype[t])})),Object.getOwnPropertyNames(ue.prototype).forEach((function(t){"constructor"!==t&&(e.DateTimeFormatter.prototype[t]=ue.prototype[t])}))}))}])}));