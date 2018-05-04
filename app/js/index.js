'use strict';
window.HELP_IMPROVE_VIDEOJS = false;

function VideoPlayer() {
  var videoElem = document.createElement('VIDEO');
  videoElem.setAttribute('src', './app/img/BJP_video_final_with_profile_pic.mp4');
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
    $('#animate1-img1').css({"background": "url("+ self.data.img11 +") center no-repeat","background-size": "contain"});
    $('#animate1-img2').css({"background": "url("+ self.data.img12 +") center no-repeat","background-size": "contain"});
    $('#animate1-img3').css({"background": "url("+ self.data.img12 +") center no-repeat","background-size": "contain"});
    $('#animate1-img4').css({"background": "url("+ self.data.img14 +") center no-repeat","background-size": "contain"});
    $('#animate1-text1').text(self.data.text1);
    $('#animate2').text(self.data.text1);
    $('#animate3').css({"background": "url("+ self.data.img2 +") center no-repeat","background-size": "contain"});

      // retargeting video element
    video = document.getElementsByClassName('vjs-tech')[0];
    CHARLIE.setup(video);
    return;
  });


  $ ('.charlie').on (self.animationStart, function (el) {
    if (this.id === 'animate2') {
      self.numberAnimation (self.data.text2, 0, 50, this);
    }
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
    //$("#animate1-img1").addClass("endScreen");
    $("#animate1-img3").addClass("endScreen");
    $("#animate1-img4").addClass("endScreen");
    self.myPlayer.posterImage.show();
    $(this.posterImage.contentEl()).show();
    $(this.bigPlayButton.contentEl()).show();
    self.myPlayer.currentTime(0);
    self.myPlayer.controlBar.hide();
    self.myPlayer.bigPlayButton.show();
    self.myPlayer.cancelFullScreen();

  });
  self.myPlayer.on('play', function() {
    //$("#animate1-img1").removeClass("endScreen");
    $("#animate1-img3").removeClass("endScreen");
    $("#animate1-img4").removeClass("endScreen");
    self.myPlayer.posterImage.hide();
    self.myPlayer.controlBar.show();
    self.myPlayer.bigPlayButton.hide();
  });
  $("#textAnimationBlock a").on('click',function () {
    self.myPlayer.pause();
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
VideoPlayer.prototype.numberAnimation = function (
  amount,
  delay,
  duration,
  parent
) {
  var options = {
    amount: amount,
    delay: delay,
    duration: duration,
  };
  var amount = options.amount;
  var time = amount / options.duration;
  var number = 0;
  var fixed = 0;
  if (amount.toString ().split ('.')[1]) {
    fixed = amount.toString ().split ('.')[1].length;
  }
  requestAnimationFrame (function interval () {
    number += time;
    parent.querySelector ('.number').innerHTML =
      // Math.round(number * 100) / 100;
      number.toFixed (fixed);
    if (number >= amount) {
      document.querySelector ('.number').innerHTML = amount;
      cancelAnimationFrame (interval);
    } else {
      requestAnimationFrame (interval);
    }
  });
};


// };
// var vPlayer = new VideoPlayer (),
//   video = vPlayer.video,
//   textAnimationBlock = document.getElementById ('textAnimationBlock');

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