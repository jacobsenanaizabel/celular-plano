app.factory('PlatformListModel', function() {
  var PlatformListModel;
  PlatformListModel = function(_data){
    var data = _data || {};
    this.sku = data.sku || null;
    this.nome = data.nome || null;
    this.descricao = data.descricao || null;
  }

  return PlatformListModel;
});