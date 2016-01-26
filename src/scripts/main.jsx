'use strict';
import '../styles/app.styl';

import {config} from './config.jsx';
import {run} from './run.jsx';
import {showcaseCtrl} from './controllers/showcaseCtrl.jsx';
import {fileModel} from './directives/fileModel.jsx';
import {showcase} from './directives/showcase.jsx';
import {thumbnail} from './directives/thumbnail.jsx';
import {deleteAll} from './directives/deleteAll.jsx';
import {addProduct} from './directives/addProduct.jsx';
import {totalProducts} from './directives/totalProducts.jsx';
import {searchProducts} from './directives/searchProducts.jsx';

import {mProduct} from './factories/mProduct.jsx';

import {status} from './filters/status.jsx';
import {sale} from './filters/sale.jsx';

let ngShowcase = angular.module('ngShowcase', ['ui.router', 'ngStorage']);

ngShowcase.config(config);
ngShowcase.run(run);

ngShowcase
  .controller('showcaseCtrl', showcaseCtrl);

ngShowcase
  .factory('mProduct', mProduct);

ngShowcase
  .directive('addProduct', addProduct)
  .directive('fileModel', fileModel)
  .directive('showcase', showcase)
  .directive('thumbnail', thumbnail)
  .directive('deleteAll', deleteAll)
  .directive('totalProducts', totalProducts)
  .directive('searchProducts', searchProducts);

ngShowcase
  .filter('status', status)
  .filter('sale', sale);


angular.bootstrap(document, ['ngShowcase']);