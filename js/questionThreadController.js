myApp.controller('QuestionThreadController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    var questionUrl = "https://api.stackexchange.com/2.2/questions/"+$routeParams.questionId+"?site=stackoverflow&filter=withbody";
    $http.get(questionUrl).then(function(response){
        var question = response.data.items[0];
        question.fromNow = moment(question.creation_date*1000).fromNow();
        $scope.question = question;
    });
    var answerUrl = "https://api.stackexchange.com/2.2/questions/"+$routeParams.questionId+"/answers?site=stackoverflow&sort=votes&order=desc&filter=withbody";
        $http.get(answerUrl).then(function(response){
            $scope.answers = response.data.items;
        });
}]);