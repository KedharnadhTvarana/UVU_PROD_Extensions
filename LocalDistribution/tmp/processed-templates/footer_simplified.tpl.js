define('footer_simplified.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hide") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":21,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"footer-content-copyright-wrapper\">\n    <div class=\"footer-content-copyright\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRange") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":16,"column":15}}})) != null ? stack1 : "")
    + "        <span class=\"footer-extra-info\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"extraFooterSimplifiedView") : depths[1])) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":40},"end":{"line":18,"column":83}}})) != null ? stack1 : "")
    + "</span>\n    </div>\n</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) &#8211; $(1) $(2)",(depth0 != null ? compilerNameLookup(depth0,"initialYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":89}}}))
    + "\n        <!-- an en dash &#8211; is used to indicate a range of values -->\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"&copy; $(0) $(1)",(depth0 != null ? compilerNameLookup(depth0,"currentYear") : depth0),(depth0 != null ? compilerNameLookup(depth0,"companyName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":64}}}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"extraFooterView") : depths[1])) != null ? compilerNameLookup(stack1,"text") : stack1), depth0)) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n<div data-view=\"Global.BackToTop\"></div>\n<div id=\"banner-footer\" class=\"content-banner banner-footer\" data-cms-area=\"global_banner_footer\"\n    data-cms-area-filters=\"global\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"extraFooterSimplifiedView") : depth0)) != null ? compilerNameLookup(stack1,"copyright") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":22,"column":9}}})) != null ? stack1 : "")
    + "\n\n\n<script>\n    $(document).ready(function () {\n        const intervalLoadingIndicator = setInterval(() => {\n            const loadingIndicator = $('.global-loading-indicator');\n            if (loadingIndicator.attr('alt') !== 'Loading Icon') {\n                loadingIndicator.attr('alt', 'Loading Icon');\n            } else {\n                clearInterval(intervalLoadingIndicator);\n            }\n        }, 10);\n    });\n</script>\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'footer_simplified'; return template;});