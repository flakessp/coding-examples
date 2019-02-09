function decimalDateToJsDate(time) {
  debugger;
  var year = Math.floor(time);
  var thisYear = new Date(year, 0, 1);
  var nextYear = new Date(year + 1, 0, 1);
  var millisecondsInYear = nextYear.getTime() - thisYear.getTime();
  var deltaTime = Math.ceil((time - year) * millisecondsInYear);
  thisYear.setMilliseconds(deltaTime);
  return thisYear;
}

document.getElementById("output").innerHTML = decimalDateToJsDate(2015.0596924);

// get delta betwen date from BD and date.now
//convert this value to decimal