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
  const diff = calculateDecimalDifference();
  let html = '';
  for (let i = 0; i < 18; i++) {
    html +=`<p>${diff.toString().split('').slice(0,i+1).join('')}</p>`;
  }
  OUTPUT.innerHTML = html;
}, 150);




function getMouseCoords(e) {
  var e = e || window.event;
}


var followCursor = (function() {
  var s = document.querySelector('.waffle-container');
  s.style.position = 'absolute';

  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX - 5) + 'px';
      s.style.top = (e.clientY - 5) + 'px';
      getMouseCoords(e);
    }
  };
}());

window.onload = function() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}