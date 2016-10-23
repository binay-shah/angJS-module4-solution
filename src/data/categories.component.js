(function(){
  'use strict';

  angular.module('data')
    .component('categories', {
      templateUrl: 'src/data/templates/menu.template.html',
      bindings: {
        items: '<'
      }
    });

})();
