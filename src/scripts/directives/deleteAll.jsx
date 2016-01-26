/**
 * Created by jgluhov on 26/01/16.
 */
export function deleteAll($rootScope) {

  let template = `
  <button ng-show="mSelected.length" class="uk-button uk-button-muted" ng-click="onPress()">
    <i class="uk-icon-trash"></i> Удалить все
     <div class="uk-badge uk-badge-notification" ng-bind="mSelected.length"></div>
  </button>`;

  function link(scope) {
    scope.onPress = function() {
      let status = $rootScope.$state.params.status;

      _.forEach(scope.mSelected, function(product) {
        let index = $rootScope.$storage.products.indexOf(product);
        if(status === 'active') {
          $rootScope.$storage.products[index].status = 'inactive';
          $rootScope.$storage.products[index].selected = false;
        }
        else {
          $rootScope.$storage.products.splice(index, 1);
        }
      });
      scope.mSelected.length = 0;

    }
  }
  return {
    link: link,
    template: template
  }
}
