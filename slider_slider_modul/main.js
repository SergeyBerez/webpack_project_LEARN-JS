// -----------------слайдер

// var imgs = document.querySelectorAll('img');
// var btn = document.querySelectorAll('button');
// var i = 0;
// btn[1].onclick = function() {
//   imgs[i].classList.remove('show');
//   i++;

//   if (i >= imgs.length) {
//     i = 0;
//   }
//   imgs[i].classList.add('show');
// };

// btn[0].onclick = function() {
//   imgs[i].classList.remove('show');
//   i--;

//   if (i < 0) {
//     i = imgs.length - 1;
//   }
//   imgs[i].classList.add('show');
// };

//===============слайдер через jquery
// var i = 0;
// var $img = $('img');

// $('button').on('click', function(e) {
//   $img.eq(i).removeClass('show');
//   i++;
//   if (i >= $img.length) {
//     i = 0;
//   }
//   $img.eq(i).addClass('show');
// });
// console.log($('button'));
//------------ создаем обьект салйдера
//модуль слайдера
(function() {
  function Slider(elements, btn, auto, time, selector) {
    this.element = elements;
    var i = 0;
    this.selector = selector;
    var select = this.selector;

    this.btn = btn;
    this.time = time || 1000;
    this.auto = auto;
    var slider = this;
    slider.next = function() {
      console.log(this.selector);
      slider.element[i].classList.remove(select);
      i++;

      if (i >= slider.element.length) {
        i = 0;
      }
      slider.element[i].classList.add(select);
    };

    slider.prev = function() {
      slider.element[i].classList.remove(select);
      i--;

      if (i < 0) {
        i = slider.element.length - 1;
      }
      slider.element[i].classList.add(select);
    };

    slider.btn[0].onclick = slider.next;

    slider.btn[1].onclick = slider.prev;
    if (this.auto == 'auto') {
      setInterval(slider.next, this.time);
    }

    console.log(slider);
  }

  var btn = document.querySelectorAll('button');
  var imgs = document.querySelectorAll('.slider1 img');
  var newSlider = new Slider(imgs, btn, 'false', 5000, 'show');

  var btn2 = document.querySelectorAll('.button');
  var imgs2 = document.querySelectorAll('.slider2 img');
  var newSlider2 = new Slider(imgs2, btn2, 'false', 2000, 'show');
})();
