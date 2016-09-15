'use strict';

(function () {
  function PomodoroCtrl(PomodoroService) {
    this.pomodoroService = PomodoroService;
  }

  angular.module('pomodoroTimer')
    .controller('PomodoroCtrl', ['PomodoroService', PomodoroCtrl]);
})();
