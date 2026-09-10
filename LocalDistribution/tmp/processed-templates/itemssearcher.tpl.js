define('itemssearcher.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " id=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":45}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " name=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":78},"end":{"line":2,"column":86}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input data-type=\"search-input\" class=\"itemssearcher-input typeahead\" placeholder=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"placeholderLabel") || (depth0 != null ? compilerNameLookup(depth0,"placeholderLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholderLabel","hash":{},"data":data,"loc":{"start":{"line":1,"column":83},"end":{"line":1,"column":103}}}) : helper)))
    + "\" type=\"search\"\n	autocomplete=\"off\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showId") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":54}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showName") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":55},"end":{"line":2,"column":95}}})) != null ? stack1 : "")
    + "\n	maxlength=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxLength") || (depth0 != null ? compilerNameLookup(depth0,"maxLength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxLength","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":25}}}) : helper)))
    + "\" aria-label=\"Search Products\"/>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/SC_Dev/3.6.5/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'itemssearcher'; return template;});