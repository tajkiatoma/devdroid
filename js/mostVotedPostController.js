myApp.controller('MostVotedPostController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Most Voted Questions in Past Week';
    var daysToSubtract = 7;
    var toDate = Math.trunc(Date.now()/1000);
    var fromDate = toDate - (daysToSubtract * 24 * 60 * 60);
    var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=android&sort=votes&fromdate="+fromDate+"&todate="+toDate+"&order=desc&page=1&pagesize=10";
    $http.get(url).then(function(response){
        _(response.data.items).forEach(function (item) {
            item.fromNow = moment(item.creation_date*1000).fromNow();
        });
        $scope.questions = response.data.items;
    });
  }]);