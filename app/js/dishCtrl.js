// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  $scope.id = String(window.location.hash.split('/')[2]);

  Dinner.Dish.get({id:$scope.id},function(data) {
    $scope.dishName = data.title;
    console.log(data);
    $scope.dishData = data.extendedIngredients;
  });

  $scope.confirmDish = function() {
  	var type = Dinner.getType();
  	console.log(type);
  	Dinner.setCourse(type,$scope.id);
  	console.log(Dinner.getCourse(type));
  }

});