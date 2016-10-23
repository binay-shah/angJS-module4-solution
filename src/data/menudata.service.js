(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ('https://davids-restaurant.herokuapp.com/categories.json')
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
    });
  };

}

})();
