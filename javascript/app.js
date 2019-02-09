$('h1').html('😃');
var emojis = ['🥰','😕','😭','😤','😠','😆','😊','😄','🖤'];


var button = $('.js-add-el'); 

button.click(function(){
  var rand = Math.floor(Math.random()*9);
  var html = `<span>${emojis[rand]}</span>`;
  $('.container').append(html);
})

setInterval(function(){
  var rand = Math.floor(Math.random()*9);
  var html = `<span style="font-size:${(Math.random()+0.5)*2}em">${emojis[rand]}</span>`;
  $('.container').append(html);
}, 150)