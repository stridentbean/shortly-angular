angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.justCreatedLink = {};
  $scope.hidden = 'display: none';

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function(resp) {
        $scope.link.url = '';
        $scope.justCreatedLink = resp;
        $scope.hidden = '';

    });
  };
});
