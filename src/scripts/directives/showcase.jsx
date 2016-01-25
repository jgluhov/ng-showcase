import '../../styles/showcase.styl';

export function showcase($rootScope, selectedProducts) {

  let template = `
    <ul class="uk-grid">
      <li ng-repeat="product in $storage.products | status: selection"
          class="uk-width-medium-1-4"
          ng-class="{'uk-grid-margin': $index > 3}">

        <a class="uk-thumbnail" selectable item="product">
          <img ng-src="{{product.photo.data}}" alt="">
          <div class="uk-thumbnail-caption uk-margin-small-bottom" ng-bind="product.name"></div>
          <div class="uk-thumbnail-caption uk-margin-small-bottom">
            <div class="uk-flex uk-flex-middle uk-flex-space-around">
              <div class="uk-text-large" ng-bind="product.cost | sale: 1.3 | currency: $ : 0"></div>
              <div class="uk-text-large" ng-bind="product.cost | currency: $ : 0"></div>
            </div>
          </div>
          <div class="uk-thumbnail-caption">
            <div class="uk-flex uk-flex-middle uk-flex-space-between">
              <button class="uk-button uk-button-primary" type="button">Редактировать</button>
              <button class="uk-button" type="button" ng-click="onDelete(product)">Удалить</button>
            </div>
          </div>
        </a>

      </li>
    </ul>`;

  function link(scope) {
    scope.selection = $rootScope.$state.params.status;
    scope.onDelete = (product) => {
      return scope.selection === 'active' ?
        product.status = 'inactive' :
        $rootScope.$storage.products.splice($rootScope.$storage.products.indexOf(product),1)
    }
  }

  return {
    link: link,
    template: template
  }
}
