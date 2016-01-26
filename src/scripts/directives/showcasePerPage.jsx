export function showcasePerPage($rootScope, perPageFactory) {

  let template = `
    <ul class="uk-pagination">
      <li
        ng-class="{ 'uk-active' : item.name === selected }"
        ng-repeat="item in items"
        ng-click="select(item)">
        <span ng-bind="item.name"></span>
      </li>
    </ul>
  `;

  function link(scope, element, attrs) {
    scope.items = Object.assign({}, perPageFactory);
    scope.selected = $rootScope.$storage.perPage;

    let status = $rootScope.$state.params.status;

    scope.select = (item) => {
      if(item.name === 'Все') {
        scope.selected = item.name;
        return status === 'active' ?
          $rootScope.$storage.perPage = (_.filter($rootScope.$storage.products, { 'status' : 'active'})).length :
          $rootScope.$storage.perPage = (_.filter($rootScope.$storage.products, { 'status' : 'inactive'})).length;
      }
      $rootScope.$storage.perPage = scope.selected = item.name;
    }
  }

  return {
    link: link,
    template: template
  }
}
