define('product_list_control_new_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create and Move Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":39}}}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create and Add Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":38}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<a class=\"product-list-control-new-item-button-create\" data-action=\"show-add-new-list-form\">\n	"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create a New List",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":34}}}))
    + "\n</a>\n<form action=\"#\" data-action=\"create-and-move\" data-type=\"product-list-control-add-new-list-form\"\n	class=\"product-list-control-new-item-add-new-list-form\">\n	<div class=\"product-list-control-new-item-add-new-list-input-container\" data-validation=\"control-group\">\n		<input class=\"product-list-control-new-item-add-new-list-input\" name=\"name\" type=\"text\"\n			data-type=\"new-product-list-name\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Your new list name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":50},"end":{"line":8,"column":84}}}))
    + "\"\n			aria-label=\"Product List Name\">\n	</div>\n\n	<div class=\"product-list-control-new-item-add-new-list-buttons\">\n		<button type=\"submit\" class=\"product-list-control-new-item-button-create\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":14,"column":3},"end":{"line":18,"column":10}}})) != null ? stack1 : "")
    + "		</button>\n	</div>\n</form>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_control_new_item'; return template;});