angular.module("app", []).controller("myController", function($scope, $http) {
 
    
    $http.get('/contactlist').success (function(response){
        
        console.log("I got the data");
        
        $scope.contactlist= response;
        
    });
    
    
});