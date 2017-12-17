app.service('MainService', function($http,$q, $log) {
    
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
            return response.data;
        }, function(e) {
            console.log(e, "can not get data.");
        });
    };

});