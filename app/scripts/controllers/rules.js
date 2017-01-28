myApp.controller('ruleManagerCtrl',['RuleService','$scope','rules',
  function(RuleService,$scope,rules,$http) {
        console.log("Into the ruleManager");
        $scope.rules = rules;
  }
]);

myApp.controller('ruleCardCtrl', ['RuleService', '$scope', '$http','$stateParams', '$state', function(RuleService, $scope, $http, $stateParams, $state) {
  console.log("Into the ruleCardCtrl");
  return $http.get('data/rules.json', { cache: true }).then(function(res) {
    for(var i=0;i<res.data.length;i++) {
      if(res.data[i].id == $state.params['ruleId']) {
        $scope.rule = angular.copy(res.data[i]);
      }
    }
  }
)}]);
