var app = angular.module('mean', []);

app.controller('register', function($http) {
    var vm = this;

    vm.title = "Register";

    vm.save = function(){
        $http.post('/register', vm.user).then(function(response){
            console.log(response);
        });
    }

});
