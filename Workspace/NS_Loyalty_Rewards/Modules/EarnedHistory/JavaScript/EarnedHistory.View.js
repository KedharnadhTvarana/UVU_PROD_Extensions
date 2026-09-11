// @module NetScore.NS_Loyalty_Rewards.EarnedHistory
define('NetScore.NS_Loyalty_Rewards.EarnedHistory.View'
,	[
	    'netscore_ns_loyalty_rewards_earnedhistory.tpl'  
	,	'Backbone'
    ,   'Profile.Model'
    ]
, function (
	    netscore_ns_loyalty_rewards_earnedhistory_tpl 
	,	Backbone
    ,   ProfileModel
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.EarnedHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_earnedhistory_tpl

	,	initialize: function (options) {
            this.application=options.application;
            this.env_comp=this.application.getComponent("Environment");
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
        	var earnedlabel=this.env_comp.getConfig("loyaltyapp.eanredhistory");
            return {
                text: earnedlabel
            ,   href: '/earned-history'
            };
        }

		//@method getContext @return NetScore.NS_Loyalty_Rewards.EarnedHistory.View.Context
	,	getContext: function getContext()
		{
			//console.log("this",this.collection.models[0]);
			
            return {
            	iseligibleforloyalty : this.model.get('iseligibleforloyalty') == 'T',
                earned_points_availble: this.model.get('earned_points'),
                earned_points: this.model.get('earned_points')|| 0,
                redeem_points_availble:this.model.get('redeem_points'),
                redeem_points:this.model.get('redeem_points') || 0,
                availble_points:this.model.get('availble_points') || 0,
                currency_symbol: ProfileModel.getInstance().get('currency').symbol,
                data: this.model.get('earned_data'),
                nopoints: this.model.get('availble_points')
            }
		}
	});
});
