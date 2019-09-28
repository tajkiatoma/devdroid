myApp.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
     .when('/question/:questionId', {
      templateUrl: 'templates/question-thread.html',
      controller: 'QuestionThreadController'
    });
  }]);