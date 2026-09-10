define('login_register_checkout_as_guest.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<button href=\"#\" class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\"\n		data-target=\"#guest-show-view,#guest-view\">\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":10,"column":37}}}))
    + "\n	</button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "	<form class=\"login-register-checkout-as-guest-form\" method=\"POST\" novalidate>\n		<div class=\"login-register-checkout-as-guest-control-group\">\n			<button type=\"submit\" class=\"login-register-checkout-as-guest-submit\">\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":16,"column":39}}}))
    + "\n			</button>\n		</div>\n	</form>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a Guest",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":25,"column":37}}}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout as a guest and you will have an opportunity to create an account when you are finished.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":27,"column":114}}}))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\n			<label class=\"login-register-checkout-as-guest-control-label\" for=\"guest-firstname\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"First Name <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":35,"column":97}}}))
    + "\n			</label>\n			<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\n				<input type=\"text\" name=\"firstname\" id=\"guest-firstname\" class=\"login-register-checkout-as-guest-input\">\n			</div>\n		</div>\n\n		<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\n			<label class=\"login-register-checkout-as-guest-control-label\" for=\"guest-lastname\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Name <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":44,"column":96}}}))
    + "\n			</label>\n			<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\n				<input type=\"text\" name=\"lastname\" id=\"guest-lastname\" class=\"login-register-checkout-as-guest-input\">\n			</div>\n		</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"login-register-checkout-as-guest-form-controls-group\" data-validation=\"control-group\">\n			<div class=\"login-register-checkout-as-guest-register-form-controls\" data-validation=\"control\">\n				<input value=\"true\" type=\"hidden\" name=\"redirect\" id=\"redirect\">\n			</div>\n		</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"login-register-checkout-as-guest-control-group\" data-validation=\"control-group\">\n			<label class=\"login-register-checkout-as-guest-control-label\" for=\"guest-email\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email Address <small class=\"login-register-checkout-as-guest-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":63,"column":4},"end":{"line":63,"column":100}}}))
    + "\n			</label>\n			<div class=\"login-register-checkout-as-guest-controls\" data-validation=\"control\">\n				<input type=\"email\" name=\"email\" id=\"guest-email\" class=\"login-register-checkout-as-guest-input\"\n					placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":48}}}))
    + "\" value=\"\">\n				<p class=\"login-register-checkout-as-guest-help-block\">\n					<small>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"We need your email address to contact you about your order.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":69,"column":87}}}))
    + "</small>\n				</p>\n			</div>\n		</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<hr>\n<div class=\"login-register-checkout-as-guest-register-header collapse in\" id=\"register-show-view\">\n	<p class=\"login-register-checkout-as-guest-description\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create an account and take advantage of faster checkouts and other great benefits.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":89,"column":2},"end":{"line":89,"column":100}}}))
    + "\n	</p>\n	<button class=\"login-register-checkout-as-guest-button-show\" data-toggle=\"collapse\"\n		data-target=\"#register-show-view,#register-view\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":93,"column":2},"end":{"line":93,"column":32}}}))
    + "\n	</button>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"login-register-checkout-as-guest-header collapse "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":61},"end":{"line":1,"column":98}}})) != null ? stack1 : "")
    + "\"\n	id=\"guest-show-view\">\n\n	<p class=\"login-register-checkout-as-guest-description\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Checkout as a guest and you will have an opportunity to create an account when you are finished.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":114}}}))
    + "\n	</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"expandGuestUserEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":7,"column":1},"end":{"line":20,"column":8}}})) != null ? stack1 : "")
    + "</div>\n<div class=\"login-register-checkout-as-guest-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":59},"end":{"line":22,"column":88}}})) != null ? stack1 : "")
    + "\" id=\"guest-view\">\n	<p class=\"login-register-checkout-as-guest-description\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + "	</p>\n	<form class=\"login-register-checkout-as-guest-form\" method=\"POST\" novalidate>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGuestFirstandLastname") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":2},"end":{"line":50,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":2},"end":{"line":58,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGuestEmail") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":2},"end":{"line":73,"column":9}}})) != null ? stack1 : "")
    + "\n		<div class=\"login-register-checkout-as-guest-form-messages\" data-type=\"alert-placeholder\"></div>\n\n		<div class=\"login-register-checkout-as-guest-control-group\">\n			<button type=\"submit\" class=\"login-register-checkout-as-guest-submit\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Proceed to Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":4},"end":{"line":79,"column":39}}}))
    + "\n			</button>\n		</div>\n	</form>\n</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRegister") : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":0},"end":{"line":96,"column":11}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_checkout_as_guest'; return template;});