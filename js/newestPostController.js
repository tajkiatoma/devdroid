myApp.controller('NewestPostController', ['$scope', 'httpService', function($scope, httpService) {
    $scope.title = 'Newest Questions';
    httpService.getNewestQuestions().then(function(response){
        _(response.data.items).forEach(function (item) {
            item.fromNow = moment(item.creation_date*1000).fromNow();
        });
        $scope.questions = response.data.items;
    });
}]);