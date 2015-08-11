app.factory('productList', ['$http', function($http) {
  return $http.get('/api/products')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
