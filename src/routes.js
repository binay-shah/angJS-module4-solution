(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/main-menu.template.html',
      controller: 'MenuAppCategoryController as list',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('menuItems', {
      url: '/items/{category}',
      templateUrl: 'src/menuapp/templates/main-menu-items.template.html',
      controller: 'MenuItemsController as menuList',
      resolve: {
        menuItems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    })

  }
})();
