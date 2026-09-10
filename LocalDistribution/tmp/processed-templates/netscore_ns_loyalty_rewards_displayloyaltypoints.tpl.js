define('netscore_ns_loyalty_rewards_displayloyaltypoints.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"minimum_points") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"minimum_points") : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":22,"column":19}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"maximum_points") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":10,"column":15}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div id=\"show-points\">\n            <p class=\"single_pro\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Earn <span class=\"single_pnt\">$(0) - $(1) </span> Reward Points",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"minimum_points") : stack1),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"maximum_points") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":8,"column":69}}}))
    + "</p>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"maximum_points") : stack1),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":21,"column":19}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"points") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "        <div id=\"show-points\" class=\"plp_show now_shw\">\n            <h2><span class=\"pts_item\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"points") : stack1), depth0))
    + " </br>Pts</span></h2>\n            <h3 class=\"pts_text\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Earn $(0) Reward Points for this product purchase",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"points_obj") : depth0)) != null ? compilerNameLookup(stack1,"points") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":18,"column":35}}}))
    + "</span></h3>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"loyaltypointspdp-layout\">\n    <div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isProductEligible") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n</section>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetScore/NS_Loyalty_Rewards/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netscore_ns_loyalty_rewards_displayloyaltypoints'; return template;});