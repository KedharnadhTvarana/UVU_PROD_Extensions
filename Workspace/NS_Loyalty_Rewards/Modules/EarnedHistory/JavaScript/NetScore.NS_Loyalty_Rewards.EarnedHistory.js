define(
	'NetScore.NS_Loyalty_Rewards.EarnedHistory'
	,   [
	'NetScore.NS_Loyalty_Rewards.EarnedHistory.Router',
	'NetScore.NS_Loyalty_Rewards.EarnedHistory.NotEligible.View',
	'NetScore.NS_Loyalty_Rewards.RedeemHistory',
	'NetScore.NS_Loyalty_Rewards.ReferalCodeShare',
	'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate',		
	'NetScore.NS_Loyalty_Rewards.TiersInfo',
	'NetScore.NS_Loyalty_Rewards.LoyaltyInfo'
	]
	,   function (
		Router,
		NotEligibleView,
		RedeemHistory,
		ReferalCodeShare,
		GenerateGiftCertificate,
		TiersInfo,
		LoyaltyInfo
		
		)
	{
		'use strict';

		return  {
			mountToApp: function mountToApp (container)
			{
				
				var userprofilecomponent = container.getComponent('UserProfile');
				function getuserProfileObj() {
					return new Promise(function(resolve, reject) {
						userprofilecomponent.getUserProfile().done(function(profile) {

							if(profile){
								resolve(profile);
							}
							else{
								reject('error')
							}
						});
					});
				}



				getuserProfileObj().then(function(data) {
			// Run this when your request was successful
			var userProfile = data; 

			var customer = userProfile.internalid;
			var customfields = userProfile.customfields;
			var custAdmin;
			_.each(customfields, function(custom){
				if(custom.id == "custentity_loyalty_program"){
					custAdmin = custom.value;
				}
			})
			//var custAdmin = userProfile.customfields[0].value;
			if(custAdmin == true){


				var layout = container.getComponent('Layout');
				var environment_component = container.getComponent("Environment");
				if (environment_component) {
					var isLoyaltyEnabled = environment_component.getConfig("loyaltyapp.enableloyaltyprogram");
					if(isLoyaltyEnabled){
						if (layout) {
							layout.registerView('noteligible', function() {
								return new NotEligibleView({env_comp: environment_component});
							});
						}
						var loyaltyLabel = environment_component.getConfig("loyaltyapp.programlabel");
						var loyaltyProgSeq = environment_component.getConfig("loyaltyapp.loyaltymainseq");
						var earnedlabel = environment_component.getConfig("loyaltyapp.eanredhistory");
						var earnedSeq = environment_component.getConfig("loyaltyapp.earnedseq");
						var isredeemhistoryEnabled = environment_component.getConfig("loyaltyapp.enableredeemhistory");
						var isReferEnabled = environment_component.getConfig("loyaltyapp.enablereferfriend");
						var isGCEnabled = environment_component.getConfig("loyaltyapp.enablegcredeem");
						var isTiersEnabled = environment_component.getConfig("loyaltyapp.enableTiersinfo");
						var isProfileEnabled = environment_component.getConfig("loyaltyapp.enableprofileinfo");
						var myaccountmenu = container.getComponent("MyAccountMenu");

						if(myaccountmenu){

							var loyaltyMenu = {
								id: "loyaltysuiteapp",
								name: loyaltyLabel,
								index: loyaltyProgSeq
							}
							myaccountmenu.addGroup(loyaltyMenu);

							var eanredhistory = {
								id: "eanredhistory",
								groupid: "loyaltysuiteapp",
								name:  earnedlabel,
								index: earnedSeq, 
								url: "earned-history"
							}

							myaccountmenu.addGroupEntry(eanredhistory);
						}
						if(isredeemhistoryEnabled)
							RedeemHistory.mountToApp(container);
						if(isReferEnabled)
							ReferalCodeShare.mountToApp(container);
						if(isGCEnabled)
							GenerateGiftCertificate.mountToApp(container);
						if(isTiersEnabled)
							TiersInfo.mountToApp(container);
						if(isProfileEnabled)
							LoyaltyInfo.mountToApp(container);
						return new Router(container);
					}
				}



			}
		});



				

			}
		};
	});
