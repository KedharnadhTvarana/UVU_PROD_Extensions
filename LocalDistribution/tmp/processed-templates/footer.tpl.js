define('footer.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":5},"end":{"line":38,"column":14}}})) != null ? stack1 : "")
    + "				</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"href") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":28,"column":5},"end":{"line":37,"column":12}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "					<li class=\"footer-column-link-listitem\"><a class=\"footer-column-link\" "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":29,"column":75},"end":{"line":29,"column":102}}}))
    + "\n							data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":30,"column":21},"end":{"line":30,"column":36}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":30,"column":55},"end":{"line":30,"column":73}}}) : helper)))
    + "\"\n							data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":31,"column":20},"end":{"line":31,"column":34}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0),{"name":"if","hash":{"includeZero":true},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":36},"end":{"line":32,"column":14}}})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":32,"column":15},"end":{"line":32,"column":23}}}) : helper)))
    + "</a></li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "target=\"_blank\"\n							";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<li class=\"footer-column-heading-listitem\">\n						<h4 class=\"footer-column-heading\" role=\"region\" aria-label=\"Footer Column Heading\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":35,"column":89},"end":{"line":35,"column":97}}}) : helper)))
    + "</h4>\n					</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":5},"end":{"line":55,"column":14}}})) != null ? stack1 : "")
    + "				</ul>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":5},"end":{"line":72,"column":14}}})) != null ? stack1 : "")
    + "				</ul>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<ul class=\"footer-content-nav-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":5},"end":{"line":89,"column":14}}})) != null ? stack1 : "")
    + "				</ul>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaTitle") : stack1), depth0))
    + "</h4>";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"footer-social\">\n				<div class=\"footer-content-social\">\n					<ul class=\"footer-content-social-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":6},"end":{"line":108,"column":15}}})) != null ? stack1 : "")
    + "					</ul>\n				</div>\n			</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "						<li><a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":103,"column":13},"end":{"line":103,"column":40}}}))
    + " title="
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":103,"column":47},"end":{"line":103,"column":55}}}) : helper)))
    + " data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datahashtag") || (depth0 != null ? compilerNameLookup(depth0,"datahashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datahashtag","hash":{},"data":data,"loc":{"start":{"line":103,"column":70},"end":{"line":103,"column":85}}}) : helper)))
    + "\"\n								data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatouchpoint") || (depth0 != null ? compilerNameLookup(depth0,"datatouchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatouchpoint","hash":{},"data":data,"loc":{"start":{"line":104,"column":25},"end":{"line":104,"column":43}}}) : helper)))
    + "\" data-target=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"datatarget") || (depth0 != null ? compilerNameLookup(depth0,"datatarget") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"datatarget","hash":{},"data":data,"loc":{"start":{"line":104,"column":58},"end":{"line":104,"column":72}}}) : helper)))
    + "\" target=\"_blank\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":104,"column":90},"end":{"line":106,"column":85}}})) != null ? stack1 : "")
    + "</a>\n						</li>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i\n									class=\"footer-content-social-icon icon-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"icon") || (depth0 != null ? compilerNameLookup(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":106,"column":48},"end":{"line":106,"column":56}}}) : helper)))
    + "\"></i>";
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":106,"column":70},"end":{"line":106,"column":78}}}) : helper)));
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showFooterNavigationLinks") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":113,"column":3},"end":{"line":127,"column":10}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"footer-links\">\n				<div class=\"footer-content-links\">\n					<ul class=\"footer-content-links-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"footerNavigationLinks") : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":6},"end":{"line":123,"column":15}}})) != null ? stack1 : "")
    + "					</ul>\n				</div>\n			</div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<li>\n							<a "
    + alias3((compilerNameLookup(helpers,"objectToAtrributes")||(depth0 && compilerNameLookup(depth0,"objectToAtrributes"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"objectToAtrributes","hash":{},"data":data,"loc":{"start":{"line":119,"column":10},"end":{"line":119,"column":37}}}))
    + ">\n								"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":120,"column":8},"end":{"line":120,"column":16}}}) : helper)))
    + "\n							</a>\n						</li>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"newsletterText") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":132,"column":4},"end":{"line":132,"column":90}}})) != null ? stack1 : "")
    + "\n				<div data-view=\"FooterContent\"></div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"newsletterText") : stack1), depth0))
    + "</p>";
},"29":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"newsletter-cct-area\" data-cms-area=\"newsletter-cct-area\" data-cms-area-filters=\"global\">\n				</div>\n";
},"31":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hide") : depth0),{"name":"unless","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":144,"column":0},"end":{"line":156,"column":11}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"footer-content-copyright-wrapper\">\n	<div class=\"footer-content-copyright\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRange") : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.program(35, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":147,"column":2},"end":{"line":152,"column":9}}})) != null ? stack1 : "")
    + "		<span class=\"footer-extra-info\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"extraFooterView") : depths[1])) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":153,"column":34},"end":{"line":153,"column":101}}})) != null ? stack1 : "")
    + "</span>\n	</div>\n</section>\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) &#8211; $(1) $(2)",(depth0 != null ? compilerNameLookup(depth0,"initialYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":148,"column":2},"end":{"line":148,"column":83}}}))
    + "\n		<!-- an en dash &#8211; is used to indicate a range of values -->\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":151,"column":2},"end":{"line":151,"column":58}}}))
    + "\n";
},"37":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"extraFooterView") : depths[1])) != null ? compilerNameLookup(stack1,"text") : stack1), depth0)) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!------------------- Tvarana Changes---------------------->\n\n<!------------------- Tvarana Changes---------------------->\n<div data-view=\"Global.BackToTop\"></div>\n<div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"global_banner_footer\"\n	data-cms-area-filters=\"global\"></div>\n\n<div class=\"footer-banner-wrapper\">\n	<div id=\"banner-footerFull\" class=\"content-banner banner-footer footer-banner\"\n		data-cms-area=\"global_banner_footerFull\" data-cms-area-filters=\"global\"></div>\n	<div id=\"banner-footer1\" class=\"content-banner banner-footer footer-banner-1\" data-cms-area=\"global_banner_footer1\"\n		data-cms-area-filters=\"global\"></div>\n	<div id=\"banner-footer5\" class=\"content-banner banner-footer footer-banner-5\" data-cms-area=\"global_banner_footer5\"\n		data-cms-area-filters=\"global\"></div>\n</div>\n\n<section class=\"footer-wrapper\" style=\"background-color: #275D38;color:white\">\n	<div class=\"footer-content-wrapper\">\n\n\n		<div class=\"footer-content\">\n\n			<div class=\"footer-content-nav\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col1Links") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":40,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col2Links") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":4},"end":{"line":57,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col3Links") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":4},"end":{"line":74,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"col4Links") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":4},"end":{"line":91,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n\n\n		<div class=\"footer-social-news\">\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaTitle") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":3},"end":{"line":97,"column":95}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"socialMediaLinks") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(22, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":98,"column":3},"end":{"line":128,"column":10}}})) != null ? stack1 : "")
    + "\n			<div class=\"footer-content-newsletter\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"showLegacyNewsletter") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.program(29, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":131,"column":4},"end":{"line":137,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</section>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterView") : depth0)) != null ? compilerNameLookup(stack1,"copyright") : stack1),{"name":"with","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":143,"column":0},"end":{"line":157,"column":9}}})) != null ? stack1 : "")
    + "<!------------------Tvarana-changes ------------------->\n<style>\n	.footer-links , .footer-content-social-list, .footer-social-news {\n		display: none;\n	}\n	.footer-content-nav-list {\n		display: flex;\n		justify-content: center;\n		flex-wrap: wrap;\n		flex-direction: column;\n		align-content: center;\n	}\n\n\n	.footer-column-link,\n	.footer-social-news h4 {\n		color: white !important;\n	}\n	.footer-column-heading {\n    color: #fff !important;\n    font-weight: 600 !important;\n}\n</style>\n<!------------------Tvarana-changes ------------------->\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'footer'; return template;});