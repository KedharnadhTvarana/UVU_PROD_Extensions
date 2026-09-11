define("NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.ServiceController", ["ServiceController"], function(
  ServiceController
  ) {
  "use strict";

  return ServiceController.extend({
    name: "NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
  },

  get: function get() {
      var redeem_ratio=nlapiLookupField('customrecord_loyalty_setuprecord', 1, 'custrecord_points_redeem_ratio');
      var redeem_ratio_limit=nlapiLookupField('customrecord_loyalty_setuprecord', 1, 'custrecord_redeem_pts_limit');
      
      return {
        redeem_ratio_limit: redeem_ratio_limit,
        redeem_ratio: redeem_ratio
    };
},

post: function post() {
      // not implemented
  },

  put: function put() {
      // not implemented
  },

  delete: function() {
      // not implemented
  }
});
});
