app.controller('MainController', function($scope, $location, MainService, $rootScope, PlatformModel, $window) {

    $scope.platforms = [];
    $rootScope.plans = [];
    $rootScope.planChoose;

    $scope.plansDetail = function(platform){
        MainService.getPlain(platform).then(function(response) {
            _.each(response.plans, function(plan){
                $rootScope.plans.push(plan);
            })
        });
        $location.path("/plans/" + platform);
    };

    $scope.register = function(planChoose){
        $rootScope.planChoose = planChoose;
        $location.path("/register");    
    }

    $scope.saveRegister = function(){
        if($scope.formLogin.$valid){
            $window.alert("Cadastro realizado com sucesso, entraremos em contato em breve!");
            $location.path("/")
        }
    }
     
    $scope.init = function(){
        MainService.getPlatforms().then(function(response) {
            _.each(response.platformList, function(platform){
                $scope.platforms.push(platform);
            })
        });
    };
});