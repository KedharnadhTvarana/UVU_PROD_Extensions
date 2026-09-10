define('order_wizard_cartitems_module_ship.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " collapsed";
},"3":function(container,depth0,helpers,partials,data) {
    return " order-wizard-cartitems-module-ship-accordion-primary";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Ship to ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":9},"end":{"line":7,"column":33}}}))
    + "</span>\n			<span\n				class=\"order-wizard-cartitems-module-ship-accordion-head-toggle-address-name\">&nbsp;"
    + alias3(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"address") : depth0)) != null ? compilerNameLookup(stack1,"fullname") : stack1), depth0))
    + "</span>\n			<span> ("
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemCount") || (depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemCount","hash":{},"data":data,"loc":{"start":{"line":10,"column":11},"end":{"line":10,"column":24}}}) : helper)))
    + ")</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Items to Ship ($(0))",(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":12,"column":49}}}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "in";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<div class=\"order-wizard-cartitems-module-ship-dropdown\">\n				<a id=\"order-wizard-cartitems-module-ship-address-dropdown-"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"address") : depth0)) != null ? compilerNameLookup(stack1,"id") : stack1), depth0))
    + "\"\n					class=\"order-wizard-cartitems-module-ship-address-dropdown-link\" data-toggle=\"dropdown\"\n					aria-expanded=\"true\">\n\n					<span class=\"order-wizard-cartitems-module-ship-address-label\">"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Ship to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":68},"end":{"line":26,"column":91}}}))
    + " </span>\n					"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"address") : depth0)) != null ? compilerNameLookup(stack1,"fullname") : stack1), depth0))
    + "\n					<i class=\"order-wizard-cartitems-module-ship-address-icon-angle-down\"></i>\n				</a>\n\n				<div class=\"order-wizard-cartitems-module-ship-dropdown-menu\"\n					aria-labelledby=\"order-wizard-cartitems-module-ship-address-dropdown-"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"address") : depth0)) != null ? compilerNameLookup(stack1,"id") : stack1), depth0))
    + "\">\n					<div data-view=\"Address.Details\"></div>\n				</div>\n			</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "lg2sm-first";
},"15":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"order-wizard-cartitems-module-ship-edit-cart-link-container\">\n				<a href=\"#\" class=\"order-wizard-cartitems-module-ship-edit-cart-link\" data-action=\"edit-module\"\n					data-touchpoint=\"viewcart\">\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Edit Cart",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":5},"end":{"line":48,"column":30}}}))
    + "\n				</a>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"order-wizard-cartitems-module-ship\">\n	<div class=\"order-wizard-cartitems-module-ship-accordion-head\">\n		<button\n			class=\"order-wizard-cartitems-module-ship-accordion-head-toggle"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":66},"end":{"line":4,"column":118}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAccordionPrimary") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":118},"end":{"line":4,"column":204}}})) != null ? stack1 : "")
    + "\"\n			data-toggle=\"collapse\" data-target=\"#unfulfilled-items-ship\" aria-controls=\"unfulfilled-items\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAddress") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":13,"column":10}}})) != null ? stack1 : "")
    + "			<i class=\"order-wizard-cartitems-module-ship-accordion-toggle-icon\"></i>\n		</button>\n	</div>\n	<div class=\"order-wizard-cartitems-module-ship-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":72},"end":{"line":17,"column":108}}})) != null ? stack1 : "")
    + "\"\n		id=\"unfulfilled-items-ship\" role=\"tabpanel\">\n		<div class=\"order-wizard-cartitems-module-ship-accordion-container\" data-content=\"order-items-body\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAddress") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":36,"column":10}}})) != null ? stack1 : "")
    + "\n			<div class=\"order-wizard-cartitems-module-ship-products-scroll\">\n				<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMobile") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":16},"end":{"line":39,"column":52}}})) != null ? stack1 : "")
    + " order-wizard-cartitems-module-ship-table\">\n					<div data-view=\"Items.Collection\"></div>\n				</div>\n			</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEditCartButton") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":3},"end":{"line":51,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</section>\n\n<script>\n\n	$(document).on('keydown', function (e) {\n		if (e.key === \"Escape\") {\n			var focusedElement = document.activeElement;\n\n			var miniEstimateContainer = $('.order-wizard-cartitems-module-ship')[0];\n			if (miniEstimateContainer && miniEstimateContainer.contains(focusedElement) && !$('.order-wizard-cartitems-module-ship-accordion-head-toggle').hasClass('collapsed')) {\n				$('.order-wizard-cartitems-module-ship-accordion-head-toggle').click();\n				$('.order-wizard-cartitems-module-ship-accordion-head-toggle').focus(); // Set focus to header close button\n				return; // Exit if this condition is met\n			}\n\n		}\n	});\n\n\n</script>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_cartitems_module_ship'; return template;});