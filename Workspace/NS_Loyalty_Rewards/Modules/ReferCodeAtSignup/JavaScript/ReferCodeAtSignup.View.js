// @module NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup
define('NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View'
,	[
	'netscore_ns_loyalty_rewards_refercodeatsignup.tpl'
	
	,	'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.Model'
	
	,	'Backbone'
    ]
, function (
	netscore_ns_loyalty_rewards_refercodeatsignup_tpl
	
	,	ReferCodeAtSignupModel
	
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_refercodeatsignup_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ReferCodeAtSignupModel();
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

		//@method getContext @return NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View.Context
	,	getContext: function getContext()
		{
			//@class NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
