define('NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints'
,   [
		'NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View',
		'NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.PLP.View',
		'NetScore.NS_Loyalty_Rewards.SocialSharing',
		'Utils'
	]
,   function (
		DisplayLoyaltyPointsView,
		DisplayLoyaltyPointsPLPView,
		SocialSharing,
		Utils
	)
{
	'use strict';
	var _container=null;
	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			_container=container;
			var layout = container.getComponent('Layout');
			var environment_component = container.getComponent("Environment");
			if (environment_component) {
				var isLoyaltyEnabled = environment_component.getConfig("loyaltyapp.enableloyaltyprogram");
				var isPointsDisplayPLP=environment_component.getConfig("loyaltyapp.enablepointsdisplayplp");
				var isPointsDisplayPDP=environment_component.getConfig("loyaltyapp.enablepointsdisplaypdp");
				var isEmailShareEnabled=environment_component.getConfig("loyaltyapp.enableemailshare");
				var isFBShareEnabled=environment_component.getConfig("loyaltyapp.enablefbshare");
				if(isLoyaltyEnabled){
					var url=Utils.getAbsoluteUrl(getExtensionAssetsPath('services/DisplayLoyaltyPoints.Service.ss'));
					$.ajax({url: url, success: function(result){
						SC.LOYALTY_DATA=result;
						//console.log('SC',SC);
		    		}});
					if(isPointsDisplayPLP){
						var pdp = container.getComponent('PDP');
						if(pdp)
						{
							pdp.addChildViews(
								'ProductDetails.Full.View'
							,	{
									'Product.Price': {
										'Netscore.DisplayLoyaltyPoints.DisplayLoyaltyPoints.View':
										{
											childViewIndex: 10
										,	childViewConstructor: function()
											{
												return new DisplayLoyaltyPointsView({
													pdp: pdp,
													env_component: environment_component
												});
											}
										}
									}
								}
							);
						}
					}

					if(isPointsDisplayPDP){
						var plp = container.getComponent('PLP');
						if(plp)
						{
							plp.addChildViews(
								'Facets.Browse.View'
							,	{
									'StockDescription': {
										'Netscore.DisplayLoyaltyPoints.DisplayLoyaltyPoints.PLP.View':
										{
											childViewIndex: 5
										,	childViewConstructor: function()
											{
												return new DisplayLoyaltyPointsPLPView({
													plp: plp,
													env_component: environment_component
												});
											}
										}
									}
								}
							);
						}
					}

					if(isEmailShareEnabled || isFBShareEnabled){
						SocialSharing.mountToApp(container);
					}
				}
			}

		},
		getLoyaltyConfigValue: function getLoyaltyConfigValue(key){
			if(key)
			{
				var env_component = _container.getComponent("Environment");
				if (env_component) {
					var key_value = env_component.getConfig(key);
					return key_value;
				}
			}
			return '';
		}
	};
});
