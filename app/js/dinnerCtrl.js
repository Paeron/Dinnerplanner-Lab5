// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

/*
  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  Dinner.Dish.get({id:Dinner.getCourse("starter")},function(data) {
    $scope.starter = data.title;
  });
  Dinner.Dish.get({id:Dinner.getCourse("mainDish")},function(data) {
    $scope.mainDish = data.title;
  });
  Dinner.Dish.get({id:Dinner.getCourse("dessert")},function(data) {
    $scope.dessert = data.title;
  });
  Dinner.getDishPrice("starter",function(price) {
	$scope.starterPrice = price;
  });
  Dinner.getDishPrice("mainDish",function(price) {
	$scope.mainDishPrice = price;
  });
  Dinner.getDishPrice("dessert",function(price) {
	$scope.dessertPrice = price;
  });

*/
  //$scope.mainDishPrice = Dinner.getDishPrice("mainDish");
  //$scope.dessertPrice = Dinner.getDishPrice("dessert");

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }


  $scope.remove = function(type) {
    console.log(type);
    Dinner.setCourse(type[2],"");
    $scope.totalCost -= type[1];
  }


  $scope.fullMenuObjects = [];
  $scope.fullMenuIds = Dinner.getFullMenu();
  $scope.totalCost = 0;

  for (i in $scope.fullMenuIds){
    console.log($scope.fullMenuIds[i][1]);
    Dinner.Dish.get({id:$scope.fullMenuIds[i][0]},function(data) {
      var rightType = $scope.fullMenuIds[i][1];
      if (data.id == Dinner.getCourse("starter")) rightType = "starter";
      else if (data.id == Dinner.getCourse("mainDish")) rightType = "mainDish";
      else if (data.id == Dinner.getCourse("dessert")) rightType = "dessert";
      $scope.fullMenuObjects.push([data.title, data.pricePerServing, rightType]);
      $scope.totalCost += data.pricePerServing;
    });
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
