var app = angular.module('app', ['ngRoute'])
.config(function( $routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'app/views/home.html',
        controller: "MainController",
        reloadOnSearch: false
    })
    .when("/plans/:type", {
        templateUrl : "app/views/plans.html",
        controller: "MainController",
        reloadOnSearch: false
    })

});