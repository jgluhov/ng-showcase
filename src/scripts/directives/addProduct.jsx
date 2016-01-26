export function addProduct($rootScope, mProduct) {
  var template = `
  <form class="uk-form uk-form-stacked" name="productForm" novalidate ng-submit="onSubmit(productForm)">
        <div class="uk-modal">
            <div class="uk-modal-dialog">
                <a class="uk-modal-close uk-close"></a>
                <div class="uk-modal-header">
                    <h2>Добавить товар</h2>
                </div>
                <div class="uk-form-row">
                    <label class="uk-form-label" for="name">Название</label>
                    <div class="uk-form-controls">
                        <input type="text" id="name" class="uk-width-1-1" ng-model="product.name" name="name"
                               placeholder="Название товара" ng-class="{'uk-form-danger': submitted && productForm.name.$error.required}" required>
                    </div>
                </div>
                <div class="uk-form-row">
                    <label class="uk-form-label" for="cost">Цена</label>
                    <div class="uk-form-controls">
                        <input type="number" id="cost" class="uk-width-1-3" ng-model="product.cost" name="cost"
                               placeholder="Цена товара" ng-class="{'uk-form-danger': submitted && productForm.cost.$error.required}" required>
                    </div>
                </div>
                <div class="uk-form-row">
                    <label class="uk-form-label" for="photo">Фото</label>
                    <div class="uk-form-controls uk-form-controls-text">
                        <p class="uk-form-controls-condensed">
                          <input type="file" id="photo" class="uk-width-1-3" style="display: none;" file-model="product.photo" name="photo" required>
                          <input type="button"
                            class="uk-button uk-width-1-3"
                            value="Выбрать..."
                            onclick="document.getElementById('photo').click();"
                            ng-class="{'uk-button-danger': submitted && productForm.photo.$error.required}">
                          <div class="uk-panel uk-panel-box" ng-if="product.photo" ng-bind="product.photo.name"></div>
                        </p>
                    </div>
                </div>

                <div class="uk-modal-footer uk-text-right">
                    <button type="button" class="uk-button">Отмена</button>
                    <button type="submit" class="uk-button uk-button-primary">Добавить</button>
                </div>
            </div>
        </div>
    </form>
  `;

  function link(scope, element, attrs) {
    angular.element('.uk-modal').attr('id', scope.modalId);
    scope.submitted = false;

    scope.product = Object.assign({}, mProduct);

    scope.onSubmit = function(productForm) {
      if(productForm.$invalid) {
        return scope.submitted = true;
      }
      $rootScope.$storage.products.push(scope.product);
      scope.product = Object.assign({}, mProduct);

      var modal = UIkit.modal(".uk-modal");
      modal.hide();
    }
  }

  return {
    link: link,
    template: template,
    scope: {
      modalId: '@'
    }
  }
}