'use strict';
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        //$scope.placeList = new Array();
        //$scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            //var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" ) {
                //document.getElementById('div_ReviewList').style.display = 'none';
                //This is the API that gives the list of venues based on the place and search query.

                var handler = $http.get("https://api.flickr.com/services/rest/?method=flickr.places.find&api_key=5a96fe21b2b6fce8d8f8278a2eb0286f"
                  + "&query=" + placeEntered +
                  "&format=json&nojsoncallback=1&auth_token=72157673283699920-d9d36d5b7b66232e&api_sig=21b1c9020d1237cc2ab2b88df7837ee2");

                handler.success(function (data) {
                  console.log(data.places.place);
                      var map = new google.maps.Map(document.getElementById('div_VenueList'), {
                        center: new google.maps.LatLng(37.423624, -122.0921247),
                        mapTypeid: google.maps.MapTypeId.ROADMAP,
                        zoom: 18

                      });
                  for( var x in data.places.place){
                    var building = data.places.place[x];
                    var location = new google.maps.LatLng(building.latitude, building.longitude);
                    console.log(building.latitude);
                    var marker = new google.maps.Marker({
                      position: location,
                      title: building._content,
                      map: map

                    });
                  }

                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }});
