'use strict';
window.HELP_IMPROVE_VIDEOJS = false;

function VideoPlayer() {
  var videoElem = document.createElement('VIDEO');
  videoElem.setAttribute('src', './app/img/EMPTY.HDFC(Without arrow).mp4');
  videoElem.setAttribute('class', 'video-js vjs-fluid');
  videoElem.setAttribute('webkit-playsinline', '');
  videoElem.setAttribute('playsinline', '');
  videoElem.setAttribute('id', 'js--video-player');
  this.video = videoElem;
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


VideoPlayer.prototype.init = function() {
  var self = this;
  var video = self.video;
  this.fetchData('data.json', function callback() {
    $('#animate1 .animate1__line1__name').text(self.data.text1);
    // $('#animate2__line1__loss').text(self.data.Horizon);
    self.divideWordIntoLetters (self.data.RECO_TYPE,"#animate2__line1__text1",12.1,"fadeInUp");
    self.divideWordIntoLetters (self.data.SECURITY_NM,"#animate2__line1__text2",12.4,"fadeInUp");
    self.divideWordIntoLetters (self.data.Horizon,"#animate2__line1__loss",12.7,"fadeInUp");
    self.divideWordIntoLetters (self.data.POTENTIAL_UPSIDE,"#animate2__line2__text2",13.1,"fadeInUp");
    self.divideWordIntoLetters (self.data.CMP,"#animate2__line3__amount",13.5,"fadeInUp");
    self.divideWordIntoLetters (self.data.CALL_DATE,".animate2__data",14.5,"fadeInUp");
    self.divideWordIntoLetters (self.data.TARGET_PRICE,"#animate2__line4__amount",14.1,"fadeInUp");
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

  self.myPlayer.on('seeking', function(event) {
    if (currentTime < self.myPlayer.currentTime()) {
      self.myPlayer.currentTime(currentTime);
    }
  });

  self.myPlayer.on('seeked', function(event) {
    if (currentTime < self.myPlayer.currentTime()) {
      self.myPlayer.currentTime(currentTime);
    }
  });
  self.myPlayer.on('ended', function() {
    $('#animate2__line1__text1').addClass("endScreen");
    $('#animate2__line1__text2').addClass("endScreen");
    $('#animate2__line1__loss').addClass("endScreen");
    $('#animate2__line2__text1').addClass("endScreen");
    $('#animate2__line2__text2').addClass("endScreen");
    $('#animate2__line3').addClass("endScreen");
    $('#animate2__line3__amount').addClass("endScreen");
    $('.animate2__data').addClass("endScreen");
    $('#animate2__line4').addClass("endScreen");
    $('#animate2__line4__amount').addClass("endScreen");
    $('#animate2__button1').addClass("endScreen");
    $('#animate2__button2').addClass("endScreen");
    $('#animate2__button3').addClass("endScreen");
    $('#animate__screen').addClass("endScreen");

    self.myPlayer.posterImage.show();
    $(this.posterImage.contentEl()).show();
    $(this.bigPlayButton.contentEl()).show();
    self.myPlayer.currentTime(0);
    self.myPlayer.controlBar.hide();
    self.myPlayer.bigPlayButton.show();
    self.myPlayer.cancelFullScreen();

  });
  self.myPlayer.on('play', function() {
    $('#animate2__line1__text1').removeClass("endScreen");
    $('#animate2__line1__text2').removeClass("endScreen");
    $('#animate2__line1__loss').removeClass("endScreen");
    $('#animate2__line2__text1').removeClass("endScreen");
    $('#animate2__line2__text2').removeClass("endScreen");
    $('#animate2__line3').removeClass("endScreen");
    $('#animate2__line3__amount').removeClass("endScreen");
    $('.animate2__data').removeClass("endScreen");
    $('#animate2__line4').removeClass("endScreen");
    $('#animate2__line4__amount').removeClass("endScreen");
    $('#animate2__button1').removeClass("endScreen");
    $('#animate2__button2').removeClass("endScreen");
    $('#animate2__button3').removeClass("endScreen");
    $('#animate__screen').removeClass("endScreen");

    self.myPlayer.posterImage.hide();
    self.myPlayer.controlBar.show();
    self.myPlayer.bigPlayButton.hide();
  });
  $("#textAnimationBlock a").on('click',function () {
    self.myPlayer.pause();
  });
};

$('#bitt').click(function () {
  $('#animate2__line1__text1').addClass("fadeInDown");
  $('#animate2__line1__text2').addClass("fadeInDown");
  $('#animate2__line1__loss').addClass("fadeInDown");
  $('#animate2__line2__text1').addClass("animate-zoom");
  $('#animate2__line2__text2').addClass("animate-zoom");
  $('#animate2__line3').addClass("fadeInLeft");
  $('#animate2__line3__amount').addClass("fadeInLeft");
  $('.animate2__data').addClass("fadeInLeft");
  $('#animate2__line4').addClass("fadeInLeft");
  $('#animate2__line4__amount').addClass("fadeInLeft");
  $('#animate2__button1').addClass("animate-zoom");
  $('#animate2__button2').addClass("animate-zoom");
  $('#animate2__button3').addClass("animate-zoom");
});

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

VideoPlayer.prototype.divideWordIntoLetters = function (month,id,time,animateClass) {
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
    $('.vjs-playing').hide();
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