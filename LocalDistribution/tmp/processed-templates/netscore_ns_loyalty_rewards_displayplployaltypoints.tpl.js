define('netscore_ns_loyalty_rewards_displayplployaltypoints.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"points") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "  <div id=\"show-points\" class=\"plp_show\">\n    <h2><span class=\"pts_item\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"points") || (depth0 != null ? compilerNameLookup(depth0,"points") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"points","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":41}}}) : helper)))
    + " </br>Pts</span></h2>\n    <h3 class=\"pts_text\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Earn $(0) Reward Points for this product purchase",(depth0 != null ? compilerNameLookup(depth0,"points") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":97}}}))
    + "</span></h3>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isProductEligible") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetScore/NS_Loyalty_Rewards/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netscore_ns_loyalty_rewards_displayplployaltypoints'; return template;});