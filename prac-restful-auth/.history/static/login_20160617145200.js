'use strict';

var app = angular.module('loginApp', []);

app.controller('loginCtrl', function ($scope) {
    $scope.submit = function () {
        console.log($scope.uid);
        console.log($scope.upw);
    }
    alert();
});