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
  };

  $scope.onDeleteSelectedProducts = () => {

    //angular.forEach(selectedProducts, (product) => {
    //  $rootScope.$state.params.status === 'active' ?
    //  product.status = 'inactive' :
    //  $rootScope.$storage.products.splice($rootScope.$storage.products.indexOf(product), 1);
    //});
    //
    //selectedProducts = [];
    //$scope.selectedProducts = selectedProducts;

  }
}
