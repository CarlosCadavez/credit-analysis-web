(function () {
  angular.module('calcardAnalysis')
    .controller('CreditProposalCtrl', [
      '$http',
      'msgs',
      CreditProposalController
    ])

  function CreditProposalController($http, msgs) {
    const vm = this

    vm.create = function () {
      const url = 'http://localhost:8080/credit-proposals'

      $http.post(url, vm.creditProposal).then(function (response) {
        vm.creditProposal = {}
        msgs.addSuccess('Operação salva com sucesso!')
      }).catch(function (resp) {
        console.log('object :', resp);
        msgs.addError(resp.data.errors)
      })
    }
  }
})()