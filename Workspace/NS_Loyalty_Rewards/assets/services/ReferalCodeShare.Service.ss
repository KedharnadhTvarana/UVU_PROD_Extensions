
function service(request, response)
{
	'use strict';
	try 
	{
		require('NetScore.NS_Loyalty_Rewards.ReferalCodeShare.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('NetScore.NS_Loyalty_Rewards.ReferalCodeShare.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}