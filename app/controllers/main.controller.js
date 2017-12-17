app.controller('MainController', function($scope, $location, MainService, $rootScope) {

    $scope.platforms = [];
    $rootScope.plans = [];

    $scope.plansDetail = function(platform){
        MainService.getPlain(platform).then(function(response) {
            _.each(response.planos, function(plan){
                $rootScope.plans.push(plan);
            })
        });

        $location.path("/plans/" + platform);
    }; 

    console.log($rootScope.plans);
    
    $scope.init = function(){
        MainService.getPlatforms().then(function(response) {
            _.each(response.plataformas, function(platform){
                platform.descricao = platform.descricao.replace("|"," ").toLowerCase();
                platform.nome = platform.nome.toLowerCase();
                $scope.platforms.push(platform);
            })
        });
    };
});