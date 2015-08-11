app.controller('ProductListController', ['$scope', 'productList', function($scope, productList) {
  productList.success(function(data) {
    $scope.products = data.products;
  });
}]);


app.controller('ProductDetailController', ['$scope', 'productList', '$routeParams', function($scope, productList, $routeParams) {
  productList.success(function(data) {
    $scope.product =  data.products[$routeParams.id[1]];  
  });
}]);
