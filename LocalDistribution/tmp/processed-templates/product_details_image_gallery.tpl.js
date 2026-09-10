define('product_details_image_gallery.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showImageSlider") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":19,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "	<ul class=\"bxslider\" data-slider>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"images") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "	</ul>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<li data-zoom class=\"product-details-image-gallery-container\">\n			<img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),(depths[1] != null ? compilerNameLookup(depths[1],"imageResizeId") : depths[1]),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":7,"column":13},"end":{"line":7,"column":49}}}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"altimagetext") || (depth0 != null ? compilerNameLookup(depth0,"altimagetext") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"altimagetext","hash":{},"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":72}}}) : helper)))
    + "\" itemprop=\"image\" data-loader=\"false\">\n		</li>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"firstImage") : depth0),{"name":"with","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":1},"end":{"line":17,"column":10}}})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<div class=\"product-details-image-gallery-detailed-image\" data-zoom>\n		<img class=\"center-block\" src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),(depths[1] != null ? compilerNameLookup(depths[1],"imageResizeId") : depths[1]),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":14,"column":33},"end":{"line":14,"column":69}}}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"altimagetext") || (depth0 != null ? compilerNameLookup(depth0,"altimagetext") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"altimagetext","hash":{},"data":data,"loc":{"start":{"line":14,"column":76},"end":{"line":14,"column":92}}}) : helper)))
    + "\" itemprop=\"image\"\n			data-loader=\"false\">\n	</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"product-details-image-gallery\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showImages") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":20,"column":8}}})) != null ? stack1 : "")
    + "	<div data-view=\"SocialSharing.Flyout.Hover\"></div>\n</div>\n\n\n<script>\n	$(document).ready(function () {\n		const intervalBxPagerLink = setInterval(function () {\n			let allImagesUpdated = true;\n\n			$('.bx-pager-link img').each(function () {\n				// Check if the alt attribute is already set\n				if (!$(this).attr('alt')) {\n					// Generate and set the alt text\n					const slideIndex = $(this).parent().data('slide-index');\n					const altText = `Image for slide ${slideIndex}`;\n					$(this).attr('alt', altText);\n\n					// Mark as not fully updated\n					allImagesUpdated = false;\n				}\n			});\n\n			// Clear interval if all images have been updated\n			if (allImagesUpdated) {\n				clearInterval(intervalBxPagerLink);\n			}\n		}, 100); // Check every 100ms\n	});\n\n\n</script>\n\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_image_gallery'; return template;});