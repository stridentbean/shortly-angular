angular.module('shortly.shorten', [])
.controller('ShortenController', function ($scope, $location, Links, Auth) {
  //var utils = require('../../../server/config/utils.js');
  //console.log(utils)
  $scope.link = {};
  $scope.justCreatedLink = {};
  $scope.hidden = 'display: none';
  //$scope.error.hidden = 'display: none'

  $scope.addLink = function() {
    //if (utils.isValidUrl($scope.link.url)) {
      Links.addLink($scope.link)
        .then(function(resp) {
          $scope.link.url = '';
          $scope.justCreatedLink = resp;
          $scope.hidden = '';
          //$scope.error.hidden = 'display: none';
        });


  };

  $scope.signOut = function() {
    Auth.signout();
  }
});
