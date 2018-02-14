var my_app = angular.module('myapp',['ui.router']);

my_app.config(['$stateProvider', '$urlRouterProvider', 
function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name: 'home',
        url: '/home',
        template: '<div><h3>Home</h3><p>This is home page</p></div>'
    });
    $stateProvider.state({
        name: 'about',
        url: '/about',
        template: '<div><h3>About</h3><p>This is about page</p></div>'
    });
}]);
// Creating controller0
my_app.controller('MyCtrl',['$scope', function($scope){
    $scope.myval = "Hello";

    $scope.onClick = function(){
        $scope.myval = "changed";
        alert('Clicked');
    }
}]);

// Controller 1 for student details
my_app.controller('MyCtrl1',['$scope', 'AppService', function($scope, AppService){
    
    AppService.getStudents()
                .then(function(result){
                    // $scope.students = result.data;
                    $scope.students = result;
                });

    $scope.onViewDetailsClick = function(selected){
        
        $scope.selectedstu = selected;

    };
}]);
