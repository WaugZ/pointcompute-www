var app = angular.module('myApp', []);
app.controller('myCtr', function($scope) {
    $scope.winnerScore;
    $scope.loserScore;
    $scope.winnerGet;
    $scope.loserLose;
    $scope.winner = "\n";
    $scope.losser = "\n";
    $scope.calculate = function() {
    	$scope.winner = "胜者得分";
    	$scope.losser = "败者失分";
    	var thesholds = new Array(12, 37, 62, 87, 112, 137, 162, 187, 212, 237);
  		var winnerGets = new Array(8, 7, 6, 5, 4, 3, 2, 2, 1, 1, 0);
  		var losserLosses = new Array(8, 10, 13, 16, 20, 25, 30, 35, 40, 45, 50);
  		var gap = Math.abs(parseInt($scope.winnerScore) - parseInt($scope.loserScore));
  		var flag = new Boolean(false);
  		for (t in thesholds) {
  			if(gap > thesholds[t]) {
  				continue;
  			}
  			else {
  				flag = Boolean(true);
  				if(parseInt($scope.winnerScore) > parseInt($scope.loserScore)) {
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
  		if(flag == false) {
  			if(parseInt($scope.winnerScore) > parseInt($scope.loserScore)) {
  					$scope.winnerGet = winnerGets.slice(-1)[0];
  					$scope.loserLose = winnerGets.slice(-1)[0];
  				}
  				else {
  					$scope.winnerGet = losserLosses.slice(-1)[0];
  					$scope.loserLose = losserLosses.slice(-1)[0];
  				}
  		}
    };
    $scope.reset = function() {
    	$scope.winner = "\n";
    	$scope.losser = "\n";
    	$scope.winnerGet = "";
    	$scope.loserLose = "";
    };
});