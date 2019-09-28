myApp.controller('MostVotedPostController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Most Voted Posts in Past Week';
    var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=android&sort=votes&fromdate=1569110400&todate=1569628800&order=desc"
    $http.get(url).then(function(response){
        $scope.posts = response.data.items.slice(0, 10);
    });
  }]);