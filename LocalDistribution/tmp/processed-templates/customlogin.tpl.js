define('customlogin.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"login-register-wrapper-sso-login\">\n    <h2 class=\"login-register-login-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"$(0)",(depth0 != null ? compilerNameLookup(depth0,"loginTitle") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":43},"end":{"line":3,"column":74}}}))
    + "</h2>\n    <p class=\"login-register-login-description\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"$(0)",(depth0 != null ? compilerNameLookup(depth0,"loginMessage") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":48},"end":{"line":4,"column":81}}}))
    + "</p>\n    <div class=\"login-register-login-sso-separator-btn-container\"><div class=\"login-register-login-sso-separator-btn\"><a class=\"login-register-login-sso-btn\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"ssoURL") || (depth0 != null ? compilerNameLookup(depth0,"ssoURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"ssoURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":164},"end":{"line":5,"column":174}}}) : helper)))
    + "\"> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"$(0)",(depth0 != null ? compilerNameLookup(depth0,"loginButtonLabel") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":177},"end":{"line":5,"column":214}}}))
    + " </a></div></div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isSSOEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NSeComm/CustomLogin/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'customlogin'; return template;});