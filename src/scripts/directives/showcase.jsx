import '../../styles/showcase.styl';

export function showcase($rootScope) {

  let template = `
  <nav class="uk-navbar sc-navbar">
    <div class="uk-navbar-nav">
      <li>
        <a href="#addProduct"
          ng-show="$state.params.status === 'active'"
          class="uk-button uk-button-success uk-float-left uk-margin-right green"
          data-uk-modal="{center:true}">
          <i class="uk-icon-plus"></i> Добавить товар
        </a>
      </li>
      <add-product modal-id="addProduct"></add-product>
    </div>
    <showcase-search class="uk-navbar-content uk-navbar-flip"  search-query='searchQuery'></showcase-search>
  </nav>
    <nav class="uk-navbar">
      <div class="uk-navbar-content" total-products></div>
      <div class="uk-navbar-content" delete-all></div>


      <div class="uk-navbar-flip">
        <showcase-per-page class="uk-navbar-content" per-page="perPage"></showcase-per-page>
      </div>
    </nav>
    <div class="showcase-content">
    <dir-pagination-controls
        class="uk-navbar-content uk-navbar-center"
        direction-links="false"
        auto-hide="false"
        max-size="8">
      </dir-pagination-controls>
    <ul class="uk-grid uk-grid-small">
      <li dir-paginate="product in $storage.products | status: status | filter: { name: searchQuery } | itemsPerPage: $storage.perPage"

        class="uk-width-medium-1-4"
        ng-class="{'uk-grid-margin': $index > 3}">

        <thumbnail
          product="product"
          on-edit="onEdit(product)"
          on-select="onSelect(product)">
        </thumbnail>

      </li>
    </ul>
    </div>`;

  function link(scope) {
    scope.status = $rootScope.$state.params.status;
    scope.mSelected = _.filter($rootScope.$storage.products, {'selected': true});
    scope.searchQuery = '';

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
