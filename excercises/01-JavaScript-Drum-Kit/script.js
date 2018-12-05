"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

  // VARIABLES
  var keys = document.querySelectorAll(".key"),
    audio = document.querySelectorAll("audio"),
    sound = [],
    key = [];

  audio.forEach(function (element, i) {
    sound[i] = audio[i].getAttribute("src");
    key[i] = audio[i].getAttribute("data-key");
    //console.log(sound[i] + " " + key[i]);
  });

  var playSound = function () {
    var dataKey = this.getAttribute("data-key");
    getSound(dataKey).play();
  }

  var getSound = function (num) {
    var wavFile = sound[key.indexOf(num)];
    var audioToPlay = new Audio(wavFile);
    return audioToPlay;
  }

  keys.forEach(cell => cell.addEventListener("click", playSound));

});