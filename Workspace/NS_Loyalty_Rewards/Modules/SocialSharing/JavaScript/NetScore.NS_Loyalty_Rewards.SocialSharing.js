
define('NetScore.NS_Loyalty_Rewards.SocialSharing'
,   [
		'NetScore.NS_Loyalty_Rewards.SocialSharing.View'
	]
,   function (
		SocialSharingView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var environment_component = container.getComponent("Environment");
			var pdp = container.getComponent('PDP');
			var fb_app_id=environment_component.getConfig("loyaltyapp.facebookappid");
			var pageURL = window.location.href.slice(window.location.href.indexOf('?') + 1);
			if(pdp)
			{
				pdp.addChildViews(
					'ProductDetails.Full.View'
				,	{
						'SocialSharing.Flyout': {
							'NetScore.NS_Loyalty_Rewards.SocialSharing.View':
							{
								childViewIndex: 10
							,	childViewConstructor: function()
								{
									//collection.fetch();

									return new SocialSharingView({
										pdp: pdp,
										FBappid: fb_app_id,
										pageURL: pageURL,
										env_comp: environment_component
									});
								}
							}
						}
					}
				);
			}
		}
	};
});
