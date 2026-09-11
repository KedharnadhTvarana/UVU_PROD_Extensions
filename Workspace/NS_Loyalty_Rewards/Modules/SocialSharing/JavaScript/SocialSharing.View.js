// @module NetScore.NS_Loyalty_Rewards.SocialSharing
define('NetScore.NS_Loyalty_Rewards.SocialSharing.View'
,	[
	'netscore_ns_loyalty_rewards_socialsharing.tpl'
	
	,	'NetScore.NS_Loyalty_Rewards.SocialSharing.Model'
	,	'Profile.Model'
	
	,	'Backbone'
    ]
, function (
	netscore_ns_loyalty_rewards_socialsharing_tpl
	
	,	SocialSharingModel
	,	ProfileModel
	
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.SocialSharing.View @extends Backbone.View
	var pdp,cust_email,cust_id;
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_socialsharing_tpl

	,	initialize: function (options) {

			var self = this;
			pdp= options.pdp;
			this.env_comp=options.env_comp;
			this.fbappid=options.FBappid;
			//This part is used to give points once user clicks on the link sent by email
			var pageURL = options.pageURL;
            var pageURLVariables = pageURL.split('&');
            //console.log('pageURLVariables',pageURLVariables);
            if(pageURLVariables && pageURLVariables.length > 0){
                var customerId,itemId,refermail;
                for (var i = 0; i < pageURLVariables.length; i++)
                {
                    var parameter = pageURLVariables[i].split('=');
                    var parameterName=parameter[0];
                    var parameterValue=parameter[1];
                    if(parameterName == 'customerid')
                        customerId=parameterValue;
                    if(parameterName == 'referrelemail'){
                        refermail=parameterValue;
                    }
                    if (parameterName == 'itemid')
                    {
                        var currentItemId=pdp.getItemInfo().item.internalid;
                        if(parameterValue == currentItemId)
                        {
                            $.get("/app/site/hosting/scriptlet.nl?script=customscript_countsharedpoints&deploy=customdeploy_loyalty_points_socialmed&customerid="+customerId+"&itemid="+currentItemId+"&counter=1&action=email&referrelemail="+refermail, function(data, status){
								//console.log("statys",status);
                            });
                        }
                    }
                }
            }
			$.ajaxSetup({ cache: true });
  			    $.getScript('https://connect.facebook.net/en_US/all.js', function(){
    			   FB.init({
      				appId: options.FBappid,
      				version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    			});
    		});
            self.render();
		}

	,	events: {
			'click [data-action="email-share-product"]': 'sendEmail',
            'click [data-action="email-button"]': 'clearForm',
			'click #fb-share-local': 'OpenShareDialog'
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,	clearForm: function()
		{
            jQuery("#yourFriendName").val("");
            jQuery("#yourFriendEmail").val("");
            jQuery("#message").hide("");
            jQuery("#messageArea").val("");
            jQuery("#message").html("");
            $("#referral-name").html('');
            $("#referral-name").hide();
            $("#referral-email").html('');
            $("#referral-email").hide();
        }

    ,   sendEmail: function()
        {
            var pointsget;
            $("#referral-name").hide();
            $("#message").hide();
            $("#referral-email").hide();
            var isvalid=true;
            var temp=SC.LOYALTY_DATA;
            
            if(temp)
                pointsget=temp.email_share_points;
            else
                pointsget=0;
            var pmodel=ProfileModel.getInstance();
            var yourFriendName=jQuery("#yourFriendName").val();
            var yourFriendEmail=jQuery("#yourFriendEmail").val();
            var shareDescription=jQuery("#messageArea").val();
            var itemId=pdp.getItemInfo().item.internalid;
            var gotoUrl = Backbone.history.location.href;
			gotoUrl = gotoUrl.toString();
			console.log("gotoUrl",gotoUrl);
			console.log("window",window.location.href);
            var customerId = pmodel.id;
            var regexp = /[^a-zA-Z]/g;
            var email_pattern=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

            if (yourFriendName.length==0) 
            {
                $("#referral-name").html('Please enter name');
                $("#referral-name").show();
                isvalid=false;
                return false;
            }
            if (yourFriendEmail.length==0) 
            {
                $("#referral-email").html('Please enter Email ID');
                $("#referral-email").show();
                isvalid=false;
                return false;
            }
            if(!(yourFriendEmail.match(email_pattern)))
            {
                $("#referral-email").html('Please enter valid Email ID');
                $("#referral-email").show();
                isvalid=false;
                return false;
            }

            // AJAX CALL
            if(isvalid)
            {
                $("#email-share").html("Sending...");
                $.get("/app/site/hosting/scriptlet.nl?script=customscript_refer_a_friend_for_loyalty&deploy=1&customerid="+customerId+"&itemid="+itemId+"&yourFriendName="+yourFriendName+"&yourFriendEmail="+yourFriendEmail+"&shareDescription="+shareDescription+"&gotoUrl="+gotoUrl, function(data, status){
                    if(status == 'success'){
                        if(data == 'Congratulations! Email sent successfully.Thank you :)'){
                            $("#message").html("Thank you for sharing product. You will get "+pointsget+" reward points when the recipient clicks on the shared link.");
                            $("#message").show();
                            jQuery("#yourFriendName").val("");
                            jQuery("#yourFriendEmail").val("");
                            jQuery("#messageArea").val("");
                        }
                        else
                            $("#message").html("Unable Process");
                            $("#message").show();  
                            $("#email-share").html("Share");
                    }           
                });
                return false;
            }
        }
	,	OpenShareDialog: function()
		{
            var pointsget;
			var url=window.location.href;
			cust_id = ProfileModel.getInstance().id;
			cust_email = ProfileModel.getInstance().get("email");
			var currentItemId=pdp.getItemInfo().item.internalid;
            var pointsget=this.env_comp.getConfig('loyaltyapp.fbsharepoints');
            var temp=SC.LOYALTY_DATA;
            if(temp)
			    pointsget=temp.fb_share_points;
            else
                pointsget=0;

            FB.ui({
  				method: 'share',
  				href: url,
			}, function(response)
            {
				console.log('response',response);
                if((response) && (response != 'undefined') && (response.error_code != '4201'))
                {
                  $.get("/app/site/hosting/scriptlet.nl?script=customscript_countsharedpoints&deploy=customdeploy_loyalty_points_socialmed&customerid="+cust_id+"&itemid="+currentItemId+"&counter=1&action=share&referrelemail="+cust_email, function(data, status){
                    if(status == 'success'){
                        //alert('data'+data);
                        $('#fb-success-msg').html('Thank you for sharing product. You will get '+pointsget+' reward points');
                    $('#fb-success-msg').show(2000);
                    setTimeout(function(){
                      $('#fb-success-msg').hide(1000);
                      $('#fb-success-msg').html('');
                    }, 5000);
                    }
                });
                }
			});
		}

		//@method getContext @return NetScore.NS_Loyalty_Rewards.SocialSharing.View.Context
	,	getContext: function getContext()
		{
            var isEnableEmailShare=this.env_comp.getConfig('loyaltyapp.enableemailshare');
            var isEnableFbShare=this.env_comp.getConfig('loyaltyapp.enablefbshare');
            var temp=SC.LOYALTY_DATA, isCustomerELigibleforLoyalty='F';
			//console.log(pdp.getItemInfo());
            console.log(this.fbappid);
            var itemEligible=pdp.getItemInfo().item.custitem_item_is_eligible;
			var item_name=pdp.getItemInfo().item.displayname;
            if(temp)
                isCustomerELigibleforLoyalty=temp.iseligibleforloyalty;
			var isLogged=ProfileModel.getInstance().get('isLoggedIn');
            return{
                url:window.location.href,
                itemName: item_name,
                itemEligible: itemEligible == true || false,
                isCustomerELigibleforLoyalty: isCustomerELigibleforLoyalty == 'T' || false,
				isLogged:isLogged == 'T' || false,
                isEnableEmailShare: isEnableEmailShare,
                isEnableFbShare: isEnableFbShare && this.fbappid.length > 3,
            }
		}
	});
});
