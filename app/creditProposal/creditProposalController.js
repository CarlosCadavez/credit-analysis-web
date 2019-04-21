(function () {
  angular.module('calcardAnalysis')
    .controller('CreditProposalCtrl', [
      '$http',
      'msgs',
      CreditProposalController
    ])

  function CreditProposalController($http, msgs) {
    const vm = this
    const url = 'http://localhost:8080/credit-proposals'

    vm.refresh = function () {
      $http.get(url).then(function (resp) {
        vm.creditProposals = resp.data
        vm.creditProposal = {}
      })
    }

    vm.create = function () {
      $http.post(url, vm.creditProposal).then(function (response) {
        vm.refresh()
        msgs.addSuccess('Operação salva com sucesso!')
      }).catch(function (resp) {
        msgs.addError(resp.data.errors)
      })
    }

    vm.refresh()
  }
})()