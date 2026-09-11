
define(
	'NetScore.NS_Loyalty_Rewards.RedeemHistory'
,   [
		'NetScore.NS_Loyalty_Rewards.RedeemHistory.Router'
	]
	,   function (
			Router
		)
	{
		'use strict';

		return  {
			mountToApp: function mountToApp (container)
			{
				var environment_component = container.getComponent("Environment");
				if (environment_component) 
				{
					var redeemlabel=environment_component.getConfig('loyaltyapp.redeemhistory');
					var redeemseq=environment_component.getConfig('loyaltyapp.redeemseq');
					var myaccountmenu = container.getComponent("MyAccountMenu");
					if(myaccountmenu){	
						var redeemhistory = {
							id: "loyaltyredeem",
							groupid: "loyaltysuiteapp",
							name: redeemlabel,
							index: redeemseq,
							url: "loyalty-used"
						}

						myaccountmenu.addGroupEntry(redeemhistory);
					}
					return new Router(container);
				}

			}
		};
	});
