var app = angular.module('myApp', []);
app.controller('myCtr', function($scope) {
    $scope.winnerScore;
    $scope.loserScore;
    $scope.winnerGet;
    $scope.loserLose;
    $scope.winner;
    $scope.losser;
    $scope.calculate = function() {
    	$scope.winner = "胜者得分";
    	$scope.losser = "败者失分";
    	var thesholds = new Array(13, 38, 63, 88, 113, 138, 163, 188, 213, 238);
  		var winnerGets = new Array(8, 7, 6, 5, 4, 3, 2, 2, 1, 1, 0);
  		var losserLosses = new Array(8, 10, 13, 16, 20, 25, 30, 35, 40, 45, 50);
  		var gap = Math.abs($scope.winnerScore - $scope.loserScore);
  		for (t in thesholds) {
  			if(gap > thesholds[t]) {
  				continue;
  			}
  			else {
  				if($scope.winnerScore > $scope.loserScore) {
  					$scope.winnerGet = winnerGets[t];
  					$scope.loserLose = winnerGets[t];
  				}
  				else {
  					$scope.winnerGet = losserLosses[t];
  					$scope.loserLose = losserLosses[t];
  				}
  				break;
  			}
  		}
    };
    $scope.reset = function() {
    	$scope.winner = "";
    	$scope.losser = "";
    	$scope.winnerGet = "";
    	$scope.loserLose = "";
    };
});