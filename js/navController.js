myApp.controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.$on('$routeChangeSuccess', function() {
        $scope.currentUrl = $location.url();
      });
  }]);
