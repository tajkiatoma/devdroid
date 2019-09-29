myApp.directive("questionList", [
  function() {
    return {
      scope: {
        pageTitle: "=",
        questions: "="
      },
      templateUrl: "templates/question-list.html",
      controller: [
        "$scope",
        function($scope) {
          
        }
      ]
    };
  }
]);
