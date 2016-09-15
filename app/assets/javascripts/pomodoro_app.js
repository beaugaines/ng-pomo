var app = angular.module('pomodoroTimer', ['templates']);

app.controller('TimerCtrl', [
            '$scope', '$http', '$interval',
    function($scope, $http, $interval) {
      $scope.timerStarted = null;
      $scope.countDown = 1500;

      $scope.startTimer = function () {
        if ($scope.timerStarted) {
          $scope.timerStarted = false;
        } else {
          $scope.timerStarted = true;
          $interval(updateCountdown, 1000);
        }
      };

      function updateCountdown() {
        $scope.countDown--;
      }
    }
]);

app.filter('formatTime', function () {
  return function (seconds) {
    var secs = Number.parseFloat(seconds);
    var wholeSeconds = Math.floor(secs);
    var minutes = Math.floor(wholeSeconds / 60);
    var remainingSeconds = wholeSeconds % 60;

    var output = minutes + ':';

    if (remainingSeconds < 10) {
      output += '0';
    }

    output += remainingSeconds;
    return output;
  };

});
