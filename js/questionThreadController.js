myApp.controller('QuestionThreadController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    var questionUrl = "https://api.stackexchange.com/2.2/questions/"+$routeParams.questionId+"?site=stackoverflow&filter=withbody";
    $http.get(questionUrl).then(function(response){
        var question = response.data.items[0];
        question.askedFromNow = moment(question.creation_date*1000).fromNow();
        question.editedFromNow = moment(question.last_activity_date*1000).fromNow();
        $scope.question = question;
    });
    var answerUrl = "https://api.stackexchange.com/2.2/questions/"+$routeParams.questionId+"/answers?site=stackoverflow&sort=votes&order=desc&filter=withbody";
        $http.get(answerUrl).then(function(response){
            _(response.data.items).forEach(function (item) {
                item.askedFromNow = moment(item.creation_date*1000).fromNow();
                item.editedFromNow = moment(item.last_activity_date*1000).fromNow();
            });
            $scope.answers = response.data.items;
        });
}]);