(function() {
	'use strict';

	angular
		.module('app')
		.factory('servicePokedex', function() {
			return {
				showData: function(data, scope) {
					if(data.meta.next) {
						scope.urlNextChunk = data.meta.next;
					} else {
						scope.isHideBtn = true;
					}
					scope.pokemonList = data.objects;
					scope.isLoading = false;
				},

				currentItemData: function(item, scope) {
					scope.currentPokemon = item;
					scope.showDetailBlock = true;
					scope.type = showItemType(item);
				},

				showAddingData: function(scope, http, url) {
					http({
						method: 'GET',
						responseType: 'json',
						url: 'http://pokeapi.co' + url
					}).success(function (data) {
						console.log(data);
						data.objects.forEach(function(el, i) {
							scope.pokemonList.push(el);
						});
						scope.isHideIcon = true;
					}).error(function () {
						console.log('request Error')
					});
				}
			}
		});

	function showItemType(item) {
		var arr = [];
		item.types.forEach(function(el, i) {
			arr.push(el.name)
		});
		return arr.join(', ');
	}
})();