// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.
   	$scope.search = function() {
      console.log($scope.dishType);
      if ($scope.dishType == "appetizer") {Dinner.setType("starter");}
      else if ($scope.dishType == "main course") {Dinner.setType("mainDish");}
      else if ($scope.dishType == "dessert") {Dinner.setType("dessert");}
   		$scope.status = "Searching...";
   		$scope.dishes = "";
   		Dinner.DishSearch.get({query:$scope.searchText, type:$scope.dishType},function(data){
        $scope.results = data.results;
        $scope.status = "Showing " + data.results.length + " results";
    		for (var i in data.results){
    			$scope.dishes += data.results[i].title + " | ";
    		}
        console.log(data);
   		},function(data){
    		$scope.status = "There was an error";
   		});
 	}
});
