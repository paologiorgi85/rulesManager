'use strict';

/**
 * @ngdoc overview
 * @name agileBoardApp
 * @description
 * # agileBoardApp
 *
 * Main module of the application.
 */
var myApp = angular.module('ruleManger', [
    'ui.router','ngMaterial','mdDataTable','md.data.table',
    'ngAnimate', 'ngCookies', 'ngResource', 'ngSanitize', 'ngMessages',
]);

myApp.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/rules');

  var states = [
    {
      name: 'rules',
      url: '/rules',
      controller: 'ruleManagerCtrl',
      resolve: {
        rules: function(RuleService) {
          return RuleService.getAllRules();
        }
      },
      views: {
        '': {
          templateUrl:'views/rules/partial-rules.html'
        },
        'rulesHeader@rules': {
          controller: 'ruleManagerCtrl',
          templateUrl:'views/rules/rulesHeader.html'
        }
      }
    },
    {
      name: 'rules.ruleCard',
      url: '/{ruleId}',
      controller: 'ruleCardCtrl',
      views: {
        '': {
            templateUrl: 'views/rules/ruleCard/partial-rule-card.html'
        },
        'ruleInfo@rules.ruleCard': {
          controller: 'ruleCardCtrl',
          /*
            templateUrl: 'views/rules/ruleCard/rule-card-info.html'
          */
            templateUrl: 'views/rules/ruleCard/rule-card-info-with-md-table.html'

        }
      }
    }
  ];
  states.forEach(function(state) {
     $stateProvider.state(state);
  });
});
