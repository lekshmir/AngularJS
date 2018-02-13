var my_app = angular.module('myapp',[]);
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
