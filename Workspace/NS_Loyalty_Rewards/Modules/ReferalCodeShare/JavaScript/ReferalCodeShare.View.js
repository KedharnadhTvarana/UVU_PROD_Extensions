// @module NetScore.NS_Loyalty_Rewards.ReferalCodeShare
define('NetScore.NS_Loyalty_Rewards.ReferalCodeShare.View'
,	[
		'netscore_ns_loyalty_rewards_referalcodeshare.tpl'
	,	'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Model'
	,	'Profile.Model'
	,	'Backbone'
    ]
, function (
	netscore_ns_loyalty_rewards_referalcodeshare_tpl
	,	ReferalCodeShareModel
	,	ProfileModel
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.ReferalCodeShare.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_referalcodeshare_tpl

	,	initialize: function (options) {

			this.profileModel=ProfileModel.getInstance();
			this.application=options.application;
			this.env_comp=this.application.getComponent('Environment');
		}

	,	events:{
			'click #submit-button': 'sendMail'
		}

	,   getSelectedMenu: function ()
        {
            return 'referfriend';
        }

        //@method getBreadcrumbPages
    ,   getBreadcrumbPages: function ()
        {
        	var referlabel=this.env_comp.getConfig('loyaltyapp.referearn');
            return {
                text: referlabel
            ,   href: '/referfriend'
            };
        }

     ,	sendMail: function()
    	{
			$("#message-error").hide();
			$("#message-status").hide();
			var isvalid=true;
			var email = $("#email").val();
		 	var referral = this.model.get('referral_code');
		 	var customerFirstName = this.profileModel.get('firstname');
		 	var customerLastName = this.profileModel.get('lastname');
		 	var name;
		 	var customerId=this.profileModel.id;
		 	if(customerFirstName != '' && customerLastName != '')
		 		name = customerFirstName+" "+customerLastName;
		 	else
		 		name=this.profileModel.get('companyname');
		 	if (!email) {
            	$("#message-error").html("Please enter Email ID");
            	$("#message-error").show();
            	isvalid=false;
            	return false;
        	}
			else
        	{
				var splitEmails = email.split(";");
				for(var i=0;i<splitEmails.length;i++)
				{
			   		var firstEmail = splitEmails[i];
			    	var email_pattern=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
					if(!email_pattern.test(firstEmail))
					{
						$("#message-error").html();
            			$("#message-error").html("Please enter valid Email ID");
            			$("#message-error").show();
            			return false;
            			isvalid=false;	
					}
				}
			}
			//AJAX CALL
			if(isvalid)
			{
				$("#submit-button").html();
				$.get("/app/site/hosting/scriptlet.nl?script=customscript_refer_a_friend_for_loyalty&deploy=customdeploy_refer_a_friend_for_loyalty&email="+email+"&referral="+referral+"&customerName="+name+"&customerid="+customerId, function(data, status){
                    if(status == 'success'){
                        if(data && data != '')
						{
							$("#message-refer-type").html();
							$("#message-status").html("Email Sent Successfully");
            				$("#message-status").show();
            				$("#email").val('');
		            		$("#submit-button").html();
						}
                        else
                            $("#message-status").html("Unable Process"); 
                        	$("#message-status").show();
                        	$("#submit-button").html();
                    }           
                });
			}
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return NetScore.NS_Loyalty_Rewards.ReferalCodeShare.View.Context
	,	getContext: function getContext()
		{
			return{
				referralCode: this.model.get('referral_code') || ' ',
				referrer_points : this.model.get('referrer_points'),
				referred_get_points: this.model.get('refer_friend_signup_points'),
				iseligibleforloyalty: this.model.get('iseligibleforloyalty') == 'T'
			}
		}
	});
});
