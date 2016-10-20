/**
 * Created by bn4n5 on 10/18/2016.
 */
var app=angular.module("converter",[]);
app.controller("convertctrl",function ($scope,$http) {
    $scope.bmi = function () {
        var height=$scope.h;
        



        var inches = $http.get("http://localhost:8080/RESTExample/restexample/inchconverter/"+height);
        var feet = $http.get("http://localhost:8080/RESTExample/restexample/feetconverter/"+height);
        
        inches.success(function (data) {
            console.log(data);
            $scope.con={"INCH":data.INCHVALUE};

        });
        feet.success(function (data) {
            console.log(data);
            $scope.convert={"FEET":data.FEETVALUE};

        });
    }
});
