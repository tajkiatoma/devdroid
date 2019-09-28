myApp.controller('QuestionThreadController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.questionId = $routeParams.questionId;
    var url = "https://api.stackexchange.com/2.2/questions/"+$routeParams.questionId+"/answers?site=stackoverflow&sort=votes&order=desc&filter=withbody";
        $http.get(url).then(function(response){
            $scope.answers = response.data.items;
        });
}]);