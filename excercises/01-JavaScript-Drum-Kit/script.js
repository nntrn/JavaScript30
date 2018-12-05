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
    this.classList.add('playing');
  }

  var getSound = function (num) {
    var wavFile = sound[key.indexOf(num)];
    var audioToPlay = new Audio(wavFile);
    return audioToPlay;
  }

  keys.forEach(cell => cell.addEventListener("click", playSound));


   /* KEY DOWN
   ************************* */
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playKeySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playKeySound);

});