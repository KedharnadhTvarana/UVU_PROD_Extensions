
define(
	'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup'
,   [
		'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View'
	]
,   function (
		ReferCodeAtSignupView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{		
	      	var LoginRegisterPage = container.getComponent('LoginRegisterPage');

		  	if (LoginRegisterPage){
			  	LoginRegisterPage.addChildView('Register.CustomFields', function ()
				{
				  return new ReferCodeAtSignupView({LoginRegisterPage: LoginRegisterPage});	
				});
	   		}

		}
	};
});
