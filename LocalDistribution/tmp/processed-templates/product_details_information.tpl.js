define('product_details_information.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "\n	<div class=\"product-details-information-content-container\">\n\n		<div id=\"banner-content-top\" class=\"content-banner banner-content-top\"></div>\n\n		<div role=\"tabpanel\">\n			<ul class=\"product-details-information-content-tabs\" role=\"tablist\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "")
    + "			</ul>\n			<div class=\"product-details-information-tab-content\" data-type=\"information-content\"\n				data-action=\"tab-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":41,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div id=\"banner-content-bottom\" class=\"content-banner banner-content-bottom\"></div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<button class=\"product-details-information-pusher\" data-target=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":7,"column":93},"end":{"line":7,"column":105}}}) : helper)))
    + "\"\n		data-type=\"sc-pusher\">\n		"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":12}}}) : helper)))
    + " <i></i>\n		<p class=\"product-details-information-hint\"> "
    + ((stack1 = (compilerNameLookup(helpers,"trimHtml")||(depth0 && compilerNameLookup(depth0,"trimHtml"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"content") : depth0),150,{"name":"trimHtml","hash":{},"data":data,"loc":{"start":{"line":10,"column":47},"end":{"line":10,"column":73}}})) != null ? stack1 : "")
    + " </p>\n	</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<li class=\"product-details-information-tab-title "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":53},"end":{"line":22,"column":82}}})) != null ? stack1 : "")
    + "\" role=\"presentation\">\n					<a href=\"#\" data-action=\"selected-tab\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":53},"end":{"line":23,"column":63}}}) : helper)))
    + "\"\n						data-target=\"#product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":52},"end":{"line":24,"column":62}}}) : helper)))
    + "\" data-toggle=\"tab\">Product Details\n						Information</a>\n				</li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " active ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<div role=\"tabpanel\" class=\"product-details-information-tab-content-panel "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":78},"end":{"line":33,"column":105}}})) != null ? stack1 : "")
    + "\"\n					id=\"product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":34,"column":41},"end":{"line":34,"column":51}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":53},"end":{"line":34,"column":97}}})) != null ? stack1 : "")
    + "\n					data-action=\"pushable\" data-id=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":35,"column":65},"end":{"line":35,"column":77}}}) : helper)))
    + "\">\n					<h2 class=\"product-details-information-tab-content-panel-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":36,"column":69},"end":{"line":36,"column":77}}}) : helper)))
    + "</h2>\n					<div id=\"product-details-information-tab-content-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":37,"column":64},"end":{"line":37,"column":74}}}) : helper)))
    + "\"\n						class=\"product-details-information-tab-content-container\" data-type=\"information-content-text\">\n						"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"content") || (depth0 != null ? compilerNameLookup(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":39,"column":19}}}) : helper))) != null ? stack1 : "")
    + "</div>\n				</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "active";
},"10":function(container,depth0,helpers,partials,data) {
    return "itemprop=\"description\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"product-details-information-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showInformation") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":46,"column":8}}})) != null ? stack1 : "")
    + "</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_information'; return template;});