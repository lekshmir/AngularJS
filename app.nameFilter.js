var my_app = angular.module('myapp');

my_app.filter('nameFilter',[function(){

    return function(value, greeting){
        if (value && value.length >= 2)
        {
            return value.substr(0,2).toUpperCase();
        }
        else
        {
            return "Error";
        }
    }
}]);