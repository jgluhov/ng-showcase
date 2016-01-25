export function showcaseCtrl($scope, $rootScope, selectedProducts) {
  $scope.product = {
    name: null,
    cost: null,
    photo: {},
    status: 'active'
  };

  $scope.searchQuery = '';
  $scope.selectedProducts = selectedProducts;

  $scope.submit = (form) => {
    if(!$rootScope.$storage.products)
      $rootScope.$storage.products = [];

    $rootScope.$storage.products.push(angular.copy($scope.product));
  }
}
