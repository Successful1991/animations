'use strict';
window.HELP_IMPROVE_VIDEOJS = false;

function VideoPlayer () {
  var videoElem = document.createElement ('VIDEO');
  videoElem.setAttribute ('src', './app/img/sequence1.mp4');
  videoElem.setAttribute ('class', 'video-js vjs-fluid');
  videoElem.setAttribute ('controls', true);
  videoElem.setAttribute ('id', 'js--video-player');
  videoElem.setAttribute("poster", "./app/img/fon.png");
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
  animateFinish();
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
    $ ('.js-name').text (self.data.Sequence1);
    $ ('.js-month').text (self.data.Sequence6 );

    $ ('#animate3 .animate3__line2').append(
      self.data.Sequence7
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


  self.myPlayer.on('ended', function()
  {
    $(".button").addClass("button-opacity");
    self.myPlayer.posterImage.show();
    $(this.posterImage.contentEl()).show();
    $(this.bigPlayButton.contentEl()).show();
    self.myPlayer.currentTime(0);
    self.myPlayer.controlBar.hide();
    self.myPlayer.bigPlayButton.show();
    self.myPlayer.cancelFullScreen();

  });
  self.myPlayer.on('play', function()
  {
    $(".button").removeClass('button-opacity');
    self.myPlayer.posterImage.hide();
    self.myPlayer.controlBar.show();
    self.myPlayer.bigPlayButton.hide();
  });




};
var vPlayer = new VideoPlayer (),
  video = vPlayer.video,
  textAnimationBlock = document.getElementById ('textAnimationBlock');

$(document).ready (function () {

  video.addEventListener ('loadedmetadata', function () {
    vPlayer.init ();

    var videoParent = video.parentElement;
    console.log(videoParent);
    videoParent.insertBefore(textAnimationBlock, vPlayer.video);
  });
  // divideWordIntoLetters ();
  textAnimationBlock.classList.add ('is-ready');

});
