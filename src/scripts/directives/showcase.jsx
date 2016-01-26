import '../../styles/showcase.styl';

export function showcase($rootScope) {

  let template = `
    <ul class="uk-grid">
      <li ng-repeat="product in $storage.products | status: selection"
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
    scope.selection = $rootScope.$state.params.status;

    scope.onSelect = (product) => {
      console.log(`Select ${product}`)
    };

    scope.onEdit = (product) => {
      console.log(`Edit ${product}`);
    }
  }

  function controller() {
    let self = this;
    self.selectedProducts = [];

  }

  return {
    link: link,
    template: template,
    controller: controller
  }
}
