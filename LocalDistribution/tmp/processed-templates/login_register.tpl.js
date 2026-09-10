define('login_register.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<h2 class=\"login-register-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Log in | Register",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":35},"end":{"line":21,"column":68}}}))
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<h2 class=\"login-register-title login-register-title-noregister\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Log in",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":67},"end":{"line":23,"column":89}}}))
    + "</h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"login-register-body\" ";
},"7":function(container,depth0,helpers,partials,data) {
    return " class=\"login-register-body-colored\" ";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"login-register-wrapper-column-login\">\n			<div class=\"login-register-wrapper-login\" data-view=\"Login\"></div>\n		</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"login-register-wrapper-column-register\">\n			<div class=\"login-register-wrapper-register\">\n				<h2 class=\"login-register-title-register\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"New customer",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":46},"end":{"line":40,"column":74}}}))
    + "</h2>\n				<h3 class=\"visually-hidden\">THE OFFICIAL ONLINE STORE OF UTAH VALLEY UNIVERSITY</h3>\n\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCheckoutAsGuest") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":46,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":50,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"login-register-wrapper-guest\" data-view=\"CheckoutAsGuest\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCheckoutAsGuest") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":16},"end":{"line":49,"column":58}}})) != null ? stack1 : "")
    + " \" data-view=\"Register\" id=\"register-view\"></div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "collapse";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<style>\n	.visually-hidden {\n		position: absolute;\n		width: 1px;\n		height: 1px;\n		margin: -1px;\n		border: 0;\n		padding: 0;\n		overflow: hidden;\n		clip: rect(0, 0, 0, 0);\n		white-space: nowrap;\n		color: #757575;\n\n	}\n</style>\n<section class=\"login-register\">\n\n	<header class=\"login-register-header\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":24,"column":9}}})) != null ? stack1 : "")
    + "	</header>\n\n	<div data-view=\"Messages\"></div>\n\n	<div "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":29,"column":6},"end":{"line":29,"column":107}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLogin") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":35,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegisterOrGuest") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":2},"end":{"line":53,"column":9}}})) != null ? stack1 : "")
    + "\n	</div>\n</section>\n\n\n<script>\n	function updateAriaInvalid(inputs) {\n		inputs.forEach(input => {\n			const errorMsg = input.nextElementSibling && input.nextElementSibling.getAttribute('data-validation-error') === 'block';\n			console.log(\"🚀 ~ updateAriaInvalid ~ errorMsg:\", errorMsg);\n			if (errorMsg) {\n				input.setAttribute('aria-invalid', 'true');\n			} else {\n				// If no error message directly follows the input, check for error message after additional text\n				const errorMsgAfterText = input.nextElementSibling && input.nextElementSibling.nextElementSibling && input.nextElementSibling.nextElementSibling.getAttribute('data-validation-error') === 'block';\n				if (errorMsgAfterText) {\n					input.setAttribute('aria-invalid', 'true');\n				} else {\n					input.setAttribute('aria-invalid', 'false');\n				}\n			}\n		});\n	}\n\n	// Get all login and register input fields excluding type \"hidden\" and \"checkbox\"\n	const loginInputs = document.querySelectorAll('.login-register-login-form-controls input:not([type=\"hidden\"]):not([type=\"checkbox\"])');\n	const registerInputs = document.querySelectorAll('.login-register-register-form-controls input:not([type=\"hidden\"]):not([type=\"checkbox\"])');\n\n	// Initial update of aria-invalid attributes\n	updateAriaInvalid(loginInputs);\n	updateAriaInvalid(registerInputs);\n\n	// Function to add event listeners for focus, input, and blur events\n	function addValidationEventListeners(inputs) {\n		inputs.forEach(input => {\n			input.addEventListener('focus', function () {\n				updateAriaInvalid(loginInputs);\n				updateAriaInvalid(registerInputs);\n			});\n\n			input.addEventListener('input', function () {\n				updateAriaInvalid(loginInputs);\n				updateAriaInvalid(registerInputs);\n			});\n\n			input.addEventListener('blur', function () {\n				updateAriaInvalid(loginInputs);\n				updateAriaInvalid(registerInputs);\n			});\n		});\n	}\n\n	// Add event listeners to detect changes in login and register input fields\n	addValidationEventListeners(loginInputs);\n	addValidationEventListeners(registerInputs);\n</script>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register'; return template;});