myApp.directive("questionList", [
  function() {
    return {
      scope: {
        pageTitle: "=",
        questions: "=",
        showVotes: "=",
        showBounty: "="
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
