
dinnerPlannerApp.controller('MenuCtrl', function ($scope,Dinner) {
  $scope.people = Dinner.getNumberOfGuests();

  $scope.starter = Dinner.getCourse("starter");
  $scope.mainDish = Dinner.getCourse("mainDish");
  $scope.dessert = Dinner.getCourse("dessert");
  //$scope.starterPrice = Dinner.getDishPrice("starter");
  //$scope.mainDishPrice = Dinner.getDishPrice("mainDish");
  //$scope.dessertPrice = Dinner.getDishPrice("dessert");

  $scope.totalPrice = Dinner.getTotalMenuPrice();
});