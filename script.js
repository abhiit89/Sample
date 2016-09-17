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


/*
 Pseudo code:

 A) As soon as you click on remind me button, below actions should take place at background
 1) Get latitude and longitude of source and destination.
 2) Get time to reach.
 3) Get email ID
 4) Get current latitude and longitude through HTML5 and JS
 5) Calculate total required time without traffic and with traffic. (Poll PG0: first poll to Google MAP)
 e.g. source: my home(my current location); destination: Wonder La; departure time: now (Time T0)
 https://maps.googleapis.com/maps/api/directions/json?origin=13.0164384,77.6441959&destination=12.8342718,77.3988557&departure_time=now&key=AIzaSyB6ky0s6kmaxH15hsxsNHKuZeI6n_OG2eA
 6) Delay(DG0) = difference of time without traffic and with traffic.
 7) Set a timer to poll Google API at time = time without traffic + 2 * delay; (Time T1)

 B) Below things should happen at the time of Time T1:
 1) Poll Google Map (PG1) and get exact delay (DG1).
 2) Poll Uber (PU1) ang get delay(DU1);
 3) Assuming DG1 > DU1,
    if DG1 + time without traffic + DU1 = now {
        i) then book the cab and send email
    } else {
        i) D1 = DG0 - DG1;
        ii) PG2 = D1 / 2; (Binary search: O(log n))
        iii) Set timer(Time T2) of which will trigger at = now + PG2
    }
 4) At the Time T2, Poll Google Map (PG2) and get to know delay (DG2).
 5)  if (DG2 + time without traffic + DU1 - now <= 5 minutes) {
        i) then book the cab
        ii) Send email
        iii) return and exit form program
    } else {
        i) Go to step 3 and continue binary search recursively
    }

 So this problem can be solved at time complexity of O(Log n)
 Least number of polls:
 PU1: 1 poll to Uber
 PG2: 2 polls to Google Map

 Most number of Polls:
 PU1: 1 poll to Uber
 PG (Log n)

 */