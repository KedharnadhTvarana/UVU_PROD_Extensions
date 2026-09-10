// @module NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate
define('NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Model'
	,	'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View'
	,	'Backbone'
    ]
, function (
		GenerateGiftCertificateModel
	,	GenerateGiftCertificateView
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View @extends Backbone.View
	return Backbone.Router.extend({

		initialize: function (application) {
			this.application = application;
		}

	,	routes: {
          'generategiftcard': 'generateGiftcard'
        }

	,	generateGiftcard: function() 
        {
            var model = new GenerateGiftCertificateModel();
            var self = this;
            model.fetch({
           
            }).done(function () {
                var view = new GenerateGiftCertificateView({model: model, application: self.application});
                view.showContent();
            });
        }
	});
});
