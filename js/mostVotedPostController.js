myApp.controller('MostVotedPostController', ['$scope', 'httpService', function($scope, httpService) {
    $scope.title = '10 Most Voted Questions in Past Week';
    httpService.getMostVotedQuestions().then(function(response){
        _(response.data.items).forEach(function (item) {
            item.fromNow = moment(item.creation_date*1000).fromNow();
        });
        $scope.questions = response.data.items;
    });
  }]);