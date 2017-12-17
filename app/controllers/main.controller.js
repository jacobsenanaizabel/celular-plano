app.controller('MainController', function($scope, $location, MainService) {

    var self = this;
    $scope.platforms = [];

    $scope.plansDetail = function(type){
        $location.path("/plans/" + type);
    }; 

    $scope.init = function(){
        MainService.getPlatforms().then(function(response) {
            _.each(response.plataformas, function(platform){
                $scope.platforms.push(platform);
            })
        });
    };
});