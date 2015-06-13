angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    }).catch(function(error) {
      console.error(error);
    });

  };

  $scope.signOut = function() {
    Auth.signout();
  }

  $scope.getLinks();

});
