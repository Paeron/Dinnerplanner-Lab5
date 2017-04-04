
dinnerPlannerApp.controller('PrintCtrl', function ($scope,Dinner) {

  Dinner.Dish.get({id:Dinner.getCourse("starter")},function(data) {
    $scope.starter = "Starter: " + data.title;
    $scope.starterText = ""
    for (item in data.analyzedInstructions[0].steps) {
      $scope.starterText += data.analyzedInstructions[0].steps[item].step + "\n";
    }
  });
  Dinner.Dish.get({id:Dinner.getCourse("mainDish")},function(data) {
    $scope.mainDish = "Main course: " + data.title;
    $scope.mainDishText = ""
    for (item in data.analyzedInstructions[0].steps) {
      $scope.mainDishText += data.analyzedInstructions[0].steps[item].step + "\n";
    }
  });
  Dinner.Dish.get({id:Dinner.getCourse("dessert")},function(data) {
    $scope.dessert = "Dessert: " + data.title;
    $scope.dessertText = ""
    for (item in data.analyzedInstructions[0].steps) {
      $scope.dessertText += data.analyzedInstructions[0].steps[item].step + "\n";
    }
  });

});
