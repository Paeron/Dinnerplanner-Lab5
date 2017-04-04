// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
  
  var numberOfGuest = 2;


  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
  }

  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details


    var SpoonacularApiKey = 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB';
    var numberOfGuests = 1;
    var showDish = [];
    var dishes = [];
    var starter = "";
    var mainDish = "";
    var dessert = "";
    var localDishes = [];
    var getDish_lastCall;
    var type = "";

    // SET starter / mainDish / dessert
    this.setCourse = function(type, value){
        if (type == "starter") starter = value;
        if (type == "mainDish") mainDish = value;
        if (type == "dessert") dessert = value;
    }
    this.setType = function(ttype){
        type = ttype;
    }
    this.getType = function(){
        return type;
    }
    // GET starter / mainDish / dessert
    this.getCourse = function(type){
        if (type == "starter") return starter;
        if (type == "mainDish") return mainDish;
        if (type == "dessert") return dessert;
    }

    // CHECK if starter / mainDish / dessert is non-empty
    this.issetCourse = function(type){
        if (type == "starter") return (starter == "" ? false: true);
        if (type == "mainDish") return (mainDish == "" ? false: true);
        if (type == "dessert") return (dessert == "" ? false: true);
    }

    // Tells what dish-image was clicked last in VIEW-3
    this.getShowDish = function(){
        return showDish;
    }

    // Sets last clicked dish-image in VIEW-3
    this.setShowDish = function(id, type){
        showDish = [id, type];
        notifyObservers();
    }

    // Updates NumberOfGuests – from view to model
    this.updateNumberOfGuests = function(){
        numberOfGuests = document.getElementById("numberOfGuests").val();
    }


    this.setNumberOfGuests = function(num) {
        //TODO Lab 2
        numberOfGuests = num;
    }

    // should return 
    this.getNumberOfGuests = function() {
        //TODO Lab 2
        return numberOfGuests;
    }

    // Returns the dish that is on the menu for selected type 
    this.getSelectedDish = function(type) {
        //TODO Lab 2
        if (type == "starter" && starter) return starter; 
        if (type == "mainDish" && mainDish) return mainDish;
        if (type == "dessert" && dessert) return dessert;
        return false;
    }

    // Returns all the dishes on the menu.
    this.getFullMenu = function() {
        //TODO Lab 2
        var allDishes = [];
        if (starter) allDishes = allDishes.concat(starter);
        if (mainDish) allDishes = allDishes.concat(mainDish);
        if (dessert) allDishes = allDishes.concat(dessert);
        return ""+starter+", "+mainDish+", "+dessert;//allDishes;
    }

    // Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function() {
        //TODO Lab 2
        var allIngredients = [];
        if (starter){
            this.getDishIngredients(starter, function(dishIngredients){
                allIngredients.concat(dishIngredients);
            });
        }
        if (mainDish){
            this.getDishIngredients(mainDish, function(dishIngredients){
                allIngredients.concat(dishIngredients);
            });
        }
        if (dessert){
            this.getDishIngredients(dessert, function(dishIngredients){
                allIngredients.concat(dishIngredients);
            });
        }
        return  allIngredients;
    }

    // Returns ingredients for a dish
    this.getDishIngredients = function(id, cb){
        $.ajax( {
           url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',
           headers: {
             'X-Mashape-Key': SpoonacularApiKey
           },
           success: function(data) {
             cb(data.extendedIngredients);
           },
           error: function(data) {
             console.log(data)
           }
        }) 
    }

    // Summs prices of ingredients of given dish
    this.getDishPrice = function(type,cb) {
        if (this.issetCourse(type)) {
           this.Dish.get({id:this.getCourse(type)},function(data){
                var ings = data.extendedIngredients;
                var sum = 0;
                for (i in ings) sum += ings[i].amount;
                cb(sum);
            }); 
        }
        else cb("");
        
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function() {
        //TODO Lab 2
        var ings = this.getAllIngredients();
        var sum = 0;
        for (i in ings){
            sum = sum + ings[i].price;
        }
        console.log("PRICE :" + sum);
        return sum;
        
    }

    // Adds the passed dish to the menu. If the dish of that type already exists on the menu
    // it is removed from the menu and the new one added.
    this.addDishToMenu = function(dish) { // params: dish[id, type]
        //TODO Lab 2 
        if (dish[1]=="starter") starter = dish[0];
        if (dish[1]=="mainDish") mainDish = dish[0];
        if (dish[1]=="dessert") dessert = dish[0];
    }

    // Removes dish from menu
    this.removeDishFromMenu = function(id) {
        //TODO Lab 2
        if (starter == id) starter = "";
        if (mainDish == id) mainDish = "";
        if (dessert == id) dessert = "";
    }

    // function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    // you can use the filter argument to filter out the dish by name or ingredient (use for search)
    // if you don't pass any filter all the dishes will be returned
    this.DishSearch = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',{},{
      get: {
        headers: {
          'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
        }
      }
    });
    this.Dish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/information',{},{
     get: {
        headers: {
          'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
        }
      }
    });


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});