(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppCategoryController', MenuAppCategoryController);

MenuAppCategoryController.$inject = ['categories'];
function MenuAppCategoryController(categories) {
  var list = this;
  list.items = categories.data;
}

})();
