app.factory('PlanListModel', function() {
  var PlanListModel;
  PlanListModel = function(_data){
    var data = _data || {};
    this.sku = data.sku || null;
    this.franquia = data.franquia || null;
    this.valor = data.valor || null;
    this.ativo = data.ativo || null;
  }

  return PlanListModel;
});