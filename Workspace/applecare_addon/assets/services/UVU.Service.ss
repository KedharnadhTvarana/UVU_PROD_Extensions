
function service(request, response)
{
	'use strict';
	try 
	{
		require('Tvarana.UVU.UVU.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Tvarana.UVU.UVU.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}