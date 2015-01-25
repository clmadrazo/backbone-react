var App = App || {};

(function() {
	'use strict';

	App.CarsCollection = Backbone.Collection.extend({
	    model: App.Car,
	    url: 'carga.json',

		customFilter: function(filters){
			var results = this.where(filters);
			return results;
		},

	    parse: function(response){
	    	return response;
	    }
	});
})();