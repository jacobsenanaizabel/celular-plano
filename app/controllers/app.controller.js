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
    .when("/register", {
        templateUrl : "app/views/register.html",
        controller: "MainController",
        reloadOnSearch: false
    })
    .when("/registerSuccessfully", {
        templateUrl : "app/views/register-successfully.html",
        controller: "MainController",
        reloadOnSearch: false
    })

});