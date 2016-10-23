(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  console.log(menuItems);
  var menuList = this;
  menuList.menuItems = menuItems.data.menu_items;
  console.log(menuItems.data.menu_items);
}
})();
