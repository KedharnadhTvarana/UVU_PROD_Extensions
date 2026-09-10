define('product_reviews_center.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<div data-view=\"ListHeader.View\"></div>\n\n			<div class=\"product-reviews-center-container\">\n				<div class=\"product-reviews-center-container-header\">\n					<h2 class=\"product-reviews-center-container-header-number\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneReview") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "					</h2>\n					<div data-view=\"Global.StarRating\"></div>\n				</div>\n				<div class=\"product-reviews-center-container-wrapper\">\n					<div data-view=\"Global.RatingByStar\"></div>\n				</div>\n			</div>\n\n			<section class=\"product-reviews-center-list\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"totalRecords") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":41,"column":4},"end":{"line":45,"column":11}}})) != null ? stack1 : "")
    + "			</section>\n\n			<div class=\"product-reviews-center-footer\">\n				<div data-view=\"GlobalViews.Pagination\"></div>\n			</div>\n\n			<div class=\"product-reviews-center-container-footer\">\n				<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":53,"column":13},"end":{"line":53,"column":24}}}) : helper)))
    + "/newReview\" class=\"product-reviews-center-container-footer-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":91},"end":{"line":54,"column":23}}}))
    + "</a>\n			</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":30}}}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "						"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Reviews",(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":30,"column":44}}}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"ProductReviews.Review\" class=\"product-reviews-center-review-container\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"There are no reviews available for your selection",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":44,"column":69}}}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<!-- <div class=\"product-reviews-center-container\"> -->\n			<div class=\"product-reviews-center-no-reviews-container\">\n				<h2 class=\"product-reviews-center-no-reviews\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"No reviews available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":59,"column":50},"end":{"line":59,"column":86}}}))
    + "</h2>\n				<h3 class=\"visually-hidden\">THE OFFICIAL ONLINE STORE OF UTAH VALLEY UNIVERSITY</h3>\n				<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Be the first to",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":61,"column":7},"end":{"line":61,"column":38}}}))
    + " <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data,"loc":{"start":{"line":61,"column":48},"end":{"line":61,"column":59}}}) : helper)))
    + "/newReview\"\n						class=\"product-reviews-center-container-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Write a Review",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":62,"column":54},"end":{"line":62,"column":84}}}))
    + "</a></p>\n			</div>\n			<!-- </div> -->\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<style>\n	.visually-hidden {\n		position: absolute;\n		width: 1px;\n		height: 1px;\n		margin: -1px;\n		border: 0;\n		padding: 0;\n		overflow: hidden;\n		clip: rect(0, 0, 0, 0);\n		white-space: nowrap;\n		color: #757575;\n\n	}\n</style>\n\n<section class=\"product-reviews-center-content\">\n	<div class=\"product-reviews-center-more-info-content-container\">\n		<div class=\"product-reviews-center\">\n			<h2 class=\"product-reviews-center-container-header-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Ratings &amp; Reviews",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":61},"end":{"line":20,"column":98}}}))
    + "</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemCount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":21,"column":3},"end":{"line":65,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</section>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_center'; return template;});