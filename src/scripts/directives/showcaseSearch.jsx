export function showcaseSearch() {

  let template = `
    <form class="uk-form uk-margin-remove uk-display-inline-block">
      <input type="text" placeholder="Введите название товара для поиска"  ng-model='search' class="uk-form-width-large">
      <button class="uk-button uk-button-primary" ng-click="searchQuery = search">Искать</button>
    </form>
  `;

  function link() {
  }

  return {
    link: link,
    template: template,
    scope : {
      searchQuery: '='
    }
  }
}
