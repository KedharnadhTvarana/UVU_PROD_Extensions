
define(
	'NetScore.NS_Loyalty_Rewards.LoyaltyInfo'
,   [
		'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Router'
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
				var profielLabel=environment_component.getConfig('loyaltyapp.updateprofile');
				var profileseq=environment_component.getConfig('loyaltyapp.profileupdateseq');
				var myaccountmenu = container.getComponent("MyAccountMenu");
				if(myaccountmenu){	
					var redeemhistory = {
						id: "profileupdate",
						groupid: "loyaltysuiteapp",
						name: profielLabel,
						index: profileseq,
						url: "update-profile"
					}

					myaccountmenu.addGroupEntry(redeemhistory);
				}
				return new Router(container);
			}			
		}
	};
});
