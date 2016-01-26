'use strict';
import '../styles/app.styl';

import {config} from './config.jsx';
import {run} from './run.jsx';
import {showcaseCtrl} from './controllers/showcaseCtrl.jsx';
import {fileModel} from './directives/fileModel.jsx';
import {showcase} from './directives/showcase.jsx';
import {selectable} from  './directives/selectable.jsx';
import {thumbnail} from './directives/thumbnail.jsx';

import {selectedProducts} from './services/selectedProducts.jsx';

import {status} from './filters/status.jsx';
import {sale} from './filters/sale.jsx';

let ngShowcase = angular.module('ngShowcase', ['ui.router', 'ngStorage']);

ngShowcase.config(config);
ngShowcase.run(run);

ngShowcase
  .controller('showcaseCtrl', showcaseCtrl);

ngShowcase
  .service('selectedProducts', selectedProducts);

ngShowcase
  .directive('fileModel', fileModel)
  .directive('showcase', showcase)
  .directive('selectable', selectable)
  .directive('thumbnail', thumbnail);

ngShowcase
  .filter('status', status)
  .filter('sale', sale);


angular.bootstrap(document, ['ngShowcase']);