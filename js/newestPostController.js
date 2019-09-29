myApp.controller('NewestPostController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Newest Questions';
    $scope.now = Math.trunc(Date.now()/1000);
    var url = "https://api.stackexchange.com/questions?site=stackoverflow&tagged=android&sort=creation&order=desc&page=1&pagesize=10";
    $http.get(url).then(function(response){
        $scope.posts = response.data.items;
    });
}]);