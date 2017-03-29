
dinnerPlannerApp.controller('MenuCtrl', function ($scope,Dinner) {
  $scope.people = Dinner.getNumberOfGuests();

  $scope.starter = Dinner.getCourse("starter");
  $scope.mainDish = Dinner.getCourse("mainDish");
  $scope.dessert = Dinner.getCourse("dessert");
  Dinner.getDishPrice("starter",function(price) {
  $scope.starterPrice = price;
  });
  Dinner.getDishPrice("mainDish",function(price) {
  $scope.mainDish = price;
  });
  Dinner.getDishPrice("dessert",function(price) {
  $scope.dessert = price;
  });

  $scope.totalPrice = Dinner.getTotalMenuPrice();
});