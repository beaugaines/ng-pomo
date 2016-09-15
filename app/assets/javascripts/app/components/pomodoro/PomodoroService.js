'use strict';

(function () {
  function PomodoroService () {

    /**
    * @desc SongPlayer object
    * @type (Object)
    **/
    var PomodoroTimer = {};

    /**
    *  @desc Buzz object audio file
    *  @type (Object)
    **/
    var currentBuzzObject = null;

    /**
    *  @desc Buzz object audio file
    *  @type (Object)
    **/
    var defaultAudioFile = '/assets/audio/tibetan_bowl.ogg';


    var playTimer = function (audioFile) {
      if (currentBuzzObject) {
        stopTimer();
      }

      currentBuzzObject = new buzz.sound(defaultAudioFile, {

      });

    return PomodoroTimer;
    }


  angular.module('pomodoroTimer')
    .factory('PomodoroService', PomodoroService);
  }
})();
