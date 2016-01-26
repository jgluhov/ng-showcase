export function config($stateProvider, $urlRouterProvider, paginationTemplateProvider) {

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

  paginationTemplateProvider.setPath('./assets/templates/pagination.html')

}