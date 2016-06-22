'use strict';

'use strict';

var app = angular.module('loginApp', []);

app.controller('loginCtrl', function ($scope) {

    $scope.submit = function (e) {
        e.preventDefault();
    }

});