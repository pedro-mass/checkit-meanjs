'use strict';

// Configuring the Articles module
angular.module('notes').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Notes', 'checkit');
	}
]);
