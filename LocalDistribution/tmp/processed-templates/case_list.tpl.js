define('case_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"case-list-button-back\">\n		<i class=\"case-list-button-back-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<table class=\"case-list-recordviews-table\">\n				<thead class=\"case-list-content-table\">\n					<tr class=\"case-list-content-table-header-row\">\n						<th class=\"case-list-content-table-header-row-title\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Case No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":13},"end":{"line":30,"column":37}}}))
    + "</span>\n						</th>\n						<th class=\"case-list-content-table-header-row-subject\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subject",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":36}}}))
    + "</span>\n						</th>\n						<th class=\"case-list-content-table-header-row-creation-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Creation date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":13},"end":{"line":36,"column":42}}}))
    + "</span>\n						</th>\n						<th class=\"case-list-content-table-header-row-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Message",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":39,"column":13},"end":{"line":39,"column":41}}}))
    + "</span>\n						</th>\n						<th class=\"case-list-content-table-header-row-status\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":13},"end":{"line":42,"column":35}}}))
    + "</span>\n						</th>\n					</tr>\n				</thead>\n				<tbody data-view=\"Case.List.Items\"></tbody>\n			</table>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":49,"column":3},"end":{"line":53,"column":10}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"case-list-empty\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":50,"column":31},"end":{"line":50,"column":57}}}))
    + "</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<p class=\"case-list-empty\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No cases were found",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":52,"column":31},"end":{"line":52,"column":66}}}))
    + "</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"case-list-paginator\">\n			<div data-view=\"GlobalViews.Pagination\" class=\"case-list-global-views-pagination\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":3},"end":{"line":62,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalViews.ShowCurrentPage\" class=\"case-list-global-views-current-page\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\n<div id=\"case-banner\" class=\"case-list-banner\">\n	<div data-cms-area=\"global_banner_case-\" data-cms-area-filters=\"global\"></div>\n</div>\n\n<section class=\"case-list\">\n	<header class=\"case-list-header\">\n		<h2 class=\"case-list-title\">\n			"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":17}}}) : helper)))
    + "\n		</h2>\n		<div data-confirm-message class=\"case-list-confirm-message\"></div>\n\n		<a class=\"case-list-header-button-new\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#/newcase\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create New Case",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":108},"end":{"line":19,"column":139}}}))
    + "</a>\n	</header>\n\n	<div data-view=\"List.Header\" class=\"case-list-list-header-container\"></div>\n\n	<div class=\"case-list-results-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCases") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":54,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":1},"end":{"line":64,"column":8}}})) != null ? stack1 : "")
    + "</section>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'case_list'; return template;});