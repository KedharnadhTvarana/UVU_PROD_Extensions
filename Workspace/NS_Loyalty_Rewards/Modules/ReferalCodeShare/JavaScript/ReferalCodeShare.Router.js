// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.View'
	,	'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Model'
	,	'Backbone'
	]
,	function (
		ReferalCodeShareView
	,	ReferalCodeShareModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.ReferandEarn.ReferandEarn.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'referfriend': 'referfriend'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	referfriend: function() 
        {
            var model = new ReferalCodeShareModel();
            var promise = jQuery.Deferred();
            var self = this;

            model.fetch({
                  
            }).done(function () {
                promise.resolve();
            });
            promise.done(function () {
                var view = new ReferalCodeShareView({model: model, application: self.application});
                view.showContent();
            });
        }
	});
});
