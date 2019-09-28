myApp.config(['$routeProvider', '$locationProvider', '$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {
    $locationProvider.hashPrefix('');
    $sceProvider.enabled(false);
    $routeProvider
     .when('/question/:questionId', {
      templateUrl: 'templates/question-thread.html',
      controller: 'QuestionThreadController'
    });
  }]);