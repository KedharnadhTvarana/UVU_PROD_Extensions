// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.SocialSharing.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/SocialSharing.Service.ss"
            )
        )
        
});
});
