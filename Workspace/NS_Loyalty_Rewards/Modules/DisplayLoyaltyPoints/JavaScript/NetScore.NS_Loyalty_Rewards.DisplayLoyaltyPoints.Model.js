// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/DisplayLoyaltyPoints.Service.ss"
            )
        )
        
});
});
