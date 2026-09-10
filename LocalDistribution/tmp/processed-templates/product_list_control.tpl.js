define('product_list_control.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "<button class=\"product-list-control-button-move\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\"\n	type=\"button\">\n	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Move",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":4,"column":21}}}))
    + "\n</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<button class=\"product-list-control-button-wishlist\" data-action=\"show-productlist-control\" data-toggle=\"showFlyout\"\n	type=\"button\">\n	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add to Wishlist",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":9,"column":32}}}))
    + "\n</button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "product-list-control-move";
},"7":function(container,depth0,helpers,partials,data) {
    return "style=\"display: block\" ";
},"9":function(container,depth0,helpers,partials,data) {
    return "	<div data-confirm-message=\"\"></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Add to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":21,"column":24}}}))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasProductLists") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + ":\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		("
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"productListLength") || (depth0 != null ? compilerNameLookup(depth0,"productListLength") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"productListLength","hash":{},"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":23,"column":24}}}) : helper)))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneProductList") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + "		";
},"13":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":25,"column":22}}}))
    + ")\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":27,"column":23}}}))
    + ")\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":2},"end":{"line":31,"column":24}}}))
    + "\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<li class=\"product-list-control-nolists-messages\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":37,"column":3},"end":{"line":41,"column":10}}})) != null ? stack1 : "")
    + "		</li>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no other lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":3},"end":{"line":38,"column":43}}}))
    + "\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":3},"end":{"line":40,"column":37}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":7}}})) != null ? stack1 : "")
    + "<div class=\"product-list-control-flyout "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":40},"end":{"line":12,"column":88}}})) != null ? stack1 : "")
    + "\"\n	data-type=\"productlist-control\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showControl") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":33},"end":{"line":13,"column":82}}})) != null ? stack1 : "")
    + " data-dropdown-content>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":17,"column":12}}})) != null ? stack1 : "")
    + "\n	<h4 class=\"product-list-control-flyout-title\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":32,"column":9}}})) != null ? stack1 : "")
    + "	</h4>\n	<ul class=\"product-list-control-flyout-product-lists\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":2},"end":{"line":43,"column":9}}})) != null ? stack1 : "")
    + "	</ul>\n	<h4 class=\"product-list-control-flyout-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Or: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":47},"end":{"line":45,"column":67}}}))
    + "</h4>\n	<div class=\"product-list-control-new-product-list-container\" data-type=\"new-item-container\"></div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_control'; return template;});