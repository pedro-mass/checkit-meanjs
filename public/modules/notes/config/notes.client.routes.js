'use strict';

//Setting up route
angular.module('notes').config(['$stateProvider',
	function($stateProvider) {
		// Notes state routing
		$stateProvider.
		state('checkit', {
			url: '/checkit',
			templateUrl: 'modules/notes/views/checkit.client.view.html',
			controller: 'NotesController'
		});
	}
]);
