// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.TiersInfo.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.TiersInfo.View'
	,	'NetScore.NS_Loyalty_Rewards.TiersInfo.Model'
	,	'Backbone'
	]
,	function (
		TiersInfoView
	,	TiersInfoModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.CustomerTiers.CustomerTiers.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
            'tiers': 'tiersList'
        }

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	tiersList: function () {
            var model = new TiersInfoModel();
            var view = new TiersInfoView({model: model, application: this.application});
            model.fetch().done(function() {
                view.showContent();
            });
        }
	});
});
