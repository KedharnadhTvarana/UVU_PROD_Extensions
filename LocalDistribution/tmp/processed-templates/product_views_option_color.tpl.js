define('product_views_option_color.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"product-views-option-color-label-header\">\n			<label class=\"product-views-option-color-label\" for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":21,"column":56},"end":{"line":21,"column":72}}}) : helper)))
    + "\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":13}}}) : helper)))
    + ":\n			</label>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSelectedValue") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":3},"end":{"line":26,"column":10}}})) != null ? stack1 : "")
    + "			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRequiredLabel") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":3},"end":{"line":27,"column":99}}})) != null ? stack1 : "")
    + "\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "			<span class=\"product-views-option-color-value\" data-value=\""
    + alias1(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":25,"column":62},"end":{"line":25,"column":78}}}) : helper)))
    + "\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<span class=\"product-views-option-color-label-required\">*</span>";
},"6":function(container,depth0,helpers,partials,data) {
    return "product-views-option-color-container-small";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":57,"column":11}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function";

  return "				<label class=\"product-views-option-color-picker\">\n					<div class=\"product-views-option-color-picker-label\">\n						<input class=\"product-views-option-color-picker-input\" type=\"radio\" name=\""
    + alias2(alias1((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\"\n							id=\""
    + alias2(alias1((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\" data-action=\"changeOption\" value=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":39,"column":66},"end":{"line":39,"column":80}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias3,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":82},"end":{"line":40,"column":31}}})) != null ? stack1 : "")
    + " data-toggle=\"set-option\" data-active=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"isActive") || (depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"isActive","hash":{},"data":data,"loc":{"start":{"line":40,"column":70},"end":{"line":40,"column":82}}}) : helper)))
    + "\"\n							data-available=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"isAvailable") || (depth0 != null ? compilerNameLookup(depth0,"isAvailable") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"isAvailable","hash":{},"data":data,"loc":{"start":{"line":41,"column":23},"end":{"line":41,"column":38}}}) : helper)))
    + "\" />\n						<span class=\"visually-hidden\">\n							"
    + alias2(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":43,"column":7},"end":{"line":43,"column":16}}}) : helper)))
    + "\n						</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias3,(depth0 != null ? compilerNameLookup(depth0,"isColorTile") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(17, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":45,"column":6},"end":{"line":54,"column":13}}})) != null ? stack1 : "")
    + "					</div>\n				</label>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "checked";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "						<span data-label=\"label-"
    + alias1(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\" value=\""
    + alias1(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":46,"column":58},"end":{"line":46,"column":72}}}) : helper)))
    + "\"\n							class=\"product-views-option-color-picker-box "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":52},"end":{"line":47,"column":81}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"isLightColor") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":82},"end":{"line":47,"column":159}}})) != null ? stack1 : "")
    + "\"\n							style=\"background: "
    + alias1(((helper = (helper = compilerNameLookup(helpers,"color") || (depth0 != null ? compilerNameLookup(depth0,"color") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":48,"column":26},"end":{"line":48,"column":35}}}) : helper)))
    + "\"></span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "active";
},"15":function(container,depth0,helpers,partials,data) {
    return "product-views-option-color-picker-box-white-border";
},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function";

  return "						<img data-label=\"label-"
    + alias2(alias1((depths[1] != null ? compilerNameLookup(depths[1],"cartOptionId") : depths[1]), depth0))
    + "\" value=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":50,"column":57},"end":{"line":50,"column":71}}}) : helper)))
    + "\"\n							src=\""
    + alias2((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias4).call(alias3,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"src") : stack1),"tinythumb",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":51,"column":49}}}))
    + "\"\n							style=\"height:"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"height") : stack1), depth0))
    + ";width:"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + "\" alt=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":52,"column":66},"end":{"line":52,"column":75}}}) : helper)))
    + "\"\n							class=\"product-views-option-color-picker-box-img\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<style>\n	.visually-hidden {\n		position: absolute;\n		width: 1px;\n		height: 1px;\n		margin: -1px;\n		border: 0;\n		padding: 0;\n		overflow: hidden;\n		clip: rect(0, 0, 0, 0);\n		white-space: nowrap;\n		color: #757575;\n\n	}\n</style>\n<div id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":16,"column":9},"end":{"line":16,"column":25}}}) : helper)))
    + "-container\" class=\"product-views-option-color\" data-type=\"option\"\n	data-cart-option-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":17,"column":22},"end":{"line":17,"column":38}}}) : helper)))
    + "\" data-item-option-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemOptionId") || (depth0 != null ? compilerNameLookup(depth0,"itemOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemOptionId","hash":{},"data":data,"loc":{"start":{"line":17,"column":61},"end":{"line":17,"column":77}}}) : helper)))
    + "\">\n	<div class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":18,"column":13},"end":{"line":18,"column":29}}}) : helper)))
    + "-controls-group\" data-validation=\"control-group\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cartOptionId") || (depth0 != null ? compilerNameLookup(depth0,"cartOptionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartOptionId","hash":{},"data":data,"loc":{"start":{"line":30,"column":14},"end":{"line":30,"column":30}}}) : helper)))
    + "-controls product-views-option-color-container "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSmall") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":77},"end":{"line":30,"column":143}}})) != null ? stack1 : "")
    + "\"\n			data-validation=\"control\">\n			<fieldset>\n				<legend class=\"visually-hidden\">Legend Hidden text</legend>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"values") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":4},"end":{"line":58,"column":13}}})) != null ? stack1 : "")
    + "			</fieldset>\n\n		</div>\n	</div>\n</div>\n<script>\n	$(document).ready(function () {\n		$('.product-views-option-color-picker-input').focus(function () {\n			$(this).closest('label').addClass('focused');\n		}).blur(function () {\n			$(this).closest('label').removeClass('focused');\n		});\n	});\n\n</script>\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_views_option_color'; return template;});