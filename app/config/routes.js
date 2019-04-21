angular.module('calcardAnalysis').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('creditProposal', {
      url: "/creditProposals",
      templateUrl: "creditProposal/tabs.html"
    })
    $urlRouterProvider.otherwise('/dashboard')
  }
])