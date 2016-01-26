export function selectable() {

  function link(scope, element) {
    element.on('click', () => {
      angular.element(element).toggleClass('selected');
    })
  }

  return {
    restrict: 'A',
    link: link
  }

}
