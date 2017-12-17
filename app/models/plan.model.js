app.factory('PlanModel', function(PlanListModel) {
  var PlanModel;
  PlanModel = function(_data){
    var data = _data || {};
    this.plans = data.planos ? _.map(data.planos, function(plano){
      return new PlanListModel(plano);
    }) : [];
  }

  return PlanModel;
});