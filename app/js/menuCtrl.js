
dinnerPlannerApp.controller('MenuCtrl', function ($scope,Dinner) {
  $scope.people = Dinner.getNumberOfGuests();

  //$scope.starter = Dinner.getCourse("starter");
  //$scope.mainDish = Dinner.getCourse("mainDish");
  //$scope.dessert = Dinner.getCourse("dessert");

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

  $scope.totalPrice = $scope.dessertPrice + $scope.mainDishPrice + $scope.starterPrice;
});