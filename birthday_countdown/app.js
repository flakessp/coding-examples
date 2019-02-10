// function decimalDateToJsDate(time) {
//   var year = Math.floor(time);
//   var thisYear = new Date(year, 0, 1);
//   var nextYear = new Date(year + 1, 0, 1);
//   var millisecondsInYear = nextYear.getTime() - thisYear.getTime();
//   console.log(nextYear.getTime());
//   console.log(thisYear.getTime());
//   console.log(millisecondsInYear);
//   console.log(year);
//   console.log(time-year);
//   var deltaTime = Math.ceil((time - year) * millisecondsInYear);
//   thisYear.setMilliseconds(deltaTime);
//   return thisYear;
// }

// console.log(2015.0596924);
// console.log(decimalDateToJsDate(2015.1231256234));

// get delta betwen date from BD and date.now


//convert this value to decimal

// что я хочу
// инпут: start value (bd), end value (bd+30)

// output: 

// function calculateDayDifference( from=new Date('02/11/1990 12:37:00'), to = new Date('02/11/2019 12:37:00') ) {
//   var dayDifference;
//   const ONEDAY = 1000 * 60 * 60 * 24;
//   dayDifference = Math.abs( from - to ) / 31536000000;
//   return dayDifference;
// }
// const OUTPUT = document.getElementById('output');
// setInterval(function(){
//   OUTPUT.innerText = calculateDayDifference();
// }, 50);
const BD = moment('1990-02-11');
calculateDecimalDifference = () => {
  let now = moment();
  return now.diff(BD, 'years', true);
}

const OUTPUT = document.getElementById('output');

setInterval(function(){
  OUTPUT.innerText = calculateDecimalDifference();
}, 100);

