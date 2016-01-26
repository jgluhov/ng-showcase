export function searchProducts() {

  let template = `
    <form class="uk-form uk-margin-remove uk-display-inline-block">
      <input type="text" placeholder="Search">
      <button class="uk-button uk-button-primary">Поиск</button>
    </form>
  `;

  function link() {

  }

  return {
    link: link,
    template: template
  }
}
