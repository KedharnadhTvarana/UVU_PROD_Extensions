define('cart_item_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"editUrl","hash":{},"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":21}}}) : helper)))
    + "\" class=\"cart-item-actions-item-list-actionable-edit-button-edit\"\n		data-toggle=\"show-in-modal\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Edit",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":30},"end":{"line":6,"column":50}}}))
    + " <span class=\"link-separator\">&vert;</span></a>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaveForLateButton") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":1},"end":{"line":14,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<a href=\"#\" class=\"cart-item-actions-item-list-actionable-edit-content-saveforlater\"\n		data-action=\"save-for-later-item\" data-internalid=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":10,"column":53},"end":{"line":10,"column":63}}}) : helper)))
    + "\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Save for Later",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":11,"column":32}}}))
    + " <span class=\"link-separator\">&vert;</span>\n	</a>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"cart-item-actions-links\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAdvanced") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":15,"column":8}}})) != null ? stack1 : "")
    + "\n	<a href=\"#\" class=\"cart-item-actions-item-list-actionable-edit-content-remove\" data-action=\"remove-item\"\n		data-internalid=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"lineId") || (depth0 != null ? compilerNameLookup(depth0,"lineId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"lineId","hash":{},"data":data,"loc":{"start":{"line":18,"column":19},"end":{"line":18,"column":29}}}) : helper)))
    + "\">\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Remove",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":19,"column":24}}}))
    + "\n	</a>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cart_item_actions'; return template;});