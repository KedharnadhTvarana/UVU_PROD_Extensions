// @module Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation
define('Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View'
,	[
	'tvarana_headermenucustomisation_headermenucustomisation.tpl'
	
	,	'Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.SS2Model'
	
	,	'Backbone'
    ]
, function (
	tvarana_headermenucustomisation_headermenucustomisation_tpl
	
	,	HeaderMenuCustomisationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View @extends Backbone.View
	return Backbone.View.extend({

		template: tvarana_headermenucustomisation_headermenucustomisation_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HeaderMenuCustomisationModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View.Context
	,	getContext: function getContext()
		{
			//@class Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
