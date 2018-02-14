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
        // console.log($element);
        this.myname = "new controller";
    }]
});

my_app.component('home',{
    template: '<div><h3>Home</h3><p>This is home page</p></div>'
});

my_app.component('about',{
    template: '<div><h3>About</h3><p>This is about page</p></div>'
});