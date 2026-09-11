// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.View'
	,	'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Model'
	,   'NetScore.NS_Loyalty_Rewards.LoyaltyInfoGet.Model'
	,	'Backbone'
	]
,	function (
		LoyaltyInfoView
	,	LoyaltyInfoModel
	,   LoyaltyInfoGetModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.LoyaltyProfileUpdate.LoyaltyProfileUpdate.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'update-profile': 'updateProfileInformation'
		
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	updateProfileInformation: function() 
        { 
            var umodel = new LoyaltyInfoModel();
            var gmodel = new LoyaltyInfoGetModel(); 

            var promise = jQuery.Deferred();
            var self = this;

            gmodel.fetch({
                  
            }).done(function () {
                promise.resolve();
            });
            promise.done(function () {
                var view = new LoyaltyInfoView({model: umodel, gmodel: gmodel, application: self.application});
                view.showContent();
            });
        }
	});
});
