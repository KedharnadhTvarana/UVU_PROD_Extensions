
define(
	'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate'
,   [
		'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Router'
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
			if (environment_component) {
				var gclabel = environment_component.getConfig("loyaltyapp.generategiftcard");
				var gcseq = environment_component.getConfig("loyaltyapp.gcgen");
				var myaccountmenu = container.getComponent("MyAccountMenu");
                if(myaccountmenu){
                    var generategiftcard = {
                        id: "generategiftcard",
                        groupid: "loyaltysuiteapp",
                        name: gclabel,
                        index: gcseq,
                        url: "generategiftcard"
                    }
                    myaccountmenu.addGroupEntry(generategiftcard);
                }
                return new Router(container);
			}

		}
	};
});
