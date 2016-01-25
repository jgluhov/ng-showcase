export function selectable($parse, selectedProducts) {

  function link(scope, element, attrs) {

    element.on('click', () => {
      if(angular.element(element).hasClass('selected')) {
        let index = selectedProducts.indexOf(scope.item);
        selectedProducts.splice(index, 1);
      } else {
        selectedProducts.push(scope.item);
      }
      angular.element(element).toggleClass('selected');
      scope.$apply();
    })
  }

  return {
    restrict: 'A',
    link: link,
    scope: {
      item: '='
    }
  }

}
