// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  $scope.starter = Dinner.getCourse("starter");
  $scope.mainDish = Dinner.getCourse("mainDish");
  $scope.dessert = Dinner.getCourse("dessert");
  //$scope.starterPrice = Dinner.getDishPrice("starter");
  //$scope.mainDishPrice = Dinner.getDishPrice("mainDish");
  //$scope.dessertPrice = Dinner.getDishPrice("dessert");

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});