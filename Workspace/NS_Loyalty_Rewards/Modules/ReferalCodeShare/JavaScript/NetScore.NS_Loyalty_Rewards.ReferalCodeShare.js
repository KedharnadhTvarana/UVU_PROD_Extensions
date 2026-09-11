
define(
	'NetScore.NS_Loyalty_Rewards.ReferalCodeShare'
,   [
		'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Router'
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
				var referlabel=environment_component.getConfig('loyaltyapp.referearn');
				var referseq=environment_component.getConfig('loyaltyapp.referfrndseq');
				var myaccountmenu = container.getComponent("MyAccountMenu");
				if(myaccountmenu){	
					var redeemhistory = {
						id: "refernearn",
						groupid: "loyaltysuiteapp",
						name: referlabel,
						index: referseq,
						url: "referfriend"
					}

					myaccountmenu.addGroupEntry(redeemhistory);
				}
				return new Router(container);
			}

		}
	};
});
