// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

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
  //$scope.mainDishPrice = Dinner.getDishPrice("mainDish");
  //$scope.dessertPrice = Dinner.getDishPrice("dessert");

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.remove = function(id) {
    Dinner.setCourse(id,"");
    if (id == "starter") {
      $scope.starter = "";
      $scope.starterPrice = "";
    }
    else if (id == "mainDish") {
      $scope.mainDish = "";
      $scope.mainDishPrice = "";
    }
    else if (id == "dessert") {
      $scope.dessert = "";
      $scope.dessertPrice = "";
    }
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});