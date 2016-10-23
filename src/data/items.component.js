(function(){
  'use strict';

  angular.module('data')
    .component('items', {
      templateUrl:  'src/data/templates/menu-items.template.html',
      bindings: {
        menuItems: '<'
      }
    });

})();
