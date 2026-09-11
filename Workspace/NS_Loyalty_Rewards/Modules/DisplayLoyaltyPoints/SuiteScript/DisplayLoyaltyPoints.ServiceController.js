define("NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.ServiceController", ["ServiceController"], function(
    ServiceController
    ) {
  "use strict";

  return ServiceController.extend({
    name: "NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.ServiceController",

        // The values in this object are the validation needed for the current service.
    options: {
        common: {}
    },

    get: function get() 
    {
        var 
        earned_ratio=0,
        redeem_ratio=0, 
        tier_name='', 
        iseligibleforloyalty='F', 
        loyalty_program_id=1;

        if(nlapiGetUser() != 0){
            var customerCustomFields = nlapiGetWebContainer().getShoppingSession().getCustomer().getCustomFieldValues();
                //console.log('custom fields',JSON.stringify(customerCustomFields));

            for(var i=0;i<customerCustomFields.length;i++)
            {
                if(customerCustomFields[i].name == 'custentitycustentity_tier_name'){
                    tier_name = customerCustomFields[i].value;
                }
                if(customerCustomFields[i].name == 'custentity_loyalty_program'){
                    iseligibleforloyalty = customerCustomFields[i].value;
                }
                if(customerCustomFields[i].name == 'custentity_rewardprogram_list'){
                    loyalty_program_id = customerCustomFields[i].value;
                }
            }
        }
        if(loyalty_program_id){
            loyalty_program_id=loyalty_program_id;
        }
        else{
            loyalty_program_id=1;
        }
        var loyalty_fields=['custrecord_points_dollar_ratio','custrecord_points_redeem_ratio','custrecord_points_forproduct_share_email','custrecord_earn_point_facebook_share','custrecord_earn_point_customer_review', ];
            //var loyalty_fields_values=nlapiLookupField('customrecord_loyalty_setuprecord',loyalty_program_id,loyalty_fields);
            // earned_ratio=loyalty_fields_values.custrecord_points_dollar_ratio;
            // redeem_ratio=loyalty_fields_values.custrecord_points_redeem_ratio;
            // var email_share_points=loyalty_fields_values.custrecord_points_forproduct_share_email;
            // var fb_share_points=loyalty_fields_values.custrecord_earn_point_facebook_share;
            // var review_points=loyalty_fields_values.custrecord_earn_point_customer_review;

        var loyalty_fields_values=nlapiLoadRecord('customrecord_loyalty_setuprecord',1);
        earned_ratio=loyalty_fields_values.getFieldValue('custrecord_points_dollar_ratio');
        redeem_ratio=loyalty_fields_values.getFieldValue('custrecord_points_redeem_ratio');
        var email_share_points=loyalty_fields_values.getFieldValue('custrecord_points_forproduct_share_email');
        var fb_share_points=loyalty_fields_values.getFieldValue('custrecord_earn_point_facebook_share');
        var review_points=loyalty_fields_values.getFieldValue('custrecord_earn_point_customer_review');
        var productcategory_nopoints = loyalty_fields_values.getFieldTexts('custrecord_product_categories');
        var productcategory_halfpoints = loyalty_fields_values.getFieldTexts('custrecord_product_category_fivedollar');

        return {
            earned_ratio: earned_ratio,
            redeem_ratio: redeem_ratio,
            iseligibleforloyalty: iseligibleforloyalty,
            tier_name: tier_name,
            email_share_points: email_share_points,
            fb_share_points: fb_share_points,
            review_points: review_points,
            productcategory_nopoints:productcategory_nopoints,
            productcategory_halfpoints: productcategory_halfpoints
        };
    }
});
});
