define('netscore_ns_loyalty_rewards_redeemhistory.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"reedem_pnt\">\n    <img class=\"small-ic1\" src=\"/site/loyalty_images/reedem-pnts.png\"/>\n    <h3>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Redeemed Points History",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":47}}}))
    + "</h3>\n</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isnotempty") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"table-responsive-class\">\n   <table class=\"table-condensed loyalty_earnedtable\">\n    <thead>\n        <th>DATE</th>\n        <th>ACTIVITY PERFORMED</th>\n        <th>TRANSACTION ID</th>\n        <th>VOCHER CODE</th>\n        <th>VALUE</th>\n        <th>POINTS REDEEMED</th>\n        <th>PRINT</th> \n    </thead>\n    <tbody>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":45,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr class=\"loyaltyviews-row\"> \n            <td data-title=\"DATE\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":21,"column":34},"end":{"line":21,"column":42}}}) : helper)))
    + "</td>\n            <td data-title=\"ACTIVITY PERFORMED\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"specialnote") || (depth0 != null ? compilerNameLookup(depth0,"specialnote") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"specialnote","hash":{},"data":data,"loc":{"start":{"line":22,"column":48},"end":{"line":22,"column":63}}}) : helper)))
    + "</td>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"transactionid") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":27,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"giftvalue") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":32,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"ordertotal") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(14, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":37,"column":19}}})) != null ? stack1 : "")
    + "            <td data-title=\"POINTS REDEEMED\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"redeemed") || (depth0 != null ? compilerNameLookup(depth0,"redeemed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"redeemed","hash":{},"data":data,"loc":{"start":{"line":38,"column":45},"end":{"line":38,"column":57}}}) : helper)))
    + "</td>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"vocherPdf") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":43,"column":19}}})) != null ? stack1 : "")
    + "        </tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <td data-title=\"TRANSACTION ID\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"transactionid") || (depth0 != null ? compilerNameLookup(depth0,"transactionid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"transactionid","hash":{},"data":data,"loc":{"start":{"line":24,"column":44},"end":{"line":24,"column":61}}}) : helper)))
    + "</td>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <td data-title=\"TRANSACTION ID\">-</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <td data-title=\"VOCHER CODE\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"giftvalue") || (depth0 != null ? compilerNameLookup(depth0,"giftvalue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"giftvalue","hash":{},"data":data,"loc":{"start":{"line":29,"column":41},"end":{"line":29,"column":54}}}) : helper)))
    + "</td>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "            <td data-title=\"VOCHER CODE\">-</td>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <td data-title=\"VALUE\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currency_symbol") || (depth0 != null ? compilerNameLookup(depth0,"currency_symbol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_symbol","hash":{},"data":data,"loc":{"start":{"line":34,"column":35},"end":{"line":34,"column":54}}}) : helper)))
    + alias4(((helper = (helper = compilerNameLookup(helpers,"ordertotal") || (depth0 != null ? compilerNameLookup(depth0,"ordertotal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ordertotal","hash":{},"data":data,"loc":{"start":{"line":34,"column":54},"end":{"line":34,"column":68}}}) : helper)))
    + "</td>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "            <td data-title=\"VALUE\">-</td>\n";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "            <td data-title=\"PRINT\"><a href=\""
    + alias1(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"basicURL") : depths[1]), depth0))
    + alias1(((helper = (helper = compilerNameLookup(helpers,"vocherPdf") || (depth0 != null ? compilerNameLookup(depth0,"vocherPdf") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"vocherPdf","hash":{},"data":data,"loc":{"start":{"line":40,"column":59},"end":{"line":40,"column":72}}}) : helper)))
    + "\" target=\"_blank\"><span class=\"loyalty-print\"> PRINT</span></a></td>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "            <td data-title=\"PRINT\"></td>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notransction\">\n    <h3>No Transactions in Redeemed Points History</h3>\n</div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "<div data-view=\"noteligible\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"iseligibleforloyalty") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(22, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetScore/NS_Loyalty_Rewards/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netscore_ns_loyalty_rewards_redeemhistory'; return template;});