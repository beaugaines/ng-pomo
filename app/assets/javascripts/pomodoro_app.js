var app = angular.module('pomodoroTimer', ['templates']);

app.controller('TimerCtrl', [
            '$scope', '$http', '$interval',
    function($scope, $http, $interval) {

      $scope.sessionCount = 0;


      $scope.startTimer = function (seconds) {
        $scope.countDown = Number(seconds);
        $scope.timerRunning = true;
        timer = $interval(updateCountdown, 1000);
      };

      function updateCountdown() {
        $scope.countDown--;

        if ($scope.countDown === 0) {
          $interval.cancel(timer);
          timer = undefined;
          $scope.timerRunning = false;

          if ($scope.shortBreak || $scope.longBreak) {
            $scope.shortBreak = false;
            $scope.longBreak = false;
            $scope.working = true;
          } else {
            $scope.sessionCount++;
            $scope.working = false;
            if ($scope.sessionCount % 4 === 0) {
              $scope.longBreak = true;
            } else {
              $scope.shortBreak = true;
            }
          }
        }
      }

      $scope.pauseTimer = function () {
        // how to pause $interval?
      };

      $scope.resetTimer = function () {
        $scope.timerRunning = null;
        $scope.countDown = 1500;
        $interval.cancel(timer);
        timer = undefined;
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


app.directive('countdownTimer', function () {
  return {
    restrict: 'E',
    scope: {
      count: "="
    },
    template: "<div class='timer'>{{count | formatTime}}</div>",
    // link: function (scope, element, attrs) {
    //   scope.$watch('count', function (newVal, old) {
    //     console.log(newVal);
    //   });
    // }
  };
});
