
define(
	'Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation'
	, [
		'Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View'
	]
	, function (
		HeaderMenuCustomisationView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {


				function isMyAccountPage(url) {
					return url.includes('my_account');
				}

				var currentUrl = window.location.pathname.toLowerCase();
				var Checkout = container.getComponent('Checkout');
				if (Checkout == null && isMyAccountPage(currentUrl) == false) {
					var HomeView = require('Home.View');

					_.extend(HomeView.prototype, {
						getContext: _.wrap(HomeView.prototype.getContext, function (originalFunction) {
							var context = originalFunction.apply(this, _.toArray(arguments).slice(1));

							return _.extend(context, {
								hideCarouselImages: SC.CONFIGURATION.home.hideCarouselImages

							});
						})
					});
				}

			}
		};
	});
