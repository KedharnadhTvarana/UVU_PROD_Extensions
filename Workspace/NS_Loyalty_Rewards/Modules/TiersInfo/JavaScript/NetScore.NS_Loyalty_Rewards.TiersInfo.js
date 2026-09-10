
define(
	'NetScore.NS_Loyalty_Rewards.TiersInfo'
,   [
		'NetScore.NS_Loyalty_Rewards.TiersInfo.Router'
	]
,   function (
		Router
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
			if (environment_component) 
			{
				var tierlabel=environment_component.getConfig('loyaltyapp.loyaltytiers');
				var tierseq=environment_component.getConfig('loyaltyapp.tiersseq');
				var myaccountmenu = container.getComponent("MyAccountMenu");
				if(myaccountmenu){	
					var redeemhistory = {
						id: "loyaltytiers",
						groupid: "loyaltysuiteapp",
						name: tierlabel,
						index: tierseq,
						url: "tiers"
					}

					myaccountmenu.addGroupEntry(redeemhistory);
				}
				return new Router(container);
			}
		}
	};
});
