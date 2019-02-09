// функции 

function sum(a, b) {
  return a + b;
}

function addElem () {
  // получаем значение инпута и сохраняем его в переменную tagName
  var tagName = $('.js-tag-name input').val();
  // 1. создаем элемент
  var newElem = document.createElement(tagName);
  // получаем значение инпута и сохраняем его в переменную tagContent
  // 2. добавляем контент в наш элемент
  var tagContent = $('.js-tag-content input').val();
  newElem.innerHTML = tagContent;
  // 3. добавляем элемент в BODY
  document.body.appendChild(newElem);
}

// var button = document.querySelector('.js-add-elem');
var button = $('.js-add-elem');

// button.addEventListener('click', function() {
//   addElem('h1', 'элемент созданный с помощью моей функции');
//   console.log('событие по клику мыши');
// });

button.click(addElem);

// $('body').html('<h1>элемент вставленный с помощью jquery</h1>');

setInterval(function(){
  document.body.innerHTML += '👁';
},50)