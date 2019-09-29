myApp.controller('BountiedQuestionController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Bountied Unanswered Questions';
    $scope.now = Math.trunc(Date.now()/1000);
    var daysToSubtract = 7;
    var toDate = Math.trunc(Date.now()/1000);
    var fromDate = toDate - (daysToSubtract * 24 * 60 * 60);
    var url = "https://api.stackexchange.com/2.2/questions/featured?site=stackoverflow&tagged=android&fromdate="+fromDate+"&todate="+toDate+"&sort=activity&order=desc";
    $http.get(url).then(function(response){
        $scope.posts = _.orderBy(response.data.items, ['bounty_amount', 'answer_count'], ['desc', 'asc']);
    });
}]);