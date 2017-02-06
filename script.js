	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/person', {
				templateUrl : 'pages/person.html',
				controller  : 'personController'
			})

			// route for the contact page
			.when('/address', {
				templateUrl : 'pages/address.html',
				controller  : 'addressController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('homeController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('personController', function($scope, $http) {
		$scope.message = 'Look! I am an about page.';

		var res = function(response){
			$scope.personlist = response.data;
		}

		var error = function(res){
			$scope.error = "not found";
		}

		$http.get("http://localhost:8081/person").then(res,error);

	});

	scotchApp.controller('addressController', function($scope, $http) {
		$scope.message = 'Contact us! JK. This is just a demo.';

		var res = function(response){
			$scope.addresslist = response.data;
		}

		var error = function(res){
			$scope.error = "not found";
		}

		$http.get("http://localhost:8081/address").then(res,error);

	});


	scotchApp.controller('FormCtrl', function($scope, $http) {

		// create a blank object to handle form data.
		$scope.person={};

      // calling our submit function.
      $scope.submitForm = function() {


		$http.defaults.headers.post["Content-Type"] = "application/json";

		var data = angular.toJson($scope.person);


		var res = function(response){
			$scope.addresslist = response.data;
			alert("sucessfully added");
		}

		var error = function(res){
			$scope.error = "not found";
			alert("error!!");
		}

		$http.post('http://localhost:8081/addperson', data).then(res,error);

     };

 });