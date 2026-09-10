// @module NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate
define('NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View'
,	[
		'netscore_ns_loyalty_rewards_generategiftcertificate.tpl'
	,	'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Model'
	,	'Backbone'
	,	'Profile.Model'
    ]
, function (
		netscore_ns_loyalty_rewards_generategiftcertificate_tpl
	,	GenerateGiftCertificateModel
	,	Backbone
	,	ProfileModel
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_generategiftcertificate_tpl

	,	initialize: function (options) {
			this.profileModel = ProfileModel.getInstance();
		  	this.model=options.model;
		  	this.application=options.application;
            this.env_comp=this.application.getComponent("Environment");
		}

	,	events:{
			'click #generate-gift-card' : 'generateGiftcertificate'
		}

	,   getSelectedMenu: function ()
        {
            return 'generategiftcard';
        }

        //@method getBreadcrumbPages
    ,   getBreadcrumbPages: function ()
        {
        	var gclabel=this.env_comp.getConfig("loyaltyapp.generategiftcard");
            return {
                text: gclabel
            ,   href: '/generategiftcard'
            };
        }

    ,   generateGiftcertificate: function()
    	{
            //console.log('this.model gift',this.model);
            $("#points-error").hide();
            $("#email-error").hide();
            $("#success-msg").hide();
            $("#fail-msg").hide();
		    var isvalid=true; 
			var email = $("#receiverEmail").val();
        	var loyaltypts = $("#redeempoints").val();
        	var useremail = this.profileModel.get('email');
        	var customerId = this.profileModel.id;
            var pointsThreshold=parseInt(this.model.get('Gc_threshold_Points'));
            var points_availble = parseFloat($("#availble-points").html());
        	//alert('loyaltypts '+loyaltypts+'points_availble'+points_availble+'pointsThreshold'+pointsThreshold);
        	//Loyalty points validation
        	if (loyaltypts.length==0) {
            	$("#points-error").html("Please enter points to redeem");
            	$("#points-error").show();
            	isvalid=false;
            	return false;
        	}
        	if(!loyaltypts.match(/^\d+/))
        	{
                $("#points-error").html("Please Enter Points Correctly");
                $("#points-error").show();
            	isvalid=false;
            	return false;
        	}
            if(loyaltypts > points_availble)
            {
                $("#points-error").html("Your Rewards points balance is low to generate gift certificate.");
                $("#points-error").show();
                isvalid=false;
                return false;
            }

            if(loyaltypts < pointsThreshold)
            {
                $("#points-error").html("Minimum rewards points that you could redeem is "+pointsThreshold);
                $("#points-error").show();
                isvalid=false;
                return false;
            }
         	//Email validation
		 	if (email.length==0) {
         		$("#email-error").html("Please enter Email Id");
            	$("#email-error").show();
            	isvalid=false;
            	return false;
        	}
        	var email_pattern=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        	if(!(email_pattern.test(email)))
            {
                $("#email-error").html("Please enter valid Email ID");
                $("#email-error").show();
            	isvalid=false;
               return false;
            }
       
	        // AJAX CALL
	        if(isvalid)
	        {
	        	$("#generate-gift-card").html("Generating...");
				$.get("/app/site/hosting/scriptlet.nl?script=customscript_generate_gift_certificate&deploy=customdeploy_loyalty_giftgeneration&loyaltypts="+loyaltypts+"&email="+email+"&useremail="+useremail+"&customerId="+customerId, function(data, status){
                    if(status == 'success'){
                        // console.log('data  '+data);
                        // var temp=data;
                        //  console.log('temp  '+temp);
                        // alert('data  '+data);
                        if(data == ''){
                            $("#fail-msg").html("Something went wrong... please try again");
                            $("#fail-msg").show();
                            $("#redeempoints").val('');
                            $("#receiverEmail").val('');
                            $("#generate-gift-card").html('Generate Gift Card');
                            $("#redeempoints").html('Generate Gift Card');
                        }
                        else if(data == 'Success' || data == 'success')
						{	
			     			$("#success-msg").html("Gift Certificate is successfully sent to the recipient email. Happy Shopping.");
			        		$("#success-msg").show();
			        		$("#redeempoints").val('');
			        		$("#receiverEmail").val('');
			        		$("#generate-gift-card").html('Generate Gift Card');
			        		Backbone.history.navigate('generategiftcard', {trigger: true});
						} 
			         	else if(data =='You are not eligible to generate gift card')
                        {
			     			$("#fail-msg").html("You are not eligible to generate gift card");
			        		$("#fail-msg").show();
			        		$("#redeempoints").val('');
			        		$("#receiverEmail").val('');
                            $("#generate-gift-card").html('Generate Gift Card');
			        		$("#redeempoints").html('Generate Gift Card');
						}
                        else{
                            $("#fail-msg").html("Something went wrong... please try again");
                            $("#fail-msg").show();
                            $("#redeempoints").val('');
                            $("#receiverEmail").val('');
                            $("#generate-gift-card").html('Generate Gift Card');
                            $("#redeempoints").html('Generate Gift Card');
                        } 
                    }           
                });
	        }
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View.Context
	,	getContext: function getContext()
		{
			//@class NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View.Context
			return {
				avail_points: Math.floor(this.model.get('available_points')),
                iseligibleforloyalty: this.model.get('iseligibleforloyalty') == 'T',
                amount: Math.floor(this.model.get('available_points')*this.model.get('redeem_ratio'))
			};
		}
	});
});
