export function totalProducts($rootScope) {
  var template = `<strong>Всего товаров: <span ng-bind="$storage.products.length"></span></strong>`;

  function link() {

  }

  return {
    link: link,
    template: template
  }
}
