// @module NetScore.NS_Loyalty_Rewards.RedeemHistory
define('NetScore.NS_Loyalty_Rewards.RedeemHistory.View'
,	[
		'netscore_ns_loyalty_rewards_redeemhistory.tpl'
	,	'NetScore.NS_Loyalty_Rewards.RedeemHistory.Model'
	,	'Backbone'
    ]
, function (
		netscore_ns_loyalty_rewards_redeemhistory_tpl
	,	RedeemHistoryModel
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.RedeemHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_redeemhistory_tpl

	,	initialize: function (options) {

			this.application=options.application;
			this.env_comp=this.application.getComponent('Environment');
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,    getSelectedMenu: function ()
        {
            return 'loyalty-used';
        }

        //@method getBreadcrumbPages
    ,    getBreadcrumbPages: function ()
        {
        	var redeemlabel=this.env_comp.getConfig('loyaltyapp.redeemhistory');
            return {
                text: redeemlabel
            ,   href: '/loyalty-used'
            };
        }

		//@method getContext @return NetScore.NS_Loyalty_Rewards.RedeemHistory.View.Context
	,	getContext: function getContext()
		{
			console.log("text", this.model.get('data'));

            var fileUrl;
            var protocol=location.protocol;
            var hostname=window.location.hostname;
            var basicURL=protocol+"//"+hostname;
            console.log(basicURL);
			return {
				 isnotempty: this.model.get('isdata') == true || false,
				 iseligibleforloyalty: this.model.get('iseligibleforloyalty') == 'T',
				 data: this.model.get('earned_data'),
				 basicURL: basicURL
			};
		}
	});
});
