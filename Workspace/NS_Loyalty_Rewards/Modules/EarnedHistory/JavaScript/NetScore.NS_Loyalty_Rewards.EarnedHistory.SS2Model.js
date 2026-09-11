// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.EarnedHistory.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/EarnedHistory/SuiteScript2/EarnedHistory.Service.ss"
            ),
            true
        )
});
});
