define('netscore_ns_loyalty_rewards_pointsredeemcheckout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isEligibleforLoyalty") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":37,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isHavingPoints") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":36,"column":7}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2 class=\"order-wizard-paymentmethod-selector-module-header\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":62},"end":{"line":4,"column":71}}}) : helper)))
    + "</h2>\n<div id=\"trans-body\" class=\"box-column\">\n  <h3 class=\"r-p-stock\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You have <span class=\"highlited-txt\">$(0)</span> Points available to spend (<span\n      class=\"highlited-txt1\">$(1)$(2)",(depth0 != null ? compilerNameLookup(depth0,"points") : depth0),(depth0 != null ? compilerNameLookup(depth0,"currency_symbol") : depth0),(depth0 != null ? compilerNameLookup(depth0,"available_amount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":24},"end":{"line":7,"column":80}}}))
    + "</span>)</h3>\n  <h3 class=\"r-p-stock\">Order Amount that You Could Redeem : <span\n      class=\"highlited-txt1\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currency_symbol") || (depth0 != null ? compilerNameLookup(depth0,"currency_symbol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_symbol","hash":{},"data":data,"loc":{"start":{"line":9,"column":29},"end":{"line":9,"column":48}}}) : helper)))
    + alias4(((helper = (helper = compilerNameLookup(helpers,"temp_sub_total") || (depth0 != null ? compilerNameLookup(depth0,"temp_sub_total") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temp_sub_total","hash":{},"data":data,"loc":{"start":{"line":9,"column":48},"end":{"line":9,"column":66}}}) : helper)))
    + "</span></h3>\n  <input type=\"checkbox\" id=\"use-all-points\"><label for=\"use-all-points\" class=\"sc-value-sku\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tick box to\n    use all available\n    Loyalty Points on this purchase",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":94},"end":{"line":12,"column":38}}}))
    + "</label>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"is_temp_apply_amount") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":32,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"clearfix\"></div>\n  <p id=\"error-msg\" style=\"display: none;color: #e23200; margin-top: 13px;\"></p>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "  <input type=\"text\" id=\"enter-points\" class=\"points-inp input-large\" name=\"enter-points\"\n    value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"temp_applied_points") || (depth0 != null ? compilerNameLookup(depth0,"temp_applied_points") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"temp_applied_points","hash":{},"data":data,"loc":{"start":{"line":15,"column":11},"end":{"line":15,"column":34}}}) : helper)))
    + "\" aria-label=\"Enter Points\">\n  <p id=\"spend-points-show\" class=\"spen-text\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"You will be spending\n    <span id=\"spend-points\"></span> points\n    <span class=\"spen-text1\">(Saving $(0)<span id=\"spend-amount\">$(1)</span>)</span>\n    ",(depth0 != null ? compilerNameLookup(depth0,"currency_symbol") : depth0),(depth0 != null ? compilerNameLookup(depth0,"temp_apply_amount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":46},"end":{"line":19,"column":41}}}))
    + "\n  </p>\n  <button id=\"apply-points\" class=\"button-primary apply-btn\">Apply</button>\n  <button id=\"remove-points\" class=\"button-primary remove-btn\">Remove</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "  <input type=\"text\" id=\"enter-points\" class=\"points-inp input-large\" name=\"enter-points\" aria-label=\"Enter Points\">\n  <p id=\"spend-points-show\" class=\"spen-text\" style=\"display: none\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You will be spending\n    <span id=\"spend-points\"></span> points\n    <span class=\"spen-text1\">(Saving $(0)<span id=\"spend-amount\">{{temp_apply_amount}}</span>)</span>\n    ",(depth0 != null ? compilerNameLookup(depth0,"currency_symbol") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":68},"end":{"line":28,"column":23}}}))
    + "\n  </p>\n  <button id=\"apply-points\" class=\"button-primary apply-btn\">Apply</button>\n  <button id=\"remove-points\" class=\"button-primary remove-btn\" style=\"display: none\">Remove</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isguest") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":38,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetScore/NS_Loyalty_Rewards/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netscore_ns_loyalty_rewards_pointsredeemcheckout'; return template;});