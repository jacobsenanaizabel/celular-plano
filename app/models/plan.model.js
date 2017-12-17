app.factory('PlainmModel', function() {
  var PlainModel;
  PlainModel = function(_data){
    var data = _data || {};
    this.sku = data.sku || null;
    this.nome = data.nome || null;
    this.descricao = data.descricao || null;
  }

  return PlainModel;
});