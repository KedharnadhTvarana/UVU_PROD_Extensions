define('facets_faceted_navigation_item_range.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"facets-faceted-navigation-item-range-facet-group\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":32,"column":66},"end":{"line":32,"column":76}}}) : helper)))
    + "\" data-type=\"rendered-facet\"\n	data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":33,"column":27}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHeading") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":1},"end":{"line":58,"column":8}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":60,"column":1},"end":{"line":65,"column":10}}})) != null ? stack1 : "")
    + "			<span class=\"facets-faceted-navigation-item-range-end\" data-range-indicator=\"end\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeToLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeToLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeToLabel","hash":{},"data":data,"loc":{"start":{"line":66,"column":85},"end":{"line":66,"column":101}}}) : helper)))
    + "</span>\n			<span class=\"facets-faceted-navigation-item-range-start\"\n				data-range-indicator=\"start\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFromLabel") || (depth0 != null ? compilerNameLookup(depth0,"rangeFromLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFromLabel","hash":{},"data":data,"loc":{"start":{"line":68,"column":33},"end":{"line":68,"column":51}}}) : helper)))
    + "</span>\n				<div class=\"facets-faceted-navigation-item-range-slider\" data-toggle=\"slider\"\n					data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data,"loc":{"start":{"line":79,"column":20},"end":{"line":79,"column":31}}}) : helper)))
    + "\" data-min=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMin") || (depth0 != null ? compilerNameLookup(depth0,"rangeMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMin","hash":{},"data":data,"loc":{"start":{"line":79,"column":43},"end":{"line":79,"column":55}}}) : helper)))
    + "\" data-max=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeMax") || (depth0 != null ? compilerNameLookup(depth0,"rangeMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeMax","hash":{},"data":data,"loc":{"start":{"line":79,"column":67},"end":{"line":79,"column":79}}}) : helper)))
    + "\" data-low=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"rangeFrom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFrom","hash":{},"data":data,"loc":{"start":{"line":79,"column":91},"end":{"line":79,"column":104}}}) : helper)))
    + "\"\n					data-high=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeTo") || (depth0 != null ? compilerNameLookup(depth0,"rangeTo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeTo","hash":{},"data":data,"loc":{"start":{"line":80,"column":16},"end":{"line":80,"column":27}}}) : helper)))
    + "\">\n					<input type=\"range\" class=\"facets-faceted-navigation-item-range-slider-bar-right\" data-control=\"low\"\n						style=\"left: 0%;width:18%;z-index:1;\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeFrom") || (depth0 != null ? compilerNameLookup(depth0,"rangeFrom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeFrom","hash":{},"data":data,"loc":{"start":{"line":82,"column":51},"end":{"line":82,"column":64}}}) : helper)))
    + "\" aria-label=\"Range from\">\n					<div class=\"facets-faceted-navigation-item-range-slider-bar\" data-control=\"bar\"\n						style=\"left: 0%; width: 100%;\"></div>\n					<input type=\"range\" class=\"facets-faceted-navigation-item-range-slider-bar-left\" data-control=\"high\"\n						style=\"left: 100%;width:15%;\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rangeTo") || (depth0 != null ? compilerNameLookup(depth0,"rangeTo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rangeTo","hash":{},"data":data,"loc":{"start":{"line":86,"column":43},"end":{"line":86,"column":54}}}) : helper)))
    + "\" aria-label=\"Range to\">\n				</div>\n			</div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isUncollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":35,"column":1},"end":{"line":57,"column":8}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"facets-faceted-navigation-item-range-facet-group-expander\">\n		<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">\n			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":38,"column":3},"end":{"line":38,"column":23}}}) : helper)))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":3},"end":{"line":43,"column":10}}})) != null ? stack1 : "")
    + "		</h4>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<a class=\"facets-faceted-navigation-item-range-filter-delete\" href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"removeLink","hash":{},"data":data,"loc":{"start":{"line":40,"column":71},"end":{"line":40,"column":85}}}) : helper)))
    + "\">\n				<i class=\"facets-faceted-navigation-item-range-filter-delete-icon\"></i>\n			</a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<a href=\"#\" class=\"facets-faceted-navigation-item-range-facet-group-expander collapsed\" data-toggle=\"collapse\"\n		data-target=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":48,"column":16},"end":{"line":48,"column":26}}}) : helper)))
    + "-category-wrapper\" data-type=\"collapse\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":48,"column":73},"end":{"line":48,"column":93}}}) : helper)))
    + "\">\n		<i class=\"facets-faceted-navigation-item-range-facet-group-expander-icon\"></i>\n		<h4 class=\"facets-faceted-navigation-item-range-facet-group-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetDisplayName") || (depth0 != null ? compilerNameLookup(depth0,"facetDisplayName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetDisplayName","hash":{},"data":data,"loc":{"start":{"line":50,"column":69},"end":{"line":50,"column":89}}}) : helper)))
    + "</h4>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRemoveLink") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":2},"end":{"line":55,"column":9}}})) != null ? stack1 : "")
    + "	</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a class=\"facets-faceted-navigation-item-range-filter-delete\" href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"removeLink") || (depth0 != null ? compilerNameLookup(depth0,"removeLink") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"removeLink","hash":{},"data":data,"loc":{"start":{"line":52,"column":70},"end":{"line":52,"column":84}}}) : helper)))
    + "\">\n			<i class=\"facets-faceted-navigation-item-range-filter-delete-icon\"></i>\n		</a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"facets-faceted-navigation-item-range-facet-group-wrapper "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollapsed") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":63,"column":71},"end":{"line":63,"column":127}}})) != null ? stack1 : "")
    + "\"\n			id=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"htmlId") || (depth0 != null ? compilerNameLookup(depth0,"htmlId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"htmlId","hash":{},"data":data,"loc":{"start":{"line":64,"column":7},"end":{"line":64,"column":17}}}) : helper)))
    + "-category-wrapper\">\n";
},"12":function(container,depth0,helpers,partials,data) {
    return " collapse in ";
},"14":function(container,depth0,helpers,partials,data) {
    return " collapse";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\n	.facets-faceted-navigation-item-range-slider-bar-right::-webkit-slider-runnable-track {\n		background: #fff;\n	}\n\n	.facets-faceted-navigation-item-range-slider-bar-left::-webkit-slider-runnable-track {\n		background: #fff;\n	}\n\n	.facets-faceted-navigation-item-range-slider-bar-right::-webkit-slider-thumb {\n		-webkit-appearance: none !important;\n		appearance: none !important;\n	}\n\n	.facets-faceted-navigation-item-range-slider-bar-left::-webkit-slider-thumb {\n		-webkit-appearance: none !important;\n		appearance: none !important;\n	}\n\n\n	/********** Range Input Styles **********/\n	/*Range Reset*/\n	input[type=\"range\"] {\n		-webkit-appearance: none;\n		appearance: none;\n		background: transparent;\n		cursor: pointer;\n		width: 15rem;\n	}\n</style>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showFacet") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":90,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n\n\n	<script>\n		$(document).ready(function () {\n			// Attach keydown event only once\n			$('.facets-faceted-navigation-item-range-slider-bar-left').on('keydown', function (e) {\n				if ($(window).width() < 955) {\n\n					if (e.key === 'Tab' && !e.shiftKey) { // Check if the Tab key is pressed (no Shift key)\n						e.preventDefault(); // Prevent default tab behavior\n						e.stopPropagation(); // Stop propagation to prevent multiple executions\n						$('.sc-pusher-header-back').focus(); // Move focus to the desired anchor element\n					}\n				}\n\n			});\n\n			$(document).on('focus', '.facets-facet-browse-facets .sc-pusher-header .sc-pusher-header-back', function () {\n				$(this).on('keydown', function (e) {\n					if (e.key === \"Tab\" && e.shiftKey) {\n						e.preventDefault()\n						e.stopPropagation()\n						$('.facets-faceted-navigation-item-range-slider-bar-left').focus();\n\n					}\n				});\n			})\n		});\n\n\n\n	</script>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_faceted_navigation_item_range'; return template;});