myApp.controller('MostVotedPostController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Most Voted Posts in Past Week';
    var daysToSubtract = 7;
    var toDate = Math.trunc(Date.now()/1000);
    var fromDate = toDate - (daysToSubtract * 24 * 60 * 60);
    console.log(fromDate);
    console.log(toDate);
    var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=android&sort=votes&fromdate="+fromDate+"&todate="+toDate+"&order=desc"
    $http.get(url).then(function(response){
        $scope.posts = response.data.items.slice(0, 10);
    });

    $scope.grabAnswers = function (questionId) {
        url = "https://api.stackexchange.com/2.2/questions/"+questionId+"/answers?site=stackoverflow&sort=votes&order=desc";
        $http.get(url).then(function(response){
            console.log(response.data);
        });
    }
  }]);