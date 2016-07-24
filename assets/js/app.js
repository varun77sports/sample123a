var app = angular.module('mean', []);
console.log(">>>>>>>>>>>>");
app.controller('register', function($http) {
    var vm = this;

    vm.title = "Register";

    vm.save = function(){
      $http.post('/user/create', vm.user).then(function(response){
            console.log(response);
        });
        window.open('/user/index');
    }

});
