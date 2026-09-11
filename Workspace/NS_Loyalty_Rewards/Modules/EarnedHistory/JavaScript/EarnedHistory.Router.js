// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.EarnedHistory.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.EarnedHistory.View' ,
		'NetScore.NS_Loyalty_Rewards.EarnedHistory.Model'
	,	'Backbone'
	]
,	function (
		EarnedHistoryView
	,	EarnedHistoryModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.LoyaltyEarnedHistory.LoyaltyEarnedHistory.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'earned-history': 'loyaltyHistory'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	loyaltyHistory: function () {
            var model = new EarnedHistoryModel();
            var view = new EarnedHistoryView({model: model, application: this.application});
            model.fetch().done(function() {
                view.showContent();
            });
        }
	});
});
