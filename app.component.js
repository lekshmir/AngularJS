var my_app = angular.module('myapp');

my_app.component('studentDetails', {
    templateUrl: 'student_template.html',
    controllerAs: 'vm',
    bindings: {
        myTitle: '@',
        myList: '<',
        currentStudent: '<'
    },
   
    controller: ['$element', function($element){
        console.log($element);
        this.myname = "new controller";
    }]
});