/**
 * Created by abhinav on 17/9/16.
 */
(function () {
    "use strict";
    angular.module("myApp",[])
        .controller("myController",["$scope","$http",function ($scope,$http) {
            const UBER_KEY = "ECWcv5urK26d-pz-OHio9c9ovHpahx4UBbQIzMTi";
            const GOOGLE_KEY = "AIzaSyB6ky0s6kmaxH15hsxsNHKuZeI6n_OG2eA";
            var uber_url = "";
            var google_url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=driving&language=fr-FR&key=" + GOOGLE_KEY;
            $scope.callUber = function (time) {

            }

        }])
})();