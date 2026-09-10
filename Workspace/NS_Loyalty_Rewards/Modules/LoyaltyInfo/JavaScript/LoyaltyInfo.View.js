// @module NetScore.NS_Loyalty_Rewards.LoyaltyInfo
define('NetScore.NS_Loyalty_Rewards.LoyaltyInfo.View'
,	[
		'netscore_ns_loyalty_rewards_loyaltyinfo.tpl'
	,	'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Model'
	,	'Backbone'
    ]
, function (
	netscore_ns_loyalty_rewards_loyaltyinfo_tpl
	
	,	LoyaltyInfoSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.LoyaltyInfo.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_loyaltyinfo_tpl

	,	initialize: function (options) {
			this.application=options.application;
			this.env_comp=this.application.getComponent('Environment');

			this.model = options.model;
			this.gmodel = options.gmodel;

		}

	,	events: {
			'click [data-action="update-profile"]': 'updateProfileInformation',
			'change #birth_date':'Onchangedate'
		}

	,	getSelectedMenu: function getSelectedMenu () {
            return 'profileupdate'
        }

    ,	getBreadcrumbPages: function () {
    		var profielLabel=this.env_comp.getConfig('loyaltyapp.updateprofile');
            return [{
                text: profielLabel,
                href: '/profile-update'
            }]
        }

    ,	updateProfileInformation: function (e){
      		var self=this;
			jQuery("#birth_error").hide();
			jQuery("#anniversary_error").hide();
			jQuery("#referral_error").hide();
			jQuery("#success_msg").hide();
			var birth_date=jQuery("#birth_date").val();
			var anniversary_date=jQuery("#anniversary_date").val();
			var referral_code=jQuery("#referral_code").val();
			var isValid=true;
			var tdydate=new Date();
		    console.log("tdydate",tdydate);
		    birth_date=new Date(birth_date);
		    anniversary_date=new Date(anniversary_date);
			if(birth_date>tdydate)
			{
				$('#success_msg').html("Please Enter Valid BirthDay date");
				$("#success_msg").show();
				return  false;
				isValid=false;

			}
			if(anniversary_date>tdydate)
			{
				$('#success_msg').html("Please Enter Valid AnniversaryDay date");
				$("#success_msg").show();
				return  false;
				isValid=false;

			}
			if(isValid){
				//var customerid=this.model.get("cust_id");
				//console.log("customerid",customerid);
				this.model.set({"birthdate" : birth_date});
				this.model.set({"anniversarydate" : anniversary_date});
				this.model.set({"referralcode" : referral_code});
				jQuery("#update_profile").html('Processing...');
				this.model.save().done(function(data,status){
				console.log("data",data);
					if(data && data.status=='OK')
					{
						jQuery("#success_msg").html('Profile Updated Successfully.');
						jQuery("#success_msg").show();
						jQuery("#update_profile").html('Update');
			       }
				}).fail(function(){
					jQuery("#update_profile").html('Update');
					self.render();
				}).always(function(){
					jQuery("#update_profile").html('Update');
				});
			}
			
		}

	,	bindings: {
		} 

	, 	childViews: {

		}

		//@method getContext @return NetScore.NS_Loyalty_Rewards.LoyaltyInfo.View.Context
	,	getContext: function getContext()
		{ 
			return {
				birth_date: this.gmodel.get('birthday_date') || ''
			,	is_birth_date: this.gmodel.get('birthday_date') != ''
			,	anniversary_dt: this.gmodel.get('anniversary_date') || ''
			,	is_anniversary_dt: this.gmodel.get('anniversary_date') != ''
			,	referral_code: this.gmodel.get('referral_code_oldcust') || ''
			,	is_referral_code: this.gmodel.get('referral_code_oldcust') != ''
			,	show_update_button: this.gmodel.get('birthday_date') == '' || this.gmodel.get('anniversary_date') == '' || this.gmodel.get('referral_code_oldcust') == ''
			,	iseligibleforloyalty: this.gmodel.get('iseligibleforloyalty') == 'T'
			};
		}
	});
});
