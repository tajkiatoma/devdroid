myApp.controller('NewestPostController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Newest Questions';
    var url = "https://api.stackexchange.com/questions?site=stackoverflow&tagged=android&sort=creation&order=desc&page=1&pagesize=10";
    $http.get(url).then(function(response){
        _(response.data.items).forEach(function (item) {
            item.fromNow = moment(item.creation_date*1000).fromNow();
        });
        $scope.posts = response.data.items;
    });
}]);