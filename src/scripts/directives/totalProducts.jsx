export function totalProducts($rootScope) {
  var template = `
  Всего товаров: <span ng-bind="$storage.products.length"></span>
  `;

  function link() {

  }

  return {
    link: link,
    template: template
  }
}