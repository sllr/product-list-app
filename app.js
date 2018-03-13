/* globals angular */
angular.module('app', [])
  .controller('AppCtrl', function ($scope, $http) {
    $scope.test = 'Hello World'
    const url = 'https://arcane-spire-39955.herokuapp.com'
    $http.get(`${url}/products`).then(res => {
      $scope.products = res.data
    })
  })
