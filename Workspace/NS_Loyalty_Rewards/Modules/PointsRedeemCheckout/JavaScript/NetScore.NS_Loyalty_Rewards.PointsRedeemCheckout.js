
define(
	'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout'
,   [
		'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View',
		'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup'
	]
,   function (
		PointsRedeemCheckoutView,
		ReferCodeAtSignup
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
			var environment_component = container.getComponent("Environment");
			var isenableLoyalty=environment_component.getConfig('loyaltyapp.enableloyaltyprogram');
			var isSignupenabled=environment_component.getConfig('loyaltyapp.enablereferralcodesignup');
			var isEnablePointsredeem=environment_component.getConfig('loyaltyapp.enableRedeemPointsCheckout');
			
			if(isenableLoyalty && isSignupenabled){
				ReferCodeAtSignup.mountToApp(container);
			}
			if(isEnablePointsredeem){
				var checkout = container.getComponent('Checkout');

			    checkout.addModuleToStep(
			    {
			        step_url: 'opc'
			      , module: {
			          id: 'PointsRedeemCheckoutView'
			        , index: 5
			        , classname: 'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View'
			        }
			    });

			    checkout.addModuleToStep(
			    {
			        step_url: 'billing'
			      , module: {
			          id: 'PointsRedeemCheckoutView'
			        , index: 3
			        , classname: 'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View'
			        }
			    });
			}
		}
	};
});
