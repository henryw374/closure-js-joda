goog.provide('addons.extra.js_joda_extra.min');

addons.extra.js_joda_extra.min.f = ( function(e){return s={},o.m=r=[function(t,n){t.exports=e},function(t,n,e){"use strict";e.r(n);var f=e(0);function h(t,n){if(null==t)throw new f.NullPointerException(n+" must not be null");return t}function s(t,n,e){if(!(t instanceof n))throw new f.IllegalArgumentException(e+" must be an instance of "+(n.name?n.name:n)+(t&&t.constructor&&t.constructor.name?", but is "+t.constructor.name:""));return t}var r=function(){function c(t,n){this._start=t,this._end=n}c.of=function(t,n){return n instanceof f.Duration?c.ofInstantDuration(t,n):c.ofInstantInstant(t,n)},c.ofInstantInstant=function(t,n){if(h(t,"startInclusive"),h(n,"endExclusive"),s(t,f.Instant,"startInclusive"),s(n,f.Instant,"endExclusive"),n.isBefore(t))throw new f.DateTimeException("End instant must on or after start instant");return new c(t,n)},c.ofInstantDuration=function(t,n){if(h(t,"startInclusive"),h(n,"duration"),s(t,f.Instant,"startInclusive"),s(n,f.Duration,"duration"),n.isNegative())throw new f.DateTimeException("Duration must not be zero or negative");return new c(t,t.plus(n))},c.parse=function(t){if(h(t,"text"),"string"!=typeof t)throw new f.IllegalArgumentException("text must be a string, but is "+t.constructor.name);for(var n=0;n<t.length;n+=1)if("/"===t.charAt(n)){var e=t.charAt(0);if("P"===e||"p"===e){var r=f.Duration.parse(t.substring(0,n)),o=f.ZonedDateTime.parse(t.substring(n+1,t.length)).toInstant();return c.of(o.minus(r),o)}var s=f.ZonedDateTime.parse(t.substring(0,n)).toInstant();if(n+1<t.length){var i=t.charAt(n+1);if("P"===i||"p"===i){var a=f.Duration.parse(t.substring(n+1,t.length));return c.of(s,s.plus(a))}}var u=f.ZonedDateTime.parse(t.substring(n+1,t.length)).toInstant();return c.of(s,u)}throw new f.DateTimeParseException("Interval cannot be parsed, no forward slash found",t,0)};var t=c.prototype;return t.start=function(){return this._start},t.end=function(){return this._end},t.isEmpty=function(){return this._start.equals(this._end)},t.isUnboundedStart=function(){return this._start.equals(f.Instant.MIN)},t.isUnboundedEnd=function(){return this._end.equals(f.Instant.MAX)},t.withStart=function(t){return c.of(t,this._end)},t.withEnd=function(t){return c.of(this._start,t)},t.contains=function(t){return h(t,"instant"),s(t,f.Instant,"instant"),this._start.compareTo(t)<=0&&(t.compareTo(this._end)<0||this.isUnboundedEnd())},t.encloses=function(t){return h(t,"other"),s(t,c,"other"),this._start.compareTo(t.start())<=0&&t.end().compareTo(this._end)<=0},t.abuts=function(t){return h(t,"other"),s(t,c,"other"),!this._end.equals(t.start())!=!this._start.equals(t.end())},t.isConnected=function(t){return h(t,"other"),s(t,c,"other"),this.equals(t)||this._start.compareTo(t.end())<=0&&t.start().compareTo(this._end)<=0},t.overlaps=function(t){return h(t,"other"),s(t,c,"other"),t.equals(this)||this._start.compareTo(t.end())<0&&t.start().compareTo(this._end)<0},t.intersection=function(t){if(h(t,"other"),s(t,c,"other"),!1===this.isConnected(t))throw new f.DateTimeException("Intervals do not connect: "+this+" and "+t);var n=this._start.compareTo(t.start()),e=this._end.compareTo(t.end());if(0<=n&&e<=0)return this;if(n<=0&&0<=e)return t;var r=0<=n?this._start:t.start(),o=e<=0?this._end:t.end();return c.of(r,o)},t.union=function(t){if(h(t,"other"),s(t,c,"other"),!1===this.isConnected(t))throw new f.DateTimeException("Intervals do not connect: "+this+" and "+t);var n=this._start.compareTo(t.start()),e=this._end.compareTo(t.end());if(0<=n&&e<=0)return t;if(n<=0&&0<=e)return this;var r=0<=n?t.start():this._start,o=e<=0?t.end():this._end;return c.of(r,o)},t.span=function(t){h(t,"other"),s(t,c,"other");var n=this._start.compareTo(t.start()),e=this._end.compareTo(t.end()),r=0<=n?t.start():this._start,o=e<=0?t.end():this._end;return c.of(r,o)},t.isAfter=function(t){return t instanceof f.Instant?this.isAfterInstant(t):this.isAfterInterval(t)},t.isBefore=function(t){return t instanceof f.Instant?this.isBeforeInstant(t):this.isBeforeInterval(t)},t.isAfterInstant=function(t){return 0<this._start.compareTo(t)},t.isBeforeInstant=function(t){return this._end.compareTo(t)<=0&&this._start.compareTo(t)<0},t.isAfterInterval=function(t){return 0<=this._start.compareTo(t.end())&&!t.equals(this)},t.isBeforeInterval=function(t){return this._end.compareTo(t.start())<=0&&!t.equals(this)},t.toDuration=function(){return f.Duration.between(this._start,this._end)},t.equals=function(t){return this===t||t instanceof c&&(this._start.equals(t.start())&&this._end.equals(t.end()))},t.hashCode=function(){return this._start.hashCode()^this._end.hashCode()},t.toString=function(){return this._start.toString()+"/"+this._end.toString()},c}();var o=!1;o||(o=!0,r.ALL=r.of(f.Instant.MIN,f.Instant.MAX));e.d(n,"Interval",function(){return r}),Object(f.use)(function(){})}],o.c=s,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=1);function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var r,s});