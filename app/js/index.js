'use strict';
window.HELP_IMPROVE_VIDEOJS = false;

function VideoPlayer () {
  var videoElem = document.createElement ('VIDEO');
  videoElem.setAttribute ('src', './app/img/Sequence.mp4');
  videoElem.setAttribute ('class', 'video-js vjs-fluid');
  videoElem.setAttribute ('controls', true);
  videoElem.setAttribute ('id', 'js--video-player');
  this.video = videoElem;
  console.log(videoElem);
}

VideoPlayer.prototype.animationStart = (function (el) {
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
}) (document.createElement ('div'));

VideoPlayer.prototype.animationEnd = (function (el) {
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
}) (document.createElement ('div'));

VideoPlayer.prototype.fetchData = function (uri, callback) {
  var self = this;
  fetch (uri)
    .then (function (response) {
      return response.json ();
    })
    .then (function (myJson) {
      self.data = myJson;
      callback ();
    });
};

VideoPlayer.prototype.init = function () {
  var self = this;
  var video = self.video;
  this.fetchData ('data.json', function callback () {
    console.log(self.data);
    $ ('.js-name').text (self.data.name);
    $ ('.js-month').text (self.data.month );
    $ ('#animate3 .animate3__line1').text (
      self.data.animate3.line1
    );
    $ ('#animate3 .animate3__line2').text (
      self.data.animate3.line2
    );
    $ ('#animate3 .animate3__line3').text (
      self.data.animate3.line3
    );

    $ ('#animate4 .animate4__line1').text (
      self.data.animate4.line1
    );
    $ ('#animate4 .animate4__line2').text (
      self.data.animate4.line2
    );
    CHARLIE.setup (video);
    return;
  });

  videoPlayerWrapper.append (video);
  self.myPlayer = videojs ('js--video-player', {
    controls: true,
    autoplay: false,
    preload: false,
  });

  var currentTime = 0;

  //This example allows users to seek backwards but not forwards.
  //To disable all seeking replace the if statements from the next
  //two functions with myPlayer.currentTime(currentTime);

  self.myPlayer.on ('seeking', function (event) {
    if (currentTime < self.myPlayer.currentTime ()) {
      self.myPlayer.currentTime (currentTime);
    }
  });

  self.myPlayer.on ('seeked', function (event) {
    if (currentTime < self.myPlayer.currentTime ()) {
      self.myPlayer.currentTime (currentTime);
    }
  });
};
var vPlayer = new VideoPlayer (),
  video = vPlayer.video,
  textAnimationBlock = document.getElementById ('textAnimationBlock');

$ (document).ready (function () {
  video.addEventListener ('loadedmetadata', function () {
    vPlayer.init ();

    var videoParent = video.parentElement;
    videoParent.insertBefore (textAnimationBlock, video);
  });
  // divideWordIntoLetters ();
  textAnimationBlock.classList.add ('is-ready');
});