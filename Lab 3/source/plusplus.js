/**
 * Created by polavarapu on 9/11/2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('mycontroller', function ($scope, $http) {
        //$scope.facepredlist = new Array();
        // $scope.mostRecentReview;
        $scope.getpredictions = function () {
            var imageEntered = document.getElementById("txt_placeName").value;
            //var searchQuery = document.getElementById("txt_searchFilter").value;
            if (imageEntered != null && imageEntered != "" ) {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://apius.faceplusplus.com/v2/detection/detect?" +
                    "url=" + imageEntered + "&api_secret=SmkJ7gqmLxWzVzkXYupi6oibRSzGkYO1" + "&api_key=6eceb51192b3a8080790ca394e76351a" + "&attribute=glass,pose,gender,age,race,smiling");
                //var object = JSON.parse(data);
                //document.getElementById("demo").innerHTML = object.img_height;
                handler.success(function (data) {
                    //console.log(data.face[0]);
                    if (data != null && data != null && data.face[0]!= undefined && data.face[0] != null ) {
                        //console.log(data.face[0].attribute.age.value);
                        $scope.detects = {
                            "age": data.face[0].attribute.age.value,
                            "gender": data.face[0].attribute.gender.value,
                            "race" : data.face[0].attribute.race.value

                        };





                        }


                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }});
