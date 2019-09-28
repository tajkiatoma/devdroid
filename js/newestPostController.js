myApp.controller('NewestPostController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Newest Posts';
    var url = "https://api.stackexchange.com/questions?site=stackoverflow&tagged=android&sort=creation&order=desc";
    $http.get(url).then(function(response){
        $scope.posts = response.data.items.slice(0, 10);
    });
}]);