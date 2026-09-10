var extensions = {};

extensions['Tvarana.applecare_addon.1.0.2'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Tvarana/applecare_addon/1.0.2/' + asset;
}

define('Tvarana.UVU.UVU.View', [
    'Backbone',
    'tvarana_uvu_uvu.tpl'
], function (
    Backbone,
    tvarana_uvu_uvu_tpl
) {
    'use strict';

    return Backbone.View.extend({
        template: tvarana_uvu_uvu_tpl,

        events: {
            
        },

        initialize: function () {
           
        },

    });
});


// Model.js
// -----------------------
// @module Case
define("Tvarana.UVU.UVU.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/UVU.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Tvarana.UVU.UVU.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/UVU/SuiteScript2/UVU.Service.ss"
            ),
            true
        )
});
});


define(
    'Tvarana.UVU.UVU',
    [
        'Tvarana.UVU.UVU.View',
        'tvarana_uvu_uvu.tpl',
        'Cart.AddToCart.Button.View',
        'underscore',
        'Utils',
        'jQuery'
    ],
    function (
        UVUView,
        tvarana_uvu_uvu_tpl,
        AddToCartButtonView,
        _,
        Utils,
        jQuery
    ) {
        'use strict';

        // Function to check if the quantity error is displayed
        function detectErrorMessages() {
            const errorElement = document.getElementById("quantity-error");
            if (errorElement && errorElement.style.display !== "none") {
                console.log("Error detected: Quantity error is present!");
                return true;
            } else {
                console.log("No quantity error detected.");
                return false;
            }
        }

        function addAppleCareToCart(quantity) {
            try {
                var itemId = jQuery('.add-to-cart-btn').data('itemid');
                if (!itemId) {
                    console.warn('No AppleCare ID found in DOM.');
                    return;
                }

                console.log('Adding AppleCare to the cart with quantity:', quantity);
                var cart = SC.Application.getComponent('Cart');
                cart.addLine({
                    line: {
                        quantity: quantity || 1, 
                        item: {
                            internalid: parseInt(itemId)
                        }
                    }
                }).then(function () {
                    console.log(`AppleCare item ${itemId} added to cart with quantity ${quantity}.`);

                    // Re-enable View Cart and Checkout buttons after AppleCare is successfully added
                    var btn = document.getElementsByClassName("cart-confirmation-modal-view-cart")[0];
                    if (btn) {
                        console.log("Enabling 'View Cart' and 'Checkout' buttons after successful AppleCare addition...");
                        btn.classList.remove("disabled");
                        btn.style.pointerEvents = "auto";
                        btn.style.opacity = "1";
                    }
                }).catch(function (err) {
                    console.error('Failed to add AppleCare item:', err);
                    // Keep buttons disabled if AppleCare addition fails
                    console.log("AppleCare addition failed, keeping buttons disabled.");
                });
            } catch (e) {
                console.error('Error in AppleCare addition:', e);
                // Keep buttons disabled if there's an error
                console.log("Error occurred during AppleCare addition, keeping buttons disabled.");
            }
        }

        return {
            mountToApp: function mountToApp(container) {
                _.extend(AddToCartButtonView.prototype, {
                    addToCart: _.wrap(
                        AddToCartButtonView.prototype.addToCart,
                        function (originalFunction) {
                            

                            var result = originalFunction.apply(this, _.toArray(arguments).slice(1));
                            console.log('Main item attempted to add.');

                            setTimeout(function () {
                                // Check if error is present
                                if (detectErrorMessages()) {
                                    console.log("Error detected, preventing add to cart functionality.");
                                    return; // Do not proceed if there's an error
                                }

                                try {
                                    var productPage = SC.Application.getComponent('PDP');
                                    var selectedMatrixChildren = productPage.getSelectedMatrixChilds();

                                    // Check if it's a matrix item (has matrix children)
                                    if (selectedMatrixChildren && selectedMatrixChildren.length > 0) {
                                        console.log('Matrix item detected.');
                                    } else {
                                        console.log('Normal (non-matrix) item detected.');

                                        var btn = document.getElementsByClassName("cart-confirmation-modal-view-cart")[0];
                                        if (btn) {
                                            console.log("Disabling 'View Cart' and 'Checkout' buttons...");
                                            btn.classList.add("disabled");
                                            btn.style.pointerEvents = "none";
                                            btn.style.opacity = "0.5";
                                        }

                                        setTimeout(function () {
                                            var mainItemQty = parseInt(jQuery('input[name="quantity"]').val()) || 1;
                                            console.log('Main item selected quantity:', mainItemQty);

                                            // DELAYED addition so AppleCare doesn't show in the popup
                                               
                                                setTimeout(function () {
                                                addAppleCareToCart(mainItemQty);
                                            }, 1500);
                                        }, 200);
                                    }
                                } catch (err) {
                                    console.error('Error checking matrix selection or adding AppleCare:', err);
                                }
                            }, 50);

                            return result;
                        }
                    )
                });

               
            }
        };
    }
);


};

extensions['Tvarana.HeaderMenuCustomisation.1.1.3'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Tvarana/HeaderMenuCustomisation/1.1.3/' + asset;
}

// @module Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation
define('Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View'
,	[
	'tvarana_headermenucustomisation_headermenucustomisation.tpl'
	
	,	'Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.SS2Model'
	
	,	'Backbone'
    ]
, function (
	tvarana_headermenucustomisation_headermenucustomisation_tpl
	
	,	HeaderMenuCustomisationSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View @extends Backbone.View
	return Backbone.View.extend({

		template: tvarana_headermenucustomisation_headermenucustomisation_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new HeaderMenuCustomisationModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View.Context
	,	getContext: function getContext()
		{
			//@class Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/HeaderMenuCustomisation.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/HeaderMenuCustomisation/SuiteScript2/HeaderMenuCustomisation.Service.ss"
            ),
            true
        )
});
});



define(
	'Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation'
	, [
		'Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View'
	]
	, function (
		HeaderMenuCustomisationView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {


				function isMyAccountPage(url) {
					return url.includes('my_account');
				}

				var currentUrl = window.location.pathname.toLowerCase();
				var Checkout = container.getComponent('Checkout');
				if (Checkout == null && isMyAccountPage(currentUrl) == false) {
					var HomeView = require('Home.View');

					_.extend(HomeView.prototype, {
						getContext: _.wrap(HomeView.prototype.getContext, function (originalFunction) {
							var context = originalFunction.apply(this, _.toArray(arguments).slice(1));

							return _.extend(context, {
								hideCarouselImages: SC.CONFIGURATION.home.hideCarouselImages

							});
						})
					});
				}

			}
		};
	});


};

extensions['NetScore.NS_Loyalty_Rewards.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/NetScore/NS_Loyalty_Rewards/1.0.0/' + asset;
}

// @module NetScore.NS_Loyalty_Rewards.EarnedHistory
define('NetScore.NS_Loyalty_Rewards.EarnedHistory.View'
,	[
	    'netscore_ns_loyalty_rewards_earnedhistory.tpl'  
	,	'Backbone'
    ,   'Profile.Model'
    ]
, function (
	    netscore_ns_loyalty_rewards_earnedhistory_tpl 
	,	Backbone
    ,   ProfileModel
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.EarnedHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_earnedhistory_tpl

	,	initialize: function (options) {
            this.application=options.application;
            this.env_comp=this.application.getComponent("Environment");
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,   getSelectedMenu: function ()
        {
            return 'eanredhistory';
        }

        //@method getBreadcrumbPages
    ,   getBreadcrumbPages: function ()
        {
        	var earnedlabel=this.env_comp.getConfig("loyaltyapp.eanredhistory");
            return {
                text: earnedlabel
            ,   href: '/earned-history'
            };
        }

		//@method getContext @return NetScore.NS_Loyalty_Rewards.EarnedHistory.View.Context
	,	getContext: function getContext()
		{
			//console.log("this",this.collection.models[0]);
			
            return {
            	iseligibleforloyalty : this.model.get('iseligibleforloyalty') == 'T',
                earned_points_availble: this.model.get('earned_points'),
                earned_points: this.model.get('earned_points')|| 0,
                redeem_points_availble:this.model.get('redeem_points'),
                redeem_points:this.model.get('redeem_points') || 0,
                availble_points:this.model.get('availble_points') || 0,
                currency_symbol: ProfileModel.getInstance().get('currency').symbol,
                data: this.model.get('earned_data'),
                nopoints: this.model.get('availble_points')
            }
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.EarnedHistory.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
            //@property {String} urlRoot
        urlRoot: function(){ 
            return '/app/site/hosting/scriptlet.nl?script=customscript_nst_lr_website_info&deploy=1&action=earnedhistory';
        }
    });
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.EarnedHistory.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/EarnedHistory/SuiteScript2/EarnedHistory.Service.ss"
            ),
            true
        )
});
});



define(
	'NetScore.NS_Loyalty_Rewards.RedeemHistory'
,   [
		'NetScore.NS_Loyalty_Rewards.RedeemHistory.Router'
	]
	,   function (
			Router
		)
	{
		'use strict';

		return  {
			mountToApp: function mountToApp (container)
			{
				var environment_component = container.getComponent("Environment");
				if (environment_component) 
				{
					var redeemlabel=environment_component.getConfig('loyaltyapp.redeemhistory');
					var redeemseq=environment_component.getConfig('loyaltyapp.redeemseq');
					var myaccountmenu = container.getComponent("MyAccountMenu");
					if(myaccountmenu){	
						var redeemhistory = {
							id: "loyaltyredeem",
							groupid: "loyaltysuiteapp",
							name: redeemlabel,
							index: redeemseq,
							url: "loyalty-used"
						}

						myaccountmenu.addGroupEntry(redeemhistory);
					}
					return new Router(container);
				}

			}
		};
	});


// @module NetScore.NS_Loyalty_Rewards.RedeemHistory
define('NetScore.NS_Loyalty_Rewards.RedeemHistory.View'
,	[
		'netscore_ns_loyalty_rewards_redeemhistory.tpl'
	,	'NetScore.NS_Loyalty_Rewards.RedeemHistory.Model'
	,	'Backbone'
    ]
, function (
		netscore_ns_loyalty_rewards_redeemhistory_tpl
	,	RedeemHistoryModel
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.RedeemHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_redeemhistory_tpl

	,	initialize: function (options) {

			this.application=options.application;
			this.env_comp=this.application.getComponent('Environment');
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,    getSelectedMenu: function ()
        {
            return 'loyalty-used';
        }

        //@method getBreadcrumbPages
    ,    getBreadcrumbPages: function ()
        {
        	var redeemlabel=this.env_comp.getConfig('loyaltyapp.redeemhistory');
            return {
                text: redeemlabel
            ,   href: '/loyalty-used'
            };
        }

		//@method getContext @return NetScore.NS_Loyalty_Rewards.RedeemHistory.View.Context
	,	getContext: function getContext()
		{
			console.log("text", this.model.get('data'));

            var fileUrl;
            var protocol=location.protocol;
            var hostname=window.location.hostname;
            var basicURL=protocol+"//"+hostname;
            console.log(basicURL);
			return {
				 isnotempty: this.model.get('isdata') == true || false,
				 iseligibleforloyalty: this.model.get('iseligibleforloyalty') == 'T',
				 data: this.model.get('earned_data'),
				 basicURL: basicURL
			};
		}
	});
});



define(
	'NetScore.NS_Loyalty_Rewards.ReferalCodeShare'
,   [
		'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Router'
	]
,   function (
		Router
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			
			var environment_component = container.getComponent("Environment");
			if (environment_component) 
			{
				var referlabel=environment_component.getConfig('loyaltyapp.referearn');
				var referseq=environment_component.getConfig('loyaltyapp.referfrndseq');
				var myaccountmenu = container.getComponent("MyAccountMenu");
				if(myaccountmenu){	
					var redeemhistory = {
						id: "refernearn",
						groupid: "loyaltysuiteapp",
						name: referlabel,
						index: referseq,
						url: "referfriend"
					}

					myaccountmenu.addGroupEntry(redeemhistory);
				}
				return new Router(container);
			}

		}
	};
});


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



define(
	'NetScore.NS_Loyalty_Rewards.TiersInfo'
,   [
		'NetScore.NS_Loyalty_Rewards.TiersInfo.Router'
	]
,   function (
		Router
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			
			var environment_component = container.getComponent("Environment");
			if (environment_component) 
			{
				var tierlabel=environment_component.getConfig('loyaltyapp.loyaltytiers');
				var tierseq=environment_component.getConfig('loyaltyapp.tiersseq');
				var myaccountmenu = container.getComponent("MyAccountMenu");
				if(myaccountmenu){	
					var redeemhistory = {
						id: "loyaltytiers",
						groupid: "loyaltysuiteapp",
						name: tierlabel,
						index: tierseq,
						url: "tiers"
					}

					myaccountmenu.addGroupEntry(redeemhistory);
				}
				return new Router(container);
			}
		}
	};
});


// @module NetScore.NS_Loyalty_Rewards.TiersInfo
define('NetScore.NS_Loyalty_Rewards.TiersInfo.View'
,	[
		'netscore_ns_loyalty_rewards_tiersinfo.tpl'
	,	'NetScore.NS_Loyalty_Rewards.TiersInfo.Model'
	,	'Backbone'
    ]
, function (
		netscore_ns_loyalty_rewards_tiersinfo_tpl
	,	TiersInfoModel
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.TiersInfo.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_tiersinfo_tpl

	,	initialize: function (options) {
			this.application=options.application;
			this.env_comp=this.application.getComponent('Environment');		
		}

	,	getSelectedMenu: function getSelectedMenu () {
            return 'loyaltytiers'
        }

    ,	getBreadcrumbPages : function () {
    		var tierlabel=this.env_comp.getConfig('loyaltyapp.loyaltytiers');
            return [{
                text: tierlabel,
                href: '/loyalty-tiers'
            }]
        }

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return NetScore.NS_Loyalty_Rewards.TiersInfo.View.Context
	,	getContext: function getContext()
		{
			var flag,isStartLevel, current_points, next_imageurl_icon, current_image_url_icon, isFinalLevel,current_image_url,next_imageurl, tierName, tierPoints, nexttierName, nexttierPoints, difference, next_level_threshold_points,current_level_object,next_level_object;
	    	flag=false;
	    	var iseligibleforloyalty=this.model.get("iseligibleforloyalty") == 'T';
	    	if(iseligibleforloyalty)
	    	{
	    		var total_tiers=this.model.get("data");
	    		console.log("total_tiers",total_tiers);
		    	if(total_tiers.length == 1){
		    		flag=false;
		    		current_level_object=total_tiers[0];
		    		tierName=current_level_object.name;
		    		tierPoints=current_level_object.points;
		    		current_image_url=current_level_object.image_url;
		    		current_image_url_icon=current_level_object.image_url_2;
		    		current_points=parseInt((current_level_object.current_points),10);
		    		next_level_threshold_points=parseInt((current_level_object.threshold),10);
		    		difference=next_level_threshold_points-current_points;
		    	}
		    	else
		    	{
		    		flag=true;
		    		current_level_object=total_tiers[1];
					next_level_object=total_tiers[0]; 

					tierName=current_level_object.name;
		    		tierPoints=current_level_object.points;
		    		current_image_url=current_level_object.image_url;
		    		current_image_url_icon=current_level_object.image_url_2;
		    		next_imageurl=next_level_object.image_url;
		    		next_imageurl_icon=next_level_object.image_url_2;
		    		//next_imageurl_2=next_level_object.image_url_2;
		    		nexttierName=next_level_object.name;
		    		nexttierPoints=next_level_object.points;

		    		current_points=parseInt((current_level_object.current_points),10);
		    		next_level_threshold_points=parseInt((next_level_object.threshold),10);
		    		difference=next_level_threshold_points-current_points;
		    	}

		    	isStartLevel=current_level_object.current_level;
		    	isFinalLevel=current_level_object.next_level;
	    	}
	    	//console.log('difference '+difference);
		    return {
		    	isStartLevel: isStartLevel == "@NONE@" ,
		    	isFinalLevel: isFinalLevel == "@NONE@",
			  	tierName: tierName,
			  	tierPoints: tierPoints,
			  	current_image_url:current_image_url,
			  	next_imageurl:next_imageurl,
			  	nexttierName: nexttierName,
			  	current_image_url_icon: current_image_url_icon,
			  	next_imageurl_icon:next_imageurl_icon,
			  	nexttierPoints: nexttierPoints,
			  	difference: Math.floor(difference),
			  	flag: flag,
			  	iseligibleforloyalty: iseligibleforloyalty
        	}
		}
	});
});



define(
	'NetScore.NS_Loyalty_Rewards.LoyaltyInfo'
,   [
		'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Router'
	]
,   function (
		Router
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var environment_component = container.getComponent("Environment");
			if (environment_component) 
			{
				var profielLabel=environment_component.getConfig('loyaltyapp.updateprofile');
				var profileseq=environment_component.getConfig('loyaltyapp.profileupdateseq');
				var myaccountmenu = container.getComponent("MyAccountMenu");
				if(myaccountmenu){	
					var redeemhistory = {
						id: "profileupdate",
						groupid: "loyaltysuiteapp",
						name: profielLabel,
						index: profileseq,
						url: "update-profile"
					}

					myaccountmenu.addGroupEntry(redeemhistory);
				}
				return new Router(container);
			}			
		}
	};
});


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


// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.EarnedHistory.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.EarnedHistory.View' ,
		'NetScore.NS_Loyalty_Rewards.EarnedHistory.Model'
	,	'Backbone'
	]
,	function (
		EarnedHistoryView
	,	EarnedHistoryModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.LoyaltyEarnedHistory.LoyaltyEarnedHistory.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'earned-history': 'loyaltyHistory'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	loyaltyHistory: function () {
            var model = new EarnedHistoryModel();
            var view = new EarnedHistoryView({model: model, application: this.application});
            model.fetch().done(function() {
                view.showContent();
            });
        }
	});
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/LoyaltyInfo.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.RedeemHistory.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
            //@property {String} urlRoot
        urlRoot: function(){ 
            return '/app/site/hosting/scriptlet.nl?script=customscript_nst_lr_website_info&deploy=1&action=redeemhistory';
        }
    });
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
            //@property {String} urlRoot
        urlRoot: function(){ 
            return '/app/site/hosting/scriptlet.nl?script=customscript_nst_lr_website_info&deploy=1&action=referandearn';
        }
    });
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.TiersInfo.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/TiersInfo.Service.ss"
            )
        )
        
});
});


// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.View'
	,	'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Model'
	,   'NetScore.NS_Loyalty_Rewards.LoyaltyInfoGet.Model'
	,	'Backbone'
	]
,	function (
		LoyaltyInfoView
	,	LoyaltyInfoModel
	,   LoyaltyInfoGetModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.LoyaltyProfileUpdate.LoyaltyProfileUpdate.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'update-profile': 'updateProfileInformation'
		
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	updateProfileInformation: function() 
        { 
            var umodel = new LoyaltyInfoModel();
            var gmodel = new LoyaltyInfoGetModel(); 

            var promise = jQuery.Deferred();
            var self = this;

            gmodel.fetch({
                  
            }).done(function () {
                promise.resolve();
            });
            promise.done(function () {
                var view = new LoyaltyInfoView({model: umodel, gmodel: gmodel, application: self.application});
                view.showContent();
            });
        }
	});
});


// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.RedeemHistory.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.RedeemHistory.View'
	,	'NetScore.NS_Loyalty_Rewards.RedeemHistory.Model'
	,	'Backbone'
	]
,	function (
		RedeemHistoryView
	,	RedeemHistoryModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.LoyaltyRedeemedHistory.LoyaltyRedeemedHistory.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'loyalty-used': 'loyaltyRedeemed',
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	loyaltyRedeemed: function () {
            var model = new RedeemHistoryModel();
            var view = new RedeemHistoryView({model: model, application: this.application});
                model.fetch().done(function() {
                view.showContent();
            });
        }
	});
});


// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.View'
	,	'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Model'
	,	'Backbone'
	]
,	function (
		ReferalCodeShareView
	,	ReferalCodeShareModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.ReferandEarn.ReferandEarn.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'referfriend': 'referfriend'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	referfriend: function() 
        {
            var model = new ReferalCodeShareModel();
            var promise = jQuery.Deferred();
            var self = this;

            model.fetch({
                  
            }).done(function () {
                promise.resolve();
            });
            promise.done(function () {
                var view = new ReferalCodeShareView({model: model, application: self.application});
                view.showContent();
            });
        }
	});
});


// @module module_dep_name
define('NetScore.NS_Loyalty_Rewards.TiersInfo.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.TiersInfo.View'
	,	'NetScore.NS_Loyalty_Rewards.TiersInfo.Model'
	,	'Backbone'
	]
,	function (
		TiersInfoView
	,	TiersInfoModel
	,	Backbone
	)
{
	'use strict';

	//@class Netscore.CustomerTiers.CustomerTiers.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
            'tiers': 'tiersList'
        }

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	tiersList: function () {
            var model = new TiersInfoModel();
            var view = new TiersInfoView({model: model, application: this.application});
            model.fetch().done(function() {
                view.showContent();
            });
        }
	});
});


// @module NetScore.NS_Loyalty_Rewards.EarnedHistory
define('NetScore.NS_Loyalty_Rewards.EarnedHistory.NotEligible.View'
,	[
	    'netscore_ns_loyalty_rewards_earnedhistory_not_eligible.tpl'  
	,	'Backbone'
    ,   'Profile.Model'
    ]
, function (
	    netscore_ns_loyalty_rewards_earnedhistory_not_eligible_tpl 
	,	Backbone
    ,   ProfileModel
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.EarnedHistory.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_earnedhistory_not_eligible_tpl

	,	initialize: function (options) {
            this.env_comp=options.env_comp;
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,   getSelectedMenu: function ()
        {
            return 'eanredhistory';
        }

        //@method getBreadcrumbPages
    ,   getBreadcrumbPages: function ()
        {
            return {
                text: this.title
            ,   href: '/earned-history'
            };
        }

		//@method getContext @return NetScore.NS_Loyalty_Rewards.EarnedHistory.View.Context
	,	getContext: function getContext()
		{
			//console.log("this",this.collection.models[0]);
			
            return {
            	email : this.env_comp.getConfig('loyaltyapp.mailtonoteligible'),
            	message: this.env_comp.getConfig('loyaltyapp.messagenoteligible')
            }
		}
	});
});



define(
	'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate'
,   [
		'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Router'
	]
,   function (
		Router
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var environment_component = container.getComponent("Environment");
			if (environment_component) {
				var gclabel = environment_component.getConfig("loyaltyapp.generategiftcard");
				var gcseq = environment_component.getConfig("loyaltyapp.gcgen");
				var myaccountmenu = container.getComponent("MyAccountMenu");
                if(myaccountmenu){
                    var generategiftcard = {
                        id: "generategiftcard",
                        groupid: "loyaltysuiteapp",
                        name: gclabel,
                        index: gcseq,
                        url: "generategiftcard"
                    }
                    myaccountmenu.addGroupEntry(generategiftcard);
                }
                return new Router(container);
			}

		}
	};
});


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


// @module NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate
define('NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Router'
,	[
		'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Model'
	,	'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View'
	,	'Backbone'
    ]
, function (
		GenerateGiftCertificateModel
	,	GenerateGiftCertificateView
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View @extends Backbone.View
	return Backbone.Router.extend({

		initialize: function (application) {
			this.application = application;
		}

	,	routes: {
          'generategiftcard': 'generateGiftcard'
        }

	,	generateGiftcard: function() 
        {
            var model = new GenerateGiftCertificateModel();
            var self = this;
            model.fetch({
           
            }).done(function () {
                var view = new GenerateGiftCertificateView({model: model, application: self.application});
                view.showContent();
            });
        }
	});
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.LoyaltyInfoGet.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
    ) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
            //@property {String} urlRoot
        urlRoot: function(){ 
            return '/app/site/hosting/scriptlet.nl?script=customscript_nst_lr_website_info&deploy=1&action=updateprofile';
        }
    });
});


define(
	'NetScore.NS_Loyalty_Rewards.EarnedHistory'
	,   [
	'NetScore.NS_Loyalty_Rewards.EarnedHistory.Router',
	'NetScore.NS_Loyalty_Rewards.EarnedHistory.NotEligible.View',
	'NetScore.NS_Loyalty_Rewards.RedeemHistory',
	'NetScore.NS_Loyalty_Rewards.ReferalCodeShare',
	'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate',		
	'NetScore.NS_Loyalty_Rewards.TiersInfo',
	'NetScore.NS_Loyalty_Rewards.LoyaltyInfo'
	]
	,   function (
		Router,
		NotEligibleView,
		RedeemHistory,
		ReferalCodeShare,
		GenerateGiftCertificate,
		TiersInfo,
		LoyaltyInfo
		
		)
	{
		'use strict';

		return  {
			mountToApp: function mountToApp (container)
			{
				
				var userprofilecomponent = container.getComponent('UserProfile');
				function getuserProfileObj() {
					return new Promise(function(resolve, reject) {
						userprofilecomponent.getUserProfile().done(function(profile) {

							if(profile){
								resolve(profile);
							}
							else{
								reject('error')
							}
						});
					});
				}



				getuserProfileObj().then(function(data) {
			// Run this when your request was successful
			var userProfile = data; 

			var customer = userProfile.internalid;
			var customfields = userProfile.customfields;
			var custAdmin;
			_.each(customfields, function(custom){
				if(custom.id == "custentity_loyalty_program"){
					custAdmin = custom.value;
				}
			})
			//var custAdmin = userProfile.customfields[0].value;
			if(custAdmin == true){


				var layout = container.getComponent('Layout');
				var environment_component = container.getComponent("Environment");
				if (environment_component) {
					var isLoyaltyEnabled = environment_component.getConfig("loyaltyapp.enableloyaltyprogram");
					if(isLoyaltyEnabled){
						if (layout) {
							layout.registerView('noteligible', function() {
								return new NotEligibleView({env_comp: environment_component});
							});
						}
						var loyaltyLabel = environment_component.getConfig("loyaltyapp.programlabel");
						var loyaltyProgSeq = environment_component.getConfig("loyaltyapp.loyaltymainseq");
						var earnedlabel = environment_component.getConfig("loyaltyapp.eanredhistory");
						var earnedSeq = environment_component.getConfig("loyaltyapp.earnedseq");
						var isredeemhistoryEnabled = environment_component.getConfig("loyaltyapp.enableredeemhistory");
						var isReferEnabled = environment_component.getConfig("loyaltyapp.enablereferfriend");
						var isGCEnabled = environment_component.getConfig("loyaltyapp.enablegcredeem");
						var isTiersEnabled = environment_component.getConfig("loyaltyapp.enableTiersinfo");
						var isProfileEnabled = environment_component.getConfig("loyaltyapp.enableprofileinfo");
						var myaccountmenu = container.getComponent("MyAccountMenu");

						if(myaccountmenu){

							var loyaltyMenu = {
								id: "loyaltysuiteapp",
								name: loyaltyLabel,
								index: loyaltyProgSeq
							}
							myaccountmenu.addGroup(loyaltyMenu);

							var eanredhistory = {
								id: "eanredhistory",
								groupid: "loyaltysuiteapp",
								name:  earnedlabel,
								index: earnedSeq, 
								url: "earned-history"
							}

							myaccountmenu.addGroupEntry(eanredhistory);
						}
						if(isredeemhistoryEnabled)
							RedeemHistory.mountToApp(container);
						if(isReferEnabled)
							ReferalCodeShare.mountToApp(container);
						if(isGCEnabled)
							GenerateGiftCertificate.mountToApp(container);
						if(isTiersEnabled)
							TiersInfo.mountToApp(container);
						if(isProfileEnabled)
							LoyaltyInfo.mountToApp(container);
						return new Router(container);
					}
				}



			}
		});



				

			}
		};
	});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["Tvarana.UVU.UVU.View","Tvarana.UVU.UVU.Model","Tvarana.UVU.UVU.SS2Model","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.Model","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.SS2Model","NetScore.NS_Loyalty_Rewards.EarnedHistory.View","NetScore.NS_Loyalty_Rewards.EarnedHistory.Model","NetScore.NS_Loyalty_Rewards.EarnedHistory.SS2Model","NetScore.NS_Loyalty_Rewards.RedeemHistory","NetScore.NS_Loyalty_Rewards.RedeemHistory.View","NetScore.NS_Loyalty_Rewards.ReferalCodeShare","NetScore.NS_Loyalty_Rewards.ReferalCodeShare.View","NetScore.NS_Loyalty_Rewards.TiersInfo","NetScore.NS_Loyalty_Rewards.TiersInfo.View","NetScore.NS_Loyalty_Rewards.LoyaltyInfo","NetScore.NS_Loyalty_Rewards.LoyaltyInfo.View","NetScore.NS_Loyalty_Rewards.EarnedHistory.Router","NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Model","NetScore.NS_Loyalty_Rewards.RedeemHistory.Model","NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Model","NetScore.NS_Loyalty_Rewards.TiersInfo.Model","NetScore.NS_Loyalty_Rewards.LoyaltyInfo.Router","NetScore.NS_Loyalty_Rewards.RedeemHistory.Router","NetScore.NS_Loyalty_Rewards.ReferalCodeShare.Router","NetScore.NS_Loyalty_Rewards.TiersInfo.Router","NetScore.NS_Loyalty_Rewards.EarnedHistory.NotEligible.View","NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate","NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.View","NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Model","NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.Router","NetScore.NS_Loyalty_Rewards.LoyaltyInfoGet.Model"];
try{
	extensions['Tvarana.applecare_addon.1.0.2']();
	SC.addExtensionModule('Tvarana.UVU.UVU');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Tvarana.HeaderMenuCustomisation.1.1.3']();
	SC.addExtensionModule('Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['NetScore.NS_Loyalty_Rewards.1.0.0']();
	SC.addExtensionModule('NetScore.NS_Loyalty_Rewards.EarnedHistory');
}
catch(error)
{
	console.error(error);
}

