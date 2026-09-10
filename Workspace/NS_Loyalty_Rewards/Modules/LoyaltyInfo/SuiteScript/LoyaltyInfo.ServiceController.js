define("NetScore.NS_Loyalty_Rewards.LoyaltyInfo.ServiceController", ["ServiceController", 'SC.Models.Init', 'underscore'], function(
  ServiceController, ModelsInit, _ 
) {
  "use strict";

  return ServiceController.extend({
    name: "NetScore.NS_Loyalty_Rewards.LoyaltyInfo.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
        var birthday_date,anniversary_date,referral_code, iseligibleforloyalty;
    
        var customerGetPoints = nlapiSearchRecord("customrecord_loyaltysublist_rec",null,
            [
                ["custrecord_loyaltysublist_custname","anyof",nlapiGetUser()]
            ], 
            [
              new nlobjSearchColumn("custentity_birth_date_loyalty","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
              new nlobjSearchColumn("custentity_anniversary_date_loyalty","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
                new nlobjSearchColumn("custentity_referrral_code_ofoldcust","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
                new nlobjSearchColumn("custentity_loyalty_program","CUSTRECORD_LOYALTYSUBLIST_CUSTNAME",null),
                new nlobjSearchColumn("internalid",null,null).setSort(true), 
                new nlobjSearchColumn("created",null,null).setSort(true)
            ]);
         
            if(customerGetPoints)
            {
                birthday_date=customerGetPoints[0].getValue('custentity_birth_date_loyalty','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
                anniversary_date=customerGetPoints[0].getValue('custentity_anniversary_date_loyalty','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
                referral_code=customerGetPoints[0].getValue('custentity_referrral_code_ofoldcust','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
                iseligibleforloyalty=customerGetPoints[0].getValue('custentity_loyalty_program','CUSTRECORD_LOYALTYSUBLIST_CUSTNAME');
            }
            else
            {
                var customerCustomFields = ModelsInit.customer.getCustomFieldValues();
                //console.log('custom fields',JSON.stringify(customerCustomFields));
            
                for(var i=0;i<customerCustomFields.length;i++)
                {
                  if(customerCustomFields[i].name == 'custentity_birth_date_loyalty'){
                      birthday_date = customerCustomFields[i].value;
                  }
                    if(customerCustomFields[i].name == 'custentity_anniversary_date_loyalty'){
                        anniversary_date = customerCustomFields[i].value;
                    }
                  if(customerCustomFields[i].name == 'custentity_referrral_code_ofoldcust'){
                      referral_code = customerCustomFields[i].value;
                  }
                    if(customerCustomFields[i].name == 'custentity_loyalty_program'){
                        iseligibleforloyalty = customerCustomFields[i].value;
                    }
                }
            }

      return {
        birth_date: birthday_date, 
        anniversary_dt : anniversary_date,
        referral_code: referral_code,
        iseligibleforloyalty: iseligibleforloyalty
      }
    },

    post: function post() {
      try
      {
        var user_data=this.data;
        var isLoggedIn = ModelsInit.session.isLoggedIn2() ? 'T' : 'F';
        //nlapiLogExecution('error','isLoggedIn',isLoggedIn);
        if(isLoggedIn)
        {
          //nlapiLogExecution('error','isLoggedIn inside',isLoggedIn);

            //updating customer birthday date 
            if(user_data.birthdate != '' && user_data.birthdate != null && user_data.birthdate != undefined)
            {
              var bdate=new Date(user_data.birthdate);
              try{
                ModelsInit.customer.updateProfile({
                  customfields: {
                    custentity_birth_date_loyalty: nlapiDateToString(bdate)
                  }
                });
              }
              catch(e){
                nlapiLogExecution('error','Setting birthdate date Value Error', e);
              }
              
            }

            //updating customer anniversary date 
            if(user_data.anniversarydate != '' && user_data.anniversarydate != null && user_data.anniversarydate != undefined)
            {
              try{
                var adate=new Date(user_data.anniversarydate);
                ModelsInit.customer.updateProfile({
                  customfields: {
                    custentity_anniversary_date_loyalty: nlapiDateToString(adate)
                  }
                });
              }
              catch(e){
                nlapiLogExecution('error','Setting anniversary date Value Error', e);
              }
            }

            //updating referral code sent by a friend
            ModelsInit.customer.updateProfile({
              customfields: {
                custentity_referrral_code_ofoldcust: user_data.referralcode
              }
            });

            //nlapiLogExecution('error','isLoggedIn end',isLoggedIn);           
        }
        return {
            status: 'OK'
          }
      }
      catch(e)
      {
        if (e instanceof nlobjError) 
        {
              nlapiLogExecution('error','Setting birthdate or anniversary date Value Error','Process Error = '+e.getDetails());
              return {
            status: 'error'
          }
        }
        else
        {
          nlapiLogExecution('error','Getting birthdate or anniversary date','Unexpected Error = '+e);
         return {
            status: 'error'
          }
        }
      }
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
