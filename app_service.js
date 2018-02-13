var my_app = angular.module('myapp');

my_app.service('AppService', ['$http', '$q', function($http, $q){
    // var students = [{}];

    this.getStudents = function(){
        var defer = $q.defer();
        $http.get('/students.json')
        .then(function(result){
            var students = result.data.map(function(item){
                item.seniority = item.age > 10 ? "Senior" : "Junior";
                return item;
            });
            defer.resolve(students);
        });
        return defer.promise;
        // return $http.get('/students.json');
    };
    
}]);