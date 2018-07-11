'use strict'
Pictor.prototype.splitUp = function (word, id, separator, time) {
  console.log(id)
  var arr = word.split(separator);
  time = parseFloat(time)

  var i = 0;
  $.each(arr, function (index) {

    time += 0.1;
    i = 0;
    time = +time.toFixed(2);

    $(id).append(
      '<span class="charlie" data-animations="textAnimateLetter" data-times=" ' + time +
      '">' +
      (this == ' ' ? '&nbsp;' : this) +
      '</span>'
    );

    i++;
  });
};

Pictor.prototype.numberAnimation = function (amount, parent) {
  var options = {
    amount: amount,
    delay: 0,
    duration: 50,
  };
  var amount = options.amount;
  var time = amount / options.duration;
  var number = 0;
  var fixed = 0;
  if (amount.toString().split('.')[1]) {
    fixed = amount.toString().split('.')[1].length;
  }
  requestAnimationFrame(function interval() {
    number += time;
    parent.querySelector('.number').innerHTML =
      // Math.round(number * 100) / 100;
      number.toFixed(fixed);
    if (number >= amount) {
      document.querySelector('.number').innerHTML = amount;
      cancelAnimationFrame(interval);
    } else {
      requestAnimationFrame(interval);
    }
  });
};

// Pictor.prototype.animateText = function () {
//
//   var element = document.getElementById('style__animate2');
//   if(element){
//     element.parentNode.removeChild(element);
//   }
//
//
//   var width = document.querySelector('#animate2__line1').offsetWidth;
//   var animate = '@keyframes animate2__line1 {' +
//     '  from{' +
//     '    opacity: 0;' +
//     '    clip: rect(0px, 0px, '+width+'px, 0px);' +
//     '    transform: translateY(200%);' +
//     '  }' +
//     '  3%{transform: translateY(100%); }' +
//     '  10%{' +
//     '    opacity: 1;' +
//     '    clip: rect(0px, '+width+'px, '+width+'px, 0px);' +
//     '}'+
//     '  15%{' +
//     '    opacity: 1;' +
//     '    transform: translateY(0);' +
//     '  }' +
//     '  to{' +
//     '    opacity: 1;' +
//     '    transform: translateY(0);' +
//     '  }' +
//     '}' +
//     '.animate2__line1{' +
//     '  left: calc( 50% - '+width/2+'px);'+
//     '  clip: rect(0, '+width+'px, '+width+'px, 0);' +
//     '  animation: animate2__line1 10s linear;' +
//     '}'+
//     '@keyframes animate2__line2 {' +
//     '  from,10%{' +
//     '    opacity: 0;' +
//     '    clip: rect(0px, 0px, '+width+'px, 0px);' +
//     '    transform: translateY(200%);' +
//     '  }' +
//     '  10%{transform: translateY(100%); }' +
//     '  17%{' +
//     '    opacity: 1;' +
//     '    clip: rect(0px, '+width+'px, '+width+'px, 0px);' +
//     '}'+
//     '  20%{' +
//     '    opacity: 1;' +
//     '    transform: translateY(0);' +
//     '  }' +
//     '  to{' +
//     '    opacity: 1;' +
//     '    transform: translateY(0);' +
//     '  }' +
//     '}' +
//     '.animate2__line2{' +
//     '  left: calc( 50% - '+width/2+'px);'+
//     '  clip: rect(0, '+width+'px, '+width+'px, 0);' +
//     '  animation: animate2__line2 10s linear;' +
//     '}'+
//     '.animate-finish{' +
//     '  animation: animate-finish 0.1s linear;' +
//     '}';
//
//   var style = document.createElement("style");
//   style.setAttribute('id','style__animate2');
//   style.innerHTML = animate;
//   $('head').append(style);
// };
