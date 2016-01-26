import '../../styles/showcase.styl';

export function showcase($rootScope) {

  let template = `
    <nav class="uk-navbar">
      <div class="uk-navbar-content" total-products></div>
      <div class="uk-navbar-content" delete-all></div>
      <div class="uk-navbar-content uk-navbar-flip" search-products></div>
    </nav>
    <ul class="uk-grid">
      <li ng-repeat="product in $storage.products | status: status"
        class="uk-width-medium-1-4"
        ng-class="{'uk-grid-margin': $index > 3}">

        <thumbnail
          product="product"
          on-edit="onEdit(product)"
          on-select="onSelect(product)">
        </thumbnail>

      </li>
    </ul>`;

  function link(scope) {
    scope.status = $rootScope.$state.params.status;
    scope.mSelected = _.filter($rootScope.$storage.products, { 'selected': true });

    scope.onSelect = (product) => {
      product.selected = !product.selected;

      let index = scope.mSelected.indexOf(product);
      return index < 0 ?
        scope.mSelected.push(product) :
        scope.mSelected.splice(index, 1)
    };

    scope.onEdit = (product) => {
      console.log(`Edit ${product}`);
    };

  }

  return {
    link: link,
    template: template
  }
}
