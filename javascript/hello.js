var a = 1;
var b = 12381274981250182;

var result = a + b;
console.log(result);

var color = '#' + Math.random().toString().split('').splice(2,6).join('').toString(16);
document.body.style.background = color;

var elem = document.querySelector('h1');

elem.innerHTML = 'hello from javascript';
elem.style.color = 'white';
