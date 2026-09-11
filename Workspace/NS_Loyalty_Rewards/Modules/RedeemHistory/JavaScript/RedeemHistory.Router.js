// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.RedeemHistory.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.RedeemHistory.View'
	,	'NetScore.NS_Loyalty_Rewards.RedeemHistory.Model'
	,	'Backbone'
	]
,	function (
		RedeemHistoryView
	,	RedeemHistoryModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.LoyaltyRedeemedHistory.LoyaltyRedeemedHistory.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'loyalty-used': 'loyaltyRedeemed',
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	loyaltyRedeemed: function () {
            var model = new RedeemHistoryModel();
            var view = new RedeemHistoryView({model: model, application: this.application});
                model.fetch().done(function() {
                view.showContent();
            });
        }
	});
});
