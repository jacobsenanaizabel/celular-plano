describe('Wifi plans site', function(){

    beforeEach(module('app'))

    describe('Testing Main Page', function(){
        var scope, ctrl, httpBackend, http;

        var respond = 
        {
            "plataformas": [
                {
                    "sku": "TBT01",
                    "nome": "Tablet",
                    "descricao": "Chip para navegar à vontade"
                },
                {
                    "sku": "CPT02",
                    "nome": "Computador",
                    "descricao": "Seu computador|Sempre conectado"
                },
                {
                    "sku": "WF03",
                    "nome": "WI-FI",
                    "descricao": "Internet WI-FI para|casa toda"
                }
            ]
        };

        beforeEach(inject(function($controller, $rootScope, $httpBackend, $http){
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            httpBackend.when("GET", "http://private-59658d-celulardireto2017.apiary-mock.com/plataformas ").respond(respond);
            $controller('MainController', {
                $scope: scope,
                $http: $http
            });
        }))

        it('Should call all main platforms', function(){
            scope.init();
            expect(scope.platforms).toBeDefined();
        });

    });

    
    describe('Getting Plans', function(){
        var scope, ctrl, httpBackend, http;
        var respond = 
        {
            "planos": [
                {
                    "sku": "TI00001NA_NOVA_LINHA",
                    "franquia": "1GB",
                    "valor": "21,50",
                    "ativo": true
                },
                {
                    "sku": "TI00002NA_NOVA_LINHA",
                    "franquia": "2GB",
                    "valor": "59,90",
                    "ativo": true
                },
                {
                    "sku": "TI00003NA_NOVA_LINHA",
                    "franquia": "4GB",
                    "valor": "72,60",
                    "ativo": true
                },
                {
                    "sku": "TI00004NA_NOVA_LINHA",
                    "franquia": "6GB",
                    "valor": "81,10",
                    "ativo": false
                },
                {
                    "sku": "TI00005NA_NOVA_LINHA",
                    "franquia": "10GB",
                    "valor": "105,80",
                    "ativo": true
                }
            ]
        }

        
        beforeEach(inject(function($controller, $rootScope, $httpBackend, $http){
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            httpBackend.when("GET", "http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01").respond(respond);
            $controller('MainController', {
                $scope: scope,
                $http: $http
            });
        }))

        it('Should call all plans by plataform selected', function(){
            scope.plansDetail("tablet");
            expect(scope.plans.length).toBeDefined()
        });

    })

});