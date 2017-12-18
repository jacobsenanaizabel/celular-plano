app.service('MainService', function($http,$q, $log, PlatformModel, PlanModel) {
    
    var self = this;
    var defer = $q.defer(); 
    var PLAIN_PATH = 'http://private-59658d-celulardireto2017.apiary-mock.com';
    
    var endpoints = {
        platforms : PLAIN_PATH + "/plataformas",
        tablet: PLAIN_PATH + "/planos/TBT01",        
        computer:PLAIN_PATH + "/planos/CPT02",
        wifi: PLAIN_PATH + "/planos/WF03"
    };
    self.getPlatforms = function () {
        return $http
        .get(endpoints.platforms)
        .then(function(response) {
            _.each(response.data.plataformas, function(platform){
                platform.descricao = platform.descricao.replace("|"," ").toLowerCase();
                platform.nome = platform.nome.toLowerCase();
            })
            return new PlatformModel(response.data);
        }, function(e) {
            console.log(e, "can not get data.");
        });
    };

    self.getPlain = function (platformChoose) {
        switch(platformChoose){
            case 'computador':
                return $http
                .get(endpoints.computer)
                .then(function(response) {
                    return new PlanModel(response.data);
                }, function(e) {
                    console.log(e, "can not get data.");
                });
            case 'tablet':
                return $http
                .get(endpoints.tablet)
                .then(function(response) {
                    return new PlanModel(response.data);
                }, function(e) {
                    console.log(e, "can not get data.");
                });
            case 'wi-fi':
                return $http
                .get(endpoints.wifi)
                .then(function(response) {
                    return new PlanModel(response.data);
                }, function(e) {
                    console.log(e, "can not get data.");
                });
        }
    };
});