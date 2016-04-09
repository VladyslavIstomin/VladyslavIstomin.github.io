(function () {
	'use strict';

	angular
		.module('app', [
			'ui.router',
			'pokemonPokedexModule'
		])

		.config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('pokemonList', {
						url: '/',
						templateUrl: 'app/pokemon-list/pokemon.list.html'
					})
			}
		]);
})();

