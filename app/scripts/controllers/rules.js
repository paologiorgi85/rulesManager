myApp.controller('ruleManagerCtrl',['RuleService','$scope','rules',
  function(RuleService,$scope,rules,$http) {
        console.log("Into the ruleManager");
        $scope.rules = rules;
  }
]);

myApp.controller('ruleCardCtrl', ['RuleService', '$scope', '$http','$stateParams', '$state','$mdDialog',
function(RuleService, $scope, $http, $stateParams, $state, $mdDialog) {
  console.log("Into the ruleCardCtrl");

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: 'ruleCardCtrl',
      templateUrl: 'views/rules/ruleCard/dialog.parameters.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  return $http.get('data/rules.json', { cache: true }).then(function(res) {
    for(var i=0;i<res.data.length;i++) {
      if(res.data[i].id == $state.params['ruleId']) {
        $scope.rule = angular.copy(res.data[i]);
      }
    }
  }
)}]);
