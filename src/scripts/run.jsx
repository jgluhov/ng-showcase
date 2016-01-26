export function run($rootScope, $state, $localStorage) {
  $rootScope.$state = $state;
  $rootScope.$storage = $localStorage;

  $rootScope.$storage.perPage = $rootScope.$storage.perPage || '8';
}
