// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.
   	$scope.search = function() {
   		$scope.status = "Searching...";
   		$scope.dishes = "";
   		Dinner.DishSearch.get({query:$scope.searchText},function(data){
    		$scope.status = "Showing " + data.results.length + " results";
    		for (var i in data.results){
    			$scope.dishes += data.results[i].title + " | ";
    		}
   		},function(data){
    		$scope.status = "There was an error";
   		});
 	}
});