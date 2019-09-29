myApp.controller('BountiedQuestionController', ['$scope', 'httpService', function($scope, httpService) {
    $scope.title = 'Bountied Questions';
    httpService.getBountiedQuestions().then(function(response){
        _(response.data.items).forEach(function (item) {
            item.fromNow = moment(item.creation_date*1000).fromNow();
        });
        $scope.questions = _.orderBy(response.data.items, ['bounty_amount', 'answer_count'], ['desc', 'asc']);
    });
}]);