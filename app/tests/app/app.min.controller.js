var app = angular.module('app',[]);

app.controller('MainController', function($rootScope, $scope, $http, $httpBackend){

    $scope.platforms = [];
    $rootScope.plans = [];
    $rootScope.planChoose;

    var PLAIN_PATH = 'http://private-59658d-celulardireto2017.apiary-mock.com';
    
    var endpoints = {
        platforms : PLAIN_PATH + "/plataformas",
        tablet: PLAIN_PATH + "/planos/TBT01",        
        computer:PLAIN_PATH + "/planos/CPT02",
        wifi: PLAIN_PATH + "/planos/WF03"
    };

    $scope.init = function(){
        $scope.getPlatforms().then(function(response) {
            _.each(response.platformList, function(platform){
                $scope.platforms.push(platform);
            })
        });
    };

    $scope.getPlatforms = function () {
        return $http
        .get(endpoints.platforms)
        .then(function(response) {
            _.each(response.data.plataformas, function(platform){
                platform.descricao = platform.descricao.replace("|"," ").toLowerCase();
                platform.nome = platform.nome.toLowerCase();
            })
            return response.data;
        }, function(e) {
            console.log(e, "can not get data.");
        });
    };

    $scope.plansDetail = function(platform){
        $scope.getPlain(platform).then(function(response) {          
            response.data.forEach(function(element) {
                $rootScope.plans.push(element);
            }, this);
        });
    };

    $scope.getPlain = function (platformChoose) {
        switch(platformChoose){
            case 'computador':
                return $http
                .get(endpoints.computer)
                .then(function(response) {
                    return response.data;
                }, function(e) {
                    console.log(e, "can not get data.");
                });
            case 'tablet':
                return $http
                .get(endpoints.tablet)
                .then(function(response) {
                    return response.data;
                }, function(e) {
                    console.log(e, "can not get data.");
                });
            case 'wi-fi':
                return $http
                .get(endpoints.wifi)
                .then(function(response) {
                    return response.data;
                }, function(e) {
                    console.log(e, "can not get data.");
                });
        }
    };
});