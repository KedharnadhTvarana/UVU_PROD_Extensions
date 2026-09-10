define('netscore_ns_loyalty_rewards_earnedhistory.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"nopoints") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":68,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row\">\n  <div class=\"loyalty_points_section\">\n    <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n      <div class=\"earned_points_section earned_sec\">\n        <div class=\"earnedsection__inner\">\n          <div class=\"earnedsection__content\"> \n            <h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"earned_points") || (depth0 != null ? compilerNameLookup(depth0,"earned_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"earned_points","hash":{},"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":33}}}) : helper)))
    + "<span class=\"lines\">&nbsp;</span><small> Total Points Earned </small></h1>\n          </div>      \n          \n        </div>\n      </div>\n    </div> \n    <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n      <div class=\"earned_points_section available_sec\">\n        <div class=\"earnedsection__inner\">\n\n          <div class=\"earnedsection__content\">\n            <h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"availble_points") || (depth0 != null ? compilerNameLookup(depth0,"availble_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"availble_points","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":35}}}) : helper)))
    + "<span class=\"lines lines1\">&nbsp;</span><small> Available Points</small></h1>  </div> \n          </div>\n        </div>\n      </div> \n      <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">      \n       <div class=\"earned_points_section redeem_sec\">\n        <div class=\"earnedsection__inner\"> \n         <div class=\"earnedsection__content\">\n          <h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"redeem_points") || (depth0 != null ? compilerNameLookup(depth0,"redeem_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"redeem_points","hash":{},"data":data,"loc":{"start":{"line":28,"column":14},"end":{"line":28,"column":31}}}) : helper)))
    + "<span class=\"lines lines2\">&nbsp;</span><small> Total Points Redeemed </small></h1>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n</div>\n<div class=\"earned_tablehistory\">\n  <!-- <div class=\"lyalty_title\"><h3>"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Earned Points History",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":37},"end":{"line":36,"column":74}}}))
    + "</h3></div> -->\n  <div class=\"table-responsive-class\">\n    <table class=\"table-condensed loyalty_earnedtable\">\n      <thead>\n        <th>DATE</th>\n        <th>ACTIVITY PERFORMED</th>\n        <th>TRANSACTION ID</th>\n        <th>POINTS EARNED</th>\n      </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":6},"end":{"line":54,"column":15}}})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <tr class=\"loyaltyviews-row\">\n        <td data-title=\"Date\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":49,"column":30},"end":{"line":49,"column":38}}}) : helper)))
    + "</td>\n        <td data-title=\"Activity\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"activity") || (depth0 != null ? compilerNameLookup(depth0,"activity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"activity","hash":{},"data":data,"loc":{"start":{"line":50,"column":34},"end":{"line":50,"column":46}}}) : helper)))
    + "</td>\n        <td data-title=\"Transaction Id\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"transaction") || (depth0 != null ? compilerNameLookup(depth0,"transaction") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transaction","hash":{},"data":data,"loc":{"start":{"line":51,"column":40},"end":{"line":51,"column":55}}}) : helper)))
    + "</td>\n        <td data-title=\"POINTS EARNED\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"earned") || (depth0 != null ? compilerNameLookup(depth0,"earned") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"earned","hash":{},"data":data,"loc":{"start":{"line":52,"column":39},"end":{"line":52,"column":49}}}) : helper)))
    + "</td>\n      </tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<h3 class=\"empty-points\">Your account does not have any available Loyalty Rewards Points!</h3>\n<h4 class=\"show-earn\">Start Earning Today</h4>\n<ul class=\"refer-pnt\">\n  <li>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchasing items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":63,"column":6},"end":{"line":63,"column":38}}}))
    + "</li>\n  <li>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a product review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":64,"column":6},"end":{"line":64,"column":44}}}))
    + "</li>\n  <li>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Refer a friend",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":65,"column":6},"end":{"line":65,"column":36}}}))
    + "</li>\n  <li>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Share products on social media",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":66,"column":6},"end":{"line":66,"column":52}}}))
    + "</li>\n</ul>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div data-view=\"noteligible\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"iseligibleforloyalty") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":71,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetScore/NS_Loyalty_Rewards/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netscore_ns_loyalty_rewards_earnedhistory'; return template;});