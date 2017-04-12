"use strict";
(function(){
	angular.module('eventsApp', [])
	.controller("clearTripFlightsController", function($scope){
		$scope.setSelected = function() {
  			console.log("show", arguments, this);
   			this.selected = 'selected';
			}
		$scope.setSelected = function() {
  			 // console.log("show", arguments, this);
   			if ($scope.lastSelected) {
     		$scope.lastSelected.selected = '';
   			}
   			this.selected = 'selected';
  			 $scope.lastSelected = this;
			}
			
        $scope.flightDetails =  {
			"return_on": [{
				"flight_no": "SG-113",
				"flight_name": "SpiceJet",
				"depart_time": 1314924180000,
				"arrival_time": 1314930780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 3953
			}, {
				"flight_no": "6E-118",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314945780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 1753
			}, {
				"flight_no": "IT-131",
				"flight_name": "Kingfisher",
				"depart_time": 1314938580000,
				"arrival_time": 1314942180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 2819
			}, {
				"flight_no": "6E-124",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314960180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 9907
			}, {
				"flight_no": "SG-113",
				"flight_name": "SpiceJet",
				"depart_time": 1314924180000,
				"arrival_time": 1314930780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 3953
			}, {
				"flight_no": "6E-118",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314945780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 1753
			}, {
				"flight_no": "IT-131",
				"flight_name": "Kingfisher",
				"depart_time": 1314938580000,
				"arrival_time": 1314942180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 2819
			}, {
				"flight_no": "6E-124",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314960180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 9907
			}, {
				"flight_no": "SG-113",
				"flight_name": "SpiceJet",
				"depart_time": 1314924180000,
				"arrival_time": 1314930780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 3953
			}, {
				"flight_no": "6E-118",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314945780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 1753
			}, {
				"flight_no": "IT-131",
				"flight_name": "Kingfisher",
				"depart_time": 1314938580000,
				"arrival_time": 1314942180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 2819
			}, {
				"flight_no": "6E-124",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314960180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 9907
			}, {
				"flight_no": "SG-113",
				"flight_name": "SpiceJet",
				"depart_time": 1314924180000,
				"arrival_time": 1314930780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 3953
			}, {
				"flight_no": "6E-118",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314945780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 1753
			}, {
				"flight_no": "IT-131",
				"flight_name": "Kingfisher",
				"depart_time": 1314938580000,
				"arrival_time": 1314942180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 2819
			}, {
				"flight_no": "6E-124",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314960180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 9907
			}, {
				"flight_no": "SG-113",
				"flight_name": "SpiceJet",
				"depart_time": 1314924180000,
				"arrival_time": 1314930780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 3953
			}, {
				"flight_no": "6E-118",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314945780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 1753
			}, {
				"flight_no": "IT-131",
				"flight_name": "Kingfisher",
				"depart_time": 1314938580000,
				"arrival_time": 1314942180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 2819
			}, {
				"flight_no": "6E-124",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314960180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 9907
			}, {
				"flight_no": "SG-113",
				"flight_name": "SpiceJet",
				"depart_time": 1314924180000,
				"arrival_time": 1314930780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 3953
			}, {
				"flight_no": "6E-118",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314945780000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 1753
			}, {
				"flight_no": "IT-131",
				"flight_name": "Kingfisher",
				"depart_time": 1314938580000,
				"arrival_time": 1314942180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 2819
			}, {
				"flight_no": "6E-124",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314960180000,
				"from_airport": "New Delhi",
				"to_airport": "Mumbai",
				"price": 9907
			}],
			"depart_on": [{
				"flight_no": "6E-541",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314945780000,
				"from_airport": "Mumbai",
				"to_airport": "New Delhi",
				"price": 1753
			}, {
				"flight_no": "SG-214",
				"flight_name": "SpiceJet",
				"depart_time": 1314924180000,
				"arrival_time": 1314930780000,
				"from_airport": "Mumbai",
				"to_airport": "New Delhi",
				"price": 1953
			}, {
				"flight_no": "IT-266",
				"flight_name": "Kingfisher",
				"depart_time": 1314938580000,
				"arrival_time": 1314942180000,
				"from_airport": "Mumbai",
				"to_airport": "New Delhi",
				"price": 2819
			}, {
				"flight_no": "6E-334",
				"flight_name": "IndiGo",
				"depart_time": 1314942180000,
				"arrival_time": 1314960180000,
				"from_airport": "Mumbai",
				"to_airport": "New Delhi",
				"price": 9917
			}]
				
		};
        
	})
	.filter('msToTime', function() {

		return function(duration) {
			var milliseconds = parseInt((duration % 1000) / 100)
				, minutes = parseInt((duration / (1000 * 60)) % 60)
				, hours = parseInt((duration / (1000 * 60 * 60)) % 24);

			hours = (hours < 10) ? "0" + hours : hours;
			minutes = (minutes < 10) ? "0" + minutes : minutes;

			return hours + ":" + minutes;
		};

	})
	.filter('timeFormat', function(){

		return function(duration){
			return duration.slice(0,2) + "h:" + duration.slice(3) + "m";
		}
	});

})();

