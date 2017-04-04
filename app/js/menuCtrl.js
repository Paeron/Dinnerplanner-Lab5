
dinnerPlannerApp.controller('MenuCtrl', function ($scope,Dinner) {
  $scope.people = Dinner.getNumberOfGuests();

  $scope.dessertPrice = 0;
  $scope.starterPrice = 0;
  $scope.mainDishPrice = 0;
  $scope.totalPrice = Number(0);
  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }


  Dinner.Dish.get({id:Dinner.getCourse("starter")},function(data) {
    $scope.starter = data.title;
    $scope.starterPrice = data.pricePerServing;
    $scope.totalPrice += Number(data.pricePerServing);
  });
  Dinner.Dish.get({id:Dinner.getCourse("mainDish")},function(data) {
    $scope.mainDish = data.title;
    $scope.mainDishPrice = data.pricePerServing;
    $scope.totalPrice += Number(data.pricePerServing);
  });
  Dinner.Dish.get({id:Dinner.getCourse("dessert")},function(data) {
    $scope.dessert = data.title;
    $scope.dessertPrice = data.pricePerServing;
    $scope.totalPrice += Number(data.pricePerServing);
  });

});
