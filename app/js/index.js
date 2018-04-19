'use strict';
window.HELP_IMPROVE_VIDEOJS = false;

function VideoPlayer() {
  var videoElem = document.createElement('VIDEO');
  videoElem.setAttribute('src', './app/img/Furniture-final.mp4');
  videoElem.setAttribute('class', 'video-js vjs-fluid');
  videoElem.setAttribute('webkit-playsinline', '');
  videoElem.setAttribute('playsinline', '');
  videoElem.setAttribute('id', 'js--video-player');
  this.video = videoElem;
  console.log(videoElem);
}

VideoPlayer.prototype.animationStart = (function(el) {
  var animations = {
    animation: 'animationstart',
    OAnimation: 'oAnimationStart',
    MozAnimation: 'mozAnimationStart',
    WebkitAnimation: 'webkitAnimationStart',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

VideoPlayer.prototype.animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };
  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
  animateFinish();
})(document.createElement('div'));

VideoPlayer.prototype.fetchData = function(uri, callback) {
  var self = this;
  fetch(uri)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      self.data = myJson;
      callback();
    });
};

// VideoPlayer.prototype.init = function() {
//     var self = this;
//     var video = self.video;
//     let params = (new URL(document.location)).searchParams;
//     let name = params.get("id");

//     //this.fetchData ('data.json', function callback () {
//     this.fetchData('http://35.200.136.182:8083/video/' + name, function callback() {
//         console.log(self.data);
//         $('.js-name').text(self.data.text1);
//         $('.js-month').text(self.data.text2);
//         $('#animate3 .animate3__line2').append(
//             self.data.text3
//         );
//         CHARLIE.setup(video);
//         return;
//     });

VideoPlayer.prototype.init = function() {
  var self = this;
  var video = self.video;
  this.fetchData('data.json', function callback() {
    $('#animate1-img1').css({"background": "url("+ self.data.image11 +") center no-repeat","background-size": "cover"});
    $('#animate1-text1').text(self.data.text11);
    $('#animate1-text2').text(self.data.text12);
    $('#animate1-img2').css({"background": "url("+ self.data.image12 +") center no-repeat","background-size": "cover"});

    $('#animate2-text1').text(self.data.text21);
    $('#animate2-image1').css({"background": "url("+ self.data.image21 +") center no-repeat","background-size": "cover"});
    $('#animate2-text2').text(self.data.text22);

    $('#animate3').css({"background": "url("+ self.data.image3 +") center no-repeat","background-size": "cover"});
    $('#animate3-img1').css({"background": "url("+ self.data.image31 +") center no-repeat","background-size": "cover"});
    $('#animate3-text1').text(self.data.text31);
    $('#animate3-img2').css({"background": "url("+ self.data.image32 +") center no-repeat","background-size": "cover"});
    $('#animate3-text2').text(self.data.text32);
    $('#animate3-img3').css({"background": "url("+ self.data.image33 +") center no-repeat","background-size": "cover"});
    $('#animate3-text3').text(self.data.text33);

    $('#animate4').css({"background": "url("+ self.data.image4 +") center no-repeat","background-size": "cover"});
    $('#animate4-img1').css({"background": "url("+ self.data.image41 +") center no-repeat","background-size": "cover"});
    $('#animate4-text1').text(self.data.text41);
    $('#animate4-img2').css({"background": "url("+ self.data.image42 +") center no-repeat","background-size": "cover"});
    $('#animate4-text2').text(self.data.text42);
    $('#animate4-img3').css({"background": "url("+ self.data.image43 +") center no-repeat","background-size": "cover"});
    $('#animate4-text3').text(self.data.text43);

    $('#animate5').css({"background": "url("+ self.data.image5 +") center no-repeat","background-size": "cover"});
    $('#animate5-img1').css({"background": "url("+ self.data.image51 +") center no-repeat","background-size": "cover"});
    $('#animate5-text1').text(self.data.text51);
    $('#animate5-img2').css({"background": "url("+ self.data.image52 +") center no-repeat","background-size": "cover"});
    $('#animate5-text2').text(self.data.text52);
    $('#animate5-img3').css({"background": "url("+ self.data.image53 +") center no-repeat","background-size": "cover"});
    $('#animate5-text3').text(self.data.text53);

    $('#animate6-img1').css({"background": "url("+ self.data.image61 +") center no-repeat","background-size": "cover"});
    $('#animate6-img2').css({"background": "url("+ self.data.image62 +") center no-repeat","background-size": "cover"});

    $('#animate7-img1').css({"background": "url("+ self.data.image71 +") center no-repeat","background-size": "cover"});
    $('#animate7-img2').css({"background": "url("+ self.data.image72 +") center no-repeat","background-size": "cover"});
    $('#animate7-img3').css({"background": "url("+ self.data.image73 +") center no-repeat","background-size": "cover"});
    $('#animate7-img4').css({"background": "url("+ self.data.image74 +") center no-repeat","background-size": "cover"});

    // retargeting video element
    video = document.getElementsByClassName('vjs-tech')[0];
    CHARLIE.setup(video);
    return;
  });


  $('#videoPlayerWrapper').append(video);
  self.myPlayer = videojs('js--video-player', {
    controls: true,
    autoplay: false,
    preload: false,
  });

  self.myPlayer.el_.addEventListener(
    'webkitfullscreenchange',
    function() {
      self.handleFullScreen.call(this, event)
    }
  );
  var currentTime = 0;

  //This example allows users to seek backwards but not forwards.
  //To disable all seeking replace the if statements from the next
  //two functions with myPlayer.currentTime(currentTime);

  // self.myPlayer.on('seeking', function(event) {
  //   if (currentTime < self.myPlayer.currentTime()) {
  //     self.myPlayer.currentTime(currentTime);
  //   }
  // });
  //
  // self.myPlayer.on('seeked', function(event) {
  //   if (currentTime < self.myPlayer.currentTime()) {
  //     self.myPlayer.currentTime(currentTime);
  //   }
  // });
  self.myPlayer.on('ended', function() {
    self.myPlayer.posterImage.show();
    $(this.posterImage.contentEl()).show();
    $(this.bigPlayButton.contentEl()).show();
    self.myPlayer.currentTime(0);
    self.myPlayer.controlBar.hide();
    self.myPlayer.bigPlayButton.show();
    self.myPlayer.cancelFullScreen();

  });
  self.myPlayer.on('play', function() {
    self.myPlayer.posterImage.hide();
    self.myPlayer.controlBar.show();
    self.myPlayer.bigPlayButton.hide();
  });

};
var vPlayer = new VideoPlayer(),
  video = vPlayer.video,
  textAnimationBlock = document.getElementById('textAnimationBlock');

VideoPlayer.prototype.handleFullScreen = function(event) {
  var self = this;
  console.log('handleFullScreen', event);
  /* Fullscreen */
  lockScreenInLandscape();

  function requestFullscreenVideo() {
    if (videoPlayerWrapper.requestFullscreen) {
      videoPlayerWrapper.requestFullscreen();
    } else {
      video.webkitEnterFullscreen();
    }
  }

  if ('orientation' in screen) {
    screen.orientation.addEventListener('change', function() {
      // Let's automatically request fullscreen if user switches device in landscape mode.
      if (screen.orientation.type.startsWith('landscape')) {
        // Note: It may silently fail in browsers that don't allow requesting
        // fullscreen from the orientation change event.
        // https://github.com/whatwg/fullscreen/commit/e5e96a9da944babf0e246980559cd80a46a300ca
        requestFullscreenVideo();
      } else if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
  }

  function lockScreenInLandscape() {
    if (!('orientation' in screen)) {
      return;
    }

    // Let's force landscape mode only if device is in portrait mode and can be held in one hand.
    if (
      matchMedia('(orientation: portrait) and (max-device-width: 768px)')
        .matches
    ) {
      screen.orientation.lock('landscape').then(function() {
        // When screen is locked in landscape while user holds device in
        // portrait, let's use the Device Orientation API to unlock screen only
        // when it is appropriate to create a perfect and seamless experience.
        listenToDeviceOrientationChanges();
      });
    }
  }

  function listenToDeviceOrientationChanges() {
    if (!('DeviceOrientationEvent' in window)) {
      return;
    }

    var previousDeviceOrientation, currentDeviceOrientation;
    window.addEventListener(
      'deviceorientation',
      function onDeviceOrientationChange(event) {
        // event.beta represents a front to back motion of the device and
        // event.gamma a left to right motion.
        if (Math.abs(event.gamma) > 10 || Math.abs(event.beta) < 10) {
          previousDeviceOrientation = currentDeviceOrientation;
          currentDeviceOrientation = 'landscape';
          return;
        }
        if (Math.abs(event.gamma) < 10 || Math.abs(event.beta) > 10) {
          previousDeviceOrientation = currentDeviceOrientation;
          // When device is rotated back to portrait, let's unlock screen orientation.
          if (previousDeviceOrientation == 'landscape') {
            screen.orientation.unlock();
            window.removeEventListener(
              'deviceorientation',
              onDeviceOrientationChange
            );
          }
        }
      }
    );
  }
};



// };
// var vPlayer = new VideoPlayer (),
//   video = vPlayer.video,
//   textAnimationBlock = document.getElementById ('textAnimationBlock');

//проходим по массиву разбиваем данные по буквам в отдельный span
// VideoPlayer.prototype.divideWordIntoLetters = function (month) {
//   var word = month;
//   var str = word.split ('');
//   $.each (str, function (index) {
//     // идем по массиву
//     $ ('#textAnimate3_2').append (
//       '<span class="charlie" data-animations="textAnimateLetter" data-times="18.' +
//       index +
//       '">' +
//       (this == ' ' ? '&nbsp;' : this) +
//       '</span>'
//     );
//   });
// };
VideoPlayer.prototype.divideWordIntoLettersMs = function (month,id,time,animateClass) {
  var word = month;
  var str = word.split ('');
  var i = 0;
  $.each (str, function (index) {
    // идем по массиву
    if(i === 10){
      time += 0.1;
      i=0;
      time = +time.toFixed(2);
    };

    $(id).append (
      '<span class="charlie" data-animations="' + animateClass + '" data-times=" '+ time +
      i +
      '">' +
      (this == ' ' ? '&nbsp;' : this) +
      '</span>'
    );
    i++;
  });
};

VideoPlayer.prototype.divideWordIntoLetters2 = function (month,id,time,animateClass) {
  var word = month;
  var str = word.split ('');
  var i = 0;
  $.each (str, function (index) {
    // идем по массиву
    if(i*2 >= 10){
      var x =("" + time).split(".")[1];
      if(+x === 9){
        time += 0.1;
        i=0;
        time = +time.toFixed(2);
      }else{
        time += 0.1;
        i=0;
        time = +time.toFixed(2);
      }
    };

    $(id).append (
      '<span class="charlie" data-animations="'+ animateClass + '" data-times=" '+ time +
      (i*2) +
      '">' +
      (this == ' ' ? '&nbsp;' : this) +
      '</span>'
    );
    i++;
  });
};



$(document).ready(function() {

  vPlayer.init();
  $('.vjs-fluid').append(textAnimationBlock);
  textAnimationBlock.classList.add('is-ready');


  // detect iOS full screen
  var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  if(iOS) {
    $('.vjs-fullscreen-control').hide();
  }

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") > -1;
  if (isAndroid) {
    $('.vjs-fullscreen-control').hide();
  }

  // iOS special treatment
  var vidEl = document.getElementsByClassName('vjs-tech')[0];
  vidEl.addEventListener('pause', function() {

    if(iOS) {
      $('.charlie').each(function(){
        if ($(this).hasClass('animated')) {
          $(this).css('-webkit-transform', $(this).css('-webkit-transform'))
        }
      })
    }
  })

  //controlbar at bottom
  function controlbarAtBottom() {
    var height = $('.vjs-control-bar').height();
    $('.vjs-control-bar').css('bottom', '-' + height + 'px');
  }
  controlbarAtBottom();
  window.addEventListener('resize', controlbarAtBottom);
  window.addEventListener('orientationchange', controlbarAtBottom);
});