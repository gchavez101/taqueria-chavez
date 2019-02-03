/*global angular*/
/*global $*/

var app = angular.module("taq", []);



app.controller("taqCtrl", ['$scope', function($scope) {
    
    $scope.taco = "Tacos";
    
}]);

app.controller("formCtrl", function($scope, $http) {

    $scope.data = {
        'name': $scope.user,
        'email': $scope.email,
        'subject': $scope.subject,
        'text': $scope.text
    };
    

    $scope.submitForm = function() {
        $http.post('/postEmail', $scope.data).then(function(res) {
            // if success
        $scope.data= {};
        // Notification.success('Email has been sent successfully.');
        }, function(error) {
            // if an error
	    $scope.data= {};
            // Notification.error('Email failed to be sent.');
        });
    }
    
    // $('#myModal').modal('show');

});