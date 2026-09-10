// Model.js
// -----------------------
// @module Case
define("Tvarana.UVU.UVU.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/UVU/SuiteScript2/UVU.Service.ss"
            ),
            true
        )
});
});
