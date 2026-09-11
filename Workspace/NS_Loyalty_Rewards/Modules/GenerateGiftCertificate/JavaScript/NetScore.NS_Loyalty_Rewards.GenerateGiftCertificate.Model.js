// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
//     return Backbone.Model.extend({

        
//         //@property {String} urlRoot
//         urlRoot: Utils.getAbsoluteUrl(
//             getExtensionAssetsPath(
//                 "services/GenerateGiftCertificate.Service.ss"
//             )
//         )
        
// });
    return Backbone.Model.extend({
            //@property {String} urlRoot
        urlRoot: function(){ 
            return '/app/site/hosting/scriptlet.nl?script=customscript_nst_lr_website_info&deploy=1&action=generategc';
        }
    });
});
