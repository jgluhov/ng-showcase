export function thumbnail($rootScope) {

  let template = `
  <a class="uk-thumbnail" ng-click="onSelect()">
    <img ng-src="{{product.photo.data}}" alt="">
    <div class="uk-thumbnail-caption uk-margin-small-bottom thumbnail-name" ng-bind="product.name"></div>
    <div class="uk-thumbnail-caption uk-margin-small-bottom">
      <div class="uk-flex uk-flex-middle uk-flex-space-around">
        <div class="uk-text-large sale" ng-bind="product.cost | sale: 1.3 | currency: $ : 0"></div>
        <div class="uk-text-large" ng-bind="product.cost | currency: $ : 0"></div>
      </div>
    </div>
    <div class="uk-thumbnail-caption">
      <div class="uk-flex uk-flex-middle uk-flex-space-between">
        <button class="uk-button uk-button-primary" type="button" ng-click="onEdit()">Редактировать</button>
        <button class="uk-button" type="button" ng-click="onDelete()">Удалить</button>
      </div>
    </div>
  </a>`;

  function link(scope, element) {
    let status = $rootScope.$state.params.status;
    let thumbnail = element.find('.uk-thumbnail');

    if(scope.product.selected) thumbnail.addClass('selected');

    scope.onDelete = () => {
      return status === 'active' ?
        scope.product.status = 'inactive' :
        $rootScope.$storage.products.splice($rootScope.$storage.products.indexOf(scope.product),1)
    };

    element.bind('click', function() {
      thumbnail.toggleClass('selected');
    });
  }

  return {
    link: link,
    template: template,
    scope: {
      product: '=',
      onEdit: '&',
      onSelect: '&'
    }
  }
}
