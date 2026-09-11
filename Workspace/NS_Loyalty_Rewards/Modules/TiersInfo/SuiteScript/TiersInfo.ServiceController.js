define("NetScore.NS_Loyalty_Rewards.TiersInfo.ServiceController", ["ServiceController", 'SC.Models.Init', 'underscore'], function(
  ServiceController, ModelsInit, _
) {
  "use strict";

  return ServiceController.extend({
    name: "NetScore.NS_Loyalty_Rewards.TiersInfo.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
       var current_points='',current_level='',next_level='', iseligibleforloyalty,rewardprogram;

      var customerGetPoints = nlapiSearchRecord("customrecord_loyaltysublist_rec",null,
            [
                ["custrecord_loyaltysublist_custname","anyof",nlapiGetUser()]
            ],  
            [
        new nlobjSearchColumn("custentity_currentpoints","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
        new nlobjSearchColumn("custentity_current_tier_level","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
        new nlobjSearchColumn("custentity_next_tier_level","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
                new nlobjSearchColumn("custentity_loyalty_program","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
                new nlobjSearchColumn("custentity_rewardprogram_list","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
                new nlobjSearchColumn("internalid",null,null).setSort(true), 
                new nlobjSearchColumn("created",null,null).setSort(true)
            ]);
            
            if(customerGetPoints)
            {
            current_points = customerGetPoints[0].getValue('custentity_currentpoints','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
            current_level = customerGetPoints[0].getValue('custentity_current_tier_level','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
            next_level = customerGetPoints[0].getValue('custentity_next_tier_level','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
                iseligibleforloyalty=customerGetPoints[0].getValue('custentity_loyalty_program','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
                rewardprogram=customerGetPoints[0].getValue('custentity_rewardprogram_list','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
            
            }
            else
            {
                var customerCustomFields = ModelsInit.customer.getCustomFieldValues();
                //console.log('custom fields',JSON.stringify(customerCustomFields));
            
                for(var i=0;i<customerCustomFields.length;i++)
                {
                    if(customerCustomFields[i].name == 'custentity_currentpoints'){
                        current_points = customerCustomFields[i].value;
                    }

                    if(customerCustomFields[i].name == 'custentity_current_tier_level'){
                        current_level = customerCustomFields[i].value;
                    }

                    if(customerCustomFields[i].name == 'custentity_next_tier_level'){
                        next_level = customerCustomFields[i].value;
                    }
                    if(customerCustomFields[i].name == 'custentity_loyalty_program'){
                        iseligibleforloyalty = customerCustomFields[i].value;
                    }
                     if(customerCustomFields[i].name == 'custentity_rewardprogram_list'){
                            rewardprogram = customerCustomFields[i].value;
                        }

                }
            }
            // var websiteName = ModelsInit.session.getSiteSettings(['displayname']).displayname;
            rewardprogram = rewardprogram == ''? "@NONE@" : rewardprogram;
            current_level = current_level == ''? "@NONE@" : current_level;
            next_level = next_level == ''? "@NONE@" : next_level;
            var loyalty_tiers_level_Search = nlapiSearchRecord("customrecord_loyalty_setup_sublist_range",null,
            [
               ["custrecord_name_of_tier","anyof",current_level], 
               "OR", 
               ["custrecord_name_of_tier","anyof",next_level],
               "AND",
               ["custrecord_tier_reward_program","anyof",rewardprogram]
            ], 
            [
               new nlobjSearchColumn("custrecord_name_of_tier"), 
               new nlobjSearchColumn("custrecord_tier_range"), 
               new nlobjSearchColumn("custrecord_tier_based_point"), 
               new nlobjSearchColumn("custrecord_tier_level_imageurl"),
               new nlobjSearchColumn("custrecord_tierlevelicon"),
               new nlobjSearchColumn("custrecord_level").setSort(false)
            ]
            );
            if(loyalty_tiers_level_Search)
            {
                var data= _.map(loyalty_tiers_level_Search, function(result) {
                    return {
                        name: result.getText('custrecord_name_of_tier'),
                        threshold: result.getValue('custrecord_tier_range'),
                        points: result.getValue('custrecord_tier_based_point'),
                        level: result.getValue('custrecord_level'),
                        image_url:result.getValue('custrecord_tier_level_imageurl'),
                        image_url_2:result.getValue('custrecord_tierlevelicon'),
                        current_points:current_points,
                        current_level:current_level,
                        next_level:next_level,
                        iseligibleforloyalty: iseligibleforloyalty
                    };
                });
                return{
                    data: data,
                    current_points:current_points,
                    current_level:current_level,
                    next_level:next_level,
                    iseligibleforloyalty: iseligibleforloyalty

                } 
            }
            else
            {
                return {
                        name: '',
                        threshold: '',
                        points: '',
                        level: '',
                        current_points:current_points,
                        current_level:current_level,
                        next_level:next_level,
                        iseligibleforloyalty: iseligibleforloyalty
                    };
            }
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
