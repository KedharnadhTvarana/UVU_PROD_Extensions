
function service(request, response)
{
	'use strict';
	try 
	{
		require('Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}