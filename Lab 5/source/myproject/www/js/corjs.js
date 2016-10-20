// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);
 
 app.controller('LocationCtrl', function($scope, $cordovaGeolocation, $ionicPlatform) {
     function initMap(coords) {
        var mapOptions = {
          center: {lat: coords.latitude, lng: coords.longitude},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'),
                        mapOptions);
      }
$ionicPlatform.ready(function() {
  var posOptions = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.coords=position.coords;
      initMap(position.coords);
     }, function(err) {
      console.log('get current position error:' + angular.toJson(err));
    
    });
  });
 });
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "LoginCtrl",
            cache: false
        })
        .state("register", {
            url: "/register",
            templateUrl: "templates/registerpage.html",
            controller: "Registerctrl"
        })
    .state("main", {
            url: "/main",
            templateUrl: "index1.html",
            controller: "LocationCtrl"
    });
    $urlRouterProvider.otherwise('/login');
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
