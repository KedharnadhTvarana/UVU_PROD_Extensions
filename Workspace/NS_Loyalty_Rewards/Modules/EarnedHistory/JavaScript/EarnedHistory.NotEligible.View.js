// @module NetScore.NS_Loyalty_Rewards.EarnedHistory
define('NetScore.NS_Loyalty_Rewards.EarnedHistory.NotEligible.View'
,	[
	    'netscore_ns_loyalty_rewards_earnedhistory_not_eligible.tpl'  
	,	'Backbone'
    ,   'Profile.Model'
    ]
, function (
	    netscore_ns_loyalty_rewards_earnedhistory_not_eligible_tpl 
	,	Backbone
    ,   ProfileModel
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.EarnedHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_earnedhistory_not_eligible_tpl

	,	initialize: function (options) {
            this.env_comp=options.env_comp;
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,   getSelectedMenu: function ()
        {
            return 'eanredhistory';
        }

        //@method getBreadcrumbPages
    ,   getBreadcrumbPages: function ()
        {
            return {
                text: this.title
            ,   href: '/earned-history'
            };
        }

		//@method getContext @return NetScore.NS_Loyalty_Rewards.EarnedHistory.View.Context
	,	getContext: function getContext()
		{
			//console.log("this",this.collection.models[0]);
			
            return {
            	email : this.env_comp.getConfig('loyaltyapp.mailtonoteligible'),
            	message: this.env_comp.getConfig('loyaltyapp.messagenoteligible')
            }
		}
	});
});
