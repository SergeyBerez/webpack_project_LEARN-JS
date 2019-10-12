var $ = require('jquery'); // подключаем jqury который выплевывается в папу дист в  файл main.js
var avrkl = require('./sum'); // подключаем нашу самописную функцию
console.log(avrkl(5, 5, 5)); // пишу код вызываю модуль avr
// $('h1').html('  подключили  qjuery через модуль ');

// Создать модуль, который экспортирует функцию `deleteTextNodes`

let div = document.querySelector('.box').childNodes;

var deleteTextNodes = require('./removeNode');
console.log(deleteTextNodes(div));

// Создать модуль, который экспортирует функцию `prepend`
// prepend имеет два параметра, в которые нужно передать элементы
// Задача функции - вставить второй элемент в начало первого. Например:
// `prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.
let p = document.querySelectorAll('p');
let pre = require('./dom');
pre(p[0], p[1]);

// ================================ ajax=======================

let btn = document.querySelector('[type="submit"]');
let spanRes = document.querySelector('span');
// btn.onclick = function() {
//   ajaxPost();
// };
// ===== ???????? ==== вот этот запрос POST
function ajaxPost() {
  let request = new XMLHttpRequest();

  // request.onreadystatechange = function() {
  //   if (request.readyState == 4 && request.status == 200) {
  //     divRes.innerHTML = request.responseText;
  //   }
  // };
  request.addEventListener('load', function(e) {
    if (request.readyState == 4 && request.status == 200) {
      console.log(this);
      spanRes.innerHTML = request.responseText;
    }
  });

  request.open('GET', '../1.txt');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send();
}


$('form').submit( function(e) {
  let data = $(this).serialize();
  console.log(data);

  $.ajax({
    type: 'POST',
    url: '../back.php',
    data: data,
    dataType: 'dataType',
    success: function(response) {
      console.log(response);
    },
    error: function(){
      console.log('Произошла ошибка!');
      }
  });
  e.preventDefault();



});
