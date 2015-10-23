wladder = angular.module('wladder',[]).controller('MainCtrl', [
'$scope',
function($scope){
  $scope.start_word = 'qwert';
  $scope.end_word = 'trewq';
  $scope.attempts = ["1", "2", "3", "4", "5"];
  $scope.distance = function(a, b){
	if(a.length != b.length) return -1;
	var distance = 0;
	for(var i = 0; i < a.length; a++){
		if(a[i] != b[i]){
			distance++;
		}
	}
	return distance;  
  }
  $scope.is_good = function(i){
  	var good = 0;
	switch(i){
		case 0:{
			if($scope.distance($scope.start_word, $scope.attempts[i]) > 0) good = 1;
			break;
		}
		default:{
			if($scope.distance($scope.attempts[i-1], $scope.attempts[i]) > 0) good = 1;
		}
	}
	return good;
  }
}]);
