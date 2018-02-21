var app = angular.module('myApp', []);

app.controller('registerCtrl', function($scope, $http){
    $http.get("http://sonjoseph.website/heartstrong_backend/connect.php").then(function(res){
        console.log("good!");
    });
});