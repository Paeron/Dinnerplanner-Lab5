
dinnerPlannerApp.controller('MenuCtrl', function ($scope,Dinner) {
  $scope.people = Dinner.getNumberOfGuests();

  $scope.dessertPrice = 0;
  $scope.starterPrice = 0;
  $scope.mainDishPrice = 0;
  $scope.totalPrice = Number(0);

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
    console.log(price);
    $scope.starterPrice = price;
    $scope.totalPrice += Number(price);
  });
  Dinner.getDishPrice("mainDish",function(price) {
    console.log(price);
    $scope.mainDishPrice = price;
    $scope.totalPrice += Number(price);
  });
  Dinner.getDishPrice("dessert",function(price) {
    console.log(price);
    $scope.dessertPrice = price;
    $scope.totalPrice += Number(price);
  });
});