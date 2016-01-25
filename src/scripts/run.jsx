export function run($rootScope, $state, $localStorage) {
  $rootScope.$state = $state;
  $rootScope.$storage = $localStorage;
}
