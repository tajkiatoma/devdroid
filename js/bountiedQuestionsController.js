myApp.controller('BountiedQuestionController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Bountied Unanswered Questions';
    var daysToSubtract = 7;
    var toDate = Math.trunc(Date.now()/1000);
    var fromDate = toDate - (daysToSubtract * 24 * 60 * 60);
    var url = "https://api.stackexchange.com/2.2/questions/featured?site=stackoverflow&tagged=android&fromdate="+fromDate+"&todate="+toDate+"&sort=activity&order=desc";
    $http.get(url).then(function(response){
        _(response.data.items).forEach(function (item) {
            item.fromNow = moment(item.creation_date*1000).fromNow();
        });
        $scope.posts = _.orderBy(response.data.items, ['bounty_amount', 'answer_count'], ['desc', 'asc']);
    });
}]);