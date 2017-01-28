myApp.service('RuleService', function($http, $state) {
  var service = {

    getAllRules: function() {
      console.log("Service - function: getAllRules()");
      return $http.get('data/rules.json', { cache: true }).then(function(res) {
        //console.log(res.data);
        return res.data;
      })
    }

    /* Add Service here */

  }
  return service;
})
