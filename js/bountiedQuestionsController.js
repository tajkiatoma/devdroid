myApp.controller('BountiedQuestionController', ['$scope', 'httpService', function($scope, httpService) {
    $scope.title = 'Bountied and 10 Newest Unanswered Questions';
    httpService.getBountiedQuestions().then(function(response){
        var bountiedQuestions = _.orderBy(response.data.items, ['bounty_amount', 'answer_count'], ['desc', 'asc']);
        httpService.getUnansweredQuestions().then(function (response) {
            var unansweredQuestions = _.orderBy(response.data.items, ['answer_count'], ['asc']);
            var allQuestions = _.uniqBy(bountiedQuestions.concat(unansweredQuestions), 'question_id');
            _(allQuestions).forEach(function (item) {
                item.fromNow = moment(item.creation_date*1000).fromNow();
            });
            $scope.questions = allQuestions;
        })
    });
}]);