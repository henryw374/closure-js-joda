//import * as foo from "./dummy-export.js"

//import {ChronoField} from "./js-joda/temporal/ChronoField.js" //2k
//import {LocalDate} from "./js-joda/LocalDate.js"
import {Instant} from "./js-joda/Instant.js"
//import {Duration} from "./js-joda/Duration.js"

//ok
//import {MathUtil} from './js-joda/MathUtil.js';
//import {YearConstants} from "../js-joda/YearConstants.js"
//import {ValueRange} from "../js-joda/ValueRange.js"

//var v = Duration.ofSeconds(3, 1).toString();
// ChronoField.OFFSET_SECONDS;
//MathUtil.safeAdd(3,4);
 
//var v = LocalDate.now().toString(); 
var v = Instant.now().toEpochMilli(); 
console.log('hello ' + v )