(function () {
	'use strict';

	angular
		.module('pokemonPokedexModule', [])
		.controller('controllerPokedex', ['$scope', 'servicePokedex', '$http',
			function ($scope, $servicePokedex, $http) {
				$scope.isLoading = true;
				$scope.isHideBtn = true;
				$scope.isHideIcon = true;
				sendHttp();

				$scope.showItem = function(index) {
					$servicePokedex.currentItemData($scope.pokemonList[index], $scope);
				};

				$scope.showDetailBlock = false;

				$scope.addPokemons = function() {
					$scope.isHideIcon = false;
					$servicePokedex.showAddingData($scope, $http, $scope.urlNextChunk);
				};

				function sendHttp() {
					$http({
						method: 'GET',
						responseType: 'json',
						url: 'http://pokeapi.co/api/v1/pokemon/?limit=12'
					}).success(function (data) {
						console.log(data);
						$servicePokedex.showData(data, $scope);
						$scope.isHideBtn = false;
					}).error(function () {
						console.log('request Error')
					});
				}
			}
		]);
})();