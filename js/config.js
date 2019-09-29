myApp.config(['$routeProvider', '$locationProvider', '$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {
    $locationProvider.hashPrefix('');
    $sceProvider.enabled(false);
    $routeProvider
     .when('/question/:questionId', {
      templateUrl: 'templates/question-thread.html',
      controller: 'QuestionThreadController'
    }).when('/questions/newest', {
        templateUrl: 'templates/newest-questions.html',
        controller: 'NewestPostController'
      }).when('/questions/most-voted', {
        templateUrl: 'templates/most-voted-questions.html',
        controller: 'MostVotedPostController'
      }).when('/questions/bountied', {
        templateUrl: 'templates/bountied-questions.html',
        controller: 'BountiedQuestionController'
      });
  }]);