app.factory('PlatformModel', function(PlatformListModel) {
  var PlatformModel;
  PlatformModel = function(_data){
    var data = _data || {};
    this.platformList = data.plataformas ? _.map(data.plataformas, function(plataforma){
      return new PlatformListModel(plataforma);
    }) : [];
  }

  return PlatformModel;
});