/**
 * Created by polavarapu on 9/11/2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('mycontroller', function ($scope, $http) {
        $scope.getpredictions = function () {
            var imageEntered = document.getElementById("txt_placeName").value;
            if (imageEntered != null && imageEntered != "" ) {
                var collector = $http.get("https://apius.faceplusplus.com/v2/detection/detect?" +
                    "url=" + imageEntered + "&api_secret=SmkJ7gqmLxWzVzkXYupi6oibRSzGkYO1" + "&api_key=6eceb51192b3a8080790ca394e76351a" + "&attribute=glass,pose,gender,age,race,smiling");

                collector.success(function (data) {
                    if (data != null && data != null && data.face[0]!= undefined && data.face[0] != null ) {
                        $scope.detects = {
                            "age": data.face[0].attribute.age.value,
                            "gender": data.face[0].attribute.gender.value,
                            "race" : data.face[0].attribute.race.value

                        };





                        }


                })
                collector.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }});
