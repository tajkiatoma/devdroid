myApp.controller("QuestionThreadController", [
  "$scope",
  "httpService",
  "$routeParams",
  function($scope, httpService, $routeParams) {
    httpService.getQuestion($routeParams.questionId).then(function(response) {
      var question = response.data.items[0];
      question.askedFromNow = moment(question.creation_date * 1000).fromNow();
      question.editedFromNow = moment(
        question.last_activity_date * 1000
      ).fromNow();
      $scope.question = question;
    });
    httpService.getAnswers($routeParams.questionId).then(function(response) {
      _(response.data.items).forEach(function(item) {
        item.askedFromNow = moment(item.creation_date * 1000).fromNow();
        item.editedFromNow = moment(item.last_activity_date * 1000).fromNow();
      });
      $scope.answers = response.data.items;
    });
  }
]);
