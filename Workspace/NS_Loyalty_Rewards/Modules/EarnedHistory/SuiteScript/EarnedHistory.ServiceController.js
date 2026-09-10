define("NetScore.NS_Loyalty_Rewards.EarnedHistory.ServiceController", ["ServiceController", 'SC.Models.Init', 'underscore'], function(
    ServiceController, ModelsInit, _
) {
  "use strict";

    return ServiceController.extend({
        name: "NetScore.NS_Loyalty_Rewards.EarnedHistory.ServiceController",

        // The values in this object are the validation needed for the current service.
        options: {
              common: {}
          },

        get: function get() { 
            // not implemented
        }
    });
});
