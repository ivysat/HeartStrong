var app = angular.module('myApp', []);

app.controller('registerCtrl', function($scope, $http){
    $http.get("http://sonjoseph.website/heartstrong_backend/connect.php").then(function(res){
        
    });
    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }
    $scope.register = function(){
        // use $.param jQuery function to serialize data from JSON
        var data = $.param({
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            age: $scope.age,
            address: $scope.address
        });
        $http.post("http://sonjoseph.website/heartstrong_backend/register.php", data, config).then(function(res){
            
        });
    }
});