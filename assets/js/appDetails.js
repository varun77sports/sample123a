var appDetails = angular.module('meanDetails', []);
console.log(">>>>>>>>>>>>");
app.controller('registerDetails', function($http) {
    var vm = this;

    vm.title = "User Details";

    vm.save = function(){
      $http.post('/user/create', vm.user).then(function(response){
            console.log(response);
        });
      //  window.open('/user/create');
    }

});
