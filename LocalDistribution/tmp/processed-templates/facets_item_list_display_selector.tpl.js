define('facets_item_list_display_selector.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"configOptionUrl") || (depth0 != null ? compilerNameLookup(depth0,"configOptionUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"configOptionUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":28}}}) : helper)))
    + "\"\n	class=\"facets-item-list-display-selector "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":42},"end":{"line":3,"column":73}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isGrid") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":74},"end":{"line":3,"column":135}}})) != null ? stack1 : "")
    + "\"\n	title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
    + "\" role=\"button\">\n	<i class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"icon") || (depth0 != null ? compilerNameLookup(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":5,"column":11},"end":{"line":5,"column":19}}}) : helper)))
    + "\"></i>\n</a>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " active ";
},"4":function(container,depth0,helpers,partials,data) {
    return " facets-item-list-display-selector-grid ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"options") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "")
    + "\n<script>\n	$(document).ready(function () {\n		// Check if the script has already been executed\n		if (!window.buttonPLPViewChange) {\n			// Set flag variable to indicate that the script has been executed\n			window.buttonPLPViewChange = true;\n\n			// Attach event listener to all elements with the specified class\n			$(document).on('keydown', '.facets-item-list-display-selector', function (e) {\n				const keyD = e.key !== undefined ? e.key : e.keyCode;\n\n				// Check if the pressed key is 'Enter' or 'Space'\n				if (keyD === 'Enter' || keyD === ' ' || keyD === 13 || keyD === 32) {\n					// Prevent scrolling\n					if (e.key === ' ' || e.key === 'PageDown' || e.key === 'PageUp') {\n						e.preventDefault();\n					}\n\n					// Trigger a click event on the element\n					$(this).click();\n				}\n			});\n		}\n	});\n</script>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_item_list_display_selector'; return template;});