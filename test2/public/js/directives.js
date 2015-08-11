'use strict';

/* Directives */


angular.module('teacherCraft.directives', []).
  directive('productThumbnail', function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'js/directives/productThumbnail.html'
    };
  });
