define('login_register_login.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2 class=\"login-register-login-title\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginSubtitle") : stack1), depth0)) != null ? stack1 : "")
    + "</h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<legend class=\"login-register-login-description\" style=\"padding-top: 20px;\">\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Login below or <a class=\"login-register-login-register-now\" href=\"register\"\n				data-toggle=\"show-in-modal\" data-type=\"register-now\">create an account</a>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":24,"column":81}}}))
    + "</legend>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<legend class=\"login-register-login-description\" style=\"padding-top: 20px;\">\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginText") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":3},"end":{"line":27,"column":98}}})) != null ? stack1 : "")
    + "</legend>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginText") : stack1), depth0)) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " autofocus ";
},"10":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\n			<div class=\"login-register-login-form-controls\" data-validation=\"control\">\n				<input value=\"true\" type=\"hidden\" name=\"redirect\">\n			</div>\n		</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"GlobalMessageSessionTimeout\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraLoginRegisterLoginView") : depth0)) != null ? compilerNameLookup(stack1,"loginSubtitle") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n<form class=\"login-register-login-form\" novalidate>\n	<fieldset class=\"login-register-login-form-fieldset\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSkipLogin") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + "		<small class=\"login-register-login-required\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required <span\n				class=\"login-register-login-form-required\">*</span>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":47},"end":{"line":30,"column":58}}}))
    + "</small>\n		<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\n			<label class=\"login-register-login-form-label\" for=\"login-email\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email Address <small class=\"login-register-login-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":33,"column":93}}}))
    + "\n			</label>\n			<div class=\"login-register-login-form-controls\" data-validation=\"control\">\n				<input "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasAutoFocus") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":11},"end":{"line":36,"column":49}}})) != null ? stack1 : "")
    + " type=\"email\" name=\"email\" id=\"login-email\"\n					class=\"login-register-login-form-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":37,"column":58},"end":{"line":37,"column":88}}}))
    + "\" required />\n			</div>\n		</div>\n\n		<div class=\"login-register-login-form-controls-group\" data-validation=\"control-group\">\n			<label class=\"login-register-login-form-label\" for=\"login-password\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Password <small class=\"login-register-login-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":4},"end":{"line":43,"column":88}}}))
    + "\n			</label>\n			<div class=\"login-register-login-form-controls\" data-validation=\"control\">\n				<input type=\"password\" name=\"password\" id=\"login-password\" class=\"login-register-login-form-input\"\n					required />\n			</div>\n		</div>\n\n		<div data-view=\"Login.CustomFields\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":2},"end":{"line":59,"column":9}}})) != null ? stack1 : "")
    + "\n		<div data-type=\"alert-placeholder\" class=\"login-register-login-form-messages\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUserSessionTimedOut") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":3},"end":{"line":64,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n\n		<div class=\"login-register-login-form-controls-group\" data-type=\"form-login-action\">\n\n			<button type=\"submit\" class=\"login-register-login-submit\" data-action=\"login-button\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Log In",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":70,"column":4},"end":{"line":70,"column":26}}}))
    + "\n			</button>\n\n			<a class=\"login-register-login-forgot\" data-action=\"forgot-password\" href=\"/forgot-password\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Forgot password?",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":74,"column":4},"end":{"line":74,"column":36}}}))
    + "\n			</a>\n		</div>\n	</fieldset>\n</form>\n<div data-cms-area=\"cms_login_register_login_area\" data-cms-area-filters=\"path\"></div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_login'; return template;});