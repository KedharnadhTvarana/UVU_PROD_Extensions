// Model.js
// -----------------------
// @module Case
define("Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/HeaderMenuCustomisation/SuiteScript2/HeaderMenuCustomisation.Service.ss"
            ),
            true
        )
});
});
