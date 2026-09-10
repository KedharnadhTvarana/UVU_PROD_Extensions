define('global_views_star_rating.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"global-views-star-rating-content-rating\">\n			<span class=\"global-views-star-rating-label-visible\">\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Rating",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":26}}}))
    + "\n			</span>\n		</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"global-views-star-rating-content-label\">\n			<span class=\"global-views-star-rating-label\" for=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":27,"column":53},"end":{"line":27,"column":61}}}) : helper)))
    + "\">\n				"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":28,"column":13}}}) : helper)))
    + "\n			</span>\n		</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<div class=\"global-views-star-rating-area-writable"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":37,"column":53},"end":{"line":37,"column":66}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"buttons") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":4},"end":{"line":40,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<button type=\"button\" data-action=\"rate\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":39,"column":51},"end":{"line":39,"column":59}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"indexPlusOne") || (data && compilerNameLookup(data,"indexPlusOne"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"indexPlusOne","hash":{},"data":data,"loc":{"start":{"line":39,"column":68},"end":{"line":39,"column":85}}}) : helper)))
    + "\"></button>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<i class=\"global-views-star-rating-empty"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":48,"column":45},"end":{"line":48,"column":58}}}) : helper)))
    + "\"></i>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<i class=\"global-views-star-rating-filled"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":57,"column":46},"end":{"line":57,"column":59}}}) : helper)))
    + "\"></i>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<span class=\"global-views-star-rating-value\">\n			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data,"loc":{"start":{"line":65,"column":3},"end":{"line":65,"column":12}}}) : helper)))
    + "\n		</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span class=\"global-views-star-rating-review-total\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"ratingCountGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":74,"column":3},"end":{"line":84,"column":10}}})) != null ? stack1 : "")
    + "		</span>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<span class=\"global-views-star-rating-review-total-number\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"ratingCount") || (depth0 != null ? compilerNameLookup(depth0,"ratingCount") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"ratingCount","hash":{},"data":data,"loc":{"start":{"line":75,"column":62},"end":{"line":75,"column":77}}}) : helper)))
    + "</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneReview") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":76,"column":3},"end":{"line":80,"column":10}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"global-views-star-rating-review-total-review\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":77,"column":62},"end":{"line":77,"column":86}}}))
    + "</span>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"global-views-star-rating-review-total-review\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {})," Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":62},"end":{"line":79,"column":87}}}))
    + "</span>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<span class=\"global-views-star-rating-review-total-empty-number\">("
    + alias3(((helper = (helper = compilerNameLookup(helpers,"ratingCount") || (depth0 != null ? compilerNameLookup(depth0,"ratingCount") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"ratingCount","hash":{},"data":data,"loc":{"start":{"line":82,"column":69},"end":{"line":82,"column":84}}}) : helper)))
    + ")</span>\n			<span class=\"global-views-star-rating-review-total-no-review\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1," No Reviews yet",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":83,"column":65},"end":{"line":83,"column":97}}}))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<style>\n	.visually-hidden {\n		position: absolute;\n		width: 1px;\n		height: 1px;\n		margin: -1px;\n		border: 0;\n		padding: 0;\n		overflow: hidden;\n		clip: rect(0, 0, 0, 0);\n		white-space: nowrap;\n		color: #757575;\n	}\n</style>\n<div class=\"global-views-star-rating\" data-validation=\"control-group\">\n	<div class=\"global-views-star-rating-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLabelRating") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":23,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLabel") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":31,"column":9}}})) != null ? stack1 : "")
    + "\n		<div id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":33,"column":11},"end":{"line":33,"column":19}}}) : helper)))
    + "\" class=\"global-views-star-rating-area\" data-toggle='rater' data-validation=\"control\"\n			data-name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":34,"column":14},"end":{"line":34,"column":22}}}) : helper)))
    + "\" data-max=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxValue") || (depth0 != null ? compilerNameLookup(depth0,"maxValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxValue","hash":{},"data":data,"loc":{"start":{"line":34,"column":34},"end":{"line":34,"column":46}}}) : helper)))
    + "\" data-value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":34,"column":60},"end":{"line":34,"column":69}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isWritable") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":3},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n			<div class=\"global-views-star-rating-area-empty\">\n				<span class=\"visually-hidden\" role=\"alert\">Product Ratings</span>\n				<div class=\"global-views-star-rating-area-empty-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"buttons") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":5},"end":{"line":49,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n\n			<div class=\"global-views-star-rating-area-fill\" data-toggle='ratting-component-fill'\n				style=\"width: "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"filledBy") || (depth0 != null ? compilerNameLookup(depth0,"filledBy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filledBy","hash":{},"data":data,"loc":{"start":{"line":54,"column":18},"end":{"line":54,"column":30}}}) : helper)))
    + "%\">\n				<div class=\"global-views-star-rating-area-filled\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"buttons") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":5},"end":{"line":58,"column":14}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showValue") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":63,"column":2},"end":{"line":69,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRatingCount") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":2},"end":{"line":86,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_star_rating'; return template;});