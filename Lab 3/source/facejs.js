/**
 * Created by polavarapu on 9/11/2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.facepredlist = new Array();
       // $scope.mostRecentReview;
        $scope.getpredictions = function () {
            var imageEntered = document.getElementById("txt_placeName").value;
            //var searchQuery = document.getElementById("txt_searchFilter").value;
            if (imageEntered != null && imageEntered != "" ) {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.clarifai.com/v1/tag?" +
                    "url=" + imageEntered +
                    "&access_token=jYPgh9haxDUiv2UXS4F87S3YGBTVVh");
                  //var object = JSON.parse(data);
                //document.getElementById("demo").innerHTML = object.img_height;
                handler.success(function (data) {
                    console.log(data);
                        for (var i = 0; i < 6; i++) {
                            $scope.facepredlist[i] = {
                                "name": data.results[0].result.tag.classes[i]

                            };

                        }


                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }});
       /* $scope.getReviews = function (venueSelected) {
            if (venueSelected != null) {
                //This is the API call being made to get the reviews(tips) for the selected place or venue.
                var handler = $http.get("https://api.foursquare.com/v2/venues/" + venueSelected.id + "/tips" +
                    "?sort=recent" +
                    "&client_id=Q0ENF1YHFTNPJ31DCF13ALLENJW0P5MTH13T1SA0ZP1MUOCI" +
                    "&client_secret=ZH4CRZNEWBNTALAE3INIB5XG0QI12R4DT5HKAJLWKYE1LHOG&v=20160215" +
                    "&limit=5");
                handler.success(function (result) {
                    if (result != null && result.response != null && result.response.tips != null &&
                        result.response.tips.items != null) {
                        $scope.mostRecentReview = result.response.tips.items[0];
                        //This is the Alchemy API for getting the sentiment of the most recent review for a place.
                        var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment" +
                            "?apikey=d0e7bf68cdda677938e6c186eaf2b755ef737cd8" +
                            "&outputMode=json&text=" + $scope.mostRecentReview.text);
                        callback.success(function (data) {
                            if(data!=null && data.docSentiment!=null)
                            {
                                $scope.ReviewWithSentiment = {"reviewText" : $scope.mostRecentReview.text,
                                    "sentiment":data.docSentiment.type,
                                    "score":data.docSentiment.score  };
                                document.getElementById('div_ReviewList').style.display = 'block';


                            }
                        })
                    }
                })
                handler.error(function (result) {
                    alert("There was some error processing your request. Please try after some time.")
                })
            }

        }

    });**/
