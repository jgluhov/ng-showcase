export function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/active');

  $stateProvider

    .state('active', {
      url: '/active',
      params: { status: 'active' },
      templateUrl: './assets/templates/showcase.html'
    })

    .state('inactive', {
      url: '/inactive',
      params: { status: 'inactive' },
      templateUrl: './assets/templates/showcase.html'
    });

}