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

// @module NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints
define('NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View'
,	[
		'netscore_ns_loyalty_rewards_displayloyaltypoints.tpl'
	,	'Backbone'
	,	'Utils'
	,	'jQuery'
	,	'underscore'
	,	'Profile.Model'
    ]
, function (
		netscore_ns_loyalty_rewards_displayloyaltypoints_tpl
	,	Backbone
	,	Utils
	,	jQuery
	,	_
	,	ProfileModel
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_displayloyaltypoints_tpl

	,	initialize: function (options) {
			this.env_comp = options.env_component;
			var self = this;
			this.pdp_info = options.pdp;
			this.pdp_info.on('afterOptionSelection', function(event) {
  				self.current_item=self.pdp_info.getSelectedMatrixChilds();
  				self.render();
			});
			this.pdp_info.on('afterQuantityChange', function(event) {
  				self.current_item=self.pdp_info.getSelectedMatrixChilds();
  				self.render();
			});
			

			this.current_item=this.pdp_info.getSelectedMatrixChilds();
			setTimeout(function(){
				self.render();
			}, 500);
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,	getCurrentItem: function(){
			if(this.current_item && this.current_item.length == 1)
			{
				return this.current_item[0];
			}
			else
				return this.pdp_info.getItemInfo().item;

		}
	,	getDefaultPrice: function getDefaultPrice (details_object, quantity)
		{
			var result={};
			if (details_object.priceschedule && details_object.priceschedule.length)
			{
				var price_schedule
				,	min
				,	max;

				for (var i = 0; i < details_object.priceschedule.length; i++)
				{
					price_schedule = details_object.priceschedule[i];

					min = parseInt(price_schedule.minimumquantity, 10);
					max = parseInt(price_schedule.maximumquantity, 10);

					if ((min <= quantity && quantity < max) || (min <= quantity && !max))
					{
						
						result.price= price_schedule.price;
						result.price_formatted= price_schedule.price_formatted;
					}
				}
				return result;
			}
			else{
				// //@class ItemPrice
				return {
					//@property {Number} price
					price: details_object.onlinecustomerprice
					//@property {String} price_formatted
				,	price_formatted: details_object.onlinecustomerprice_formatted
				};
				//@class Item.Model
			}
		}

	,	getItemPrice: function(selected_matrix_children, quantity){
			var selected_matrix_children = selected_matrix_children;
			var quantity = quantity || 1;
			var item=this.getCurrentItem();

			var details_object = item.onlinecustomerprice_detail
			,	result =  this.getDefaultPrice(details_object, quantity);

			// if it's a matrix it will compute the matrix price
			var self=this;
			if (selected_matrix_children.length)
			{
				// Gets the price of each child
				var children_prices = [];

				_.each(selected_matrix_children, function (child)
				{
					var details_object=child.onlinecustomerprice_detail;
					children_prices.push(self.getDefaultPrice(details_object, quantity));
				});

				if (children_prices.length === 1)
				{
					// If there is only one it means there is only one price to show
					result = children_prices[0];
				}
				else
				{
					// otherwise we should compute max and min to show a range in the GUI
					var children_prices_values = _.pluck(children_prices, 'price')
					,	min_value = _.min(children_prices_values)	//Minimum price from all children items
					,	max_value = _.max(children_prices_values);	//Maximum price from all children items

					if (min_value !== max_value)
					{
						// We return them alongside the result of the parent
						//@class ItemPrice
						//@property {Number?} min This value will be present only in the case the current item is Matrix, has a partial selection and its children have different range
						//of prices. When this property is present will contain the minimum price of all the children items valid to be selected.
						result.min = _.where(children_prices, {price: min_value})[0];
						//@property {Number?} max This value will be present only in the case the current item is Matrix, has a partial selection and its children have different range
						//of prices. When this property is present will contain the maximum price of all the children items valid to be selected.
						result.max = _.where(children_prices, {price: max_value})[0];
						//@class Item.Model
					}
					else
					{
						// they are all alike so we can show any of them
						result = children_prices[0];
					}
				}
			}

			return result;

		}
	
	,	getItemEligibility: function(){
			var isEligible;
			var item=this.getCurrentItem();
			isEligible=item.custitem_item_is_eligible;
			//console.log('isEligible  '+isEligible);
			if((isEligible != 'undefined') ||(isEligible != '') || (isEligible != null))
			{
				return isEligible;	
			}
			return false;
		}

	,	getMaximumPointsRatio: function(){
			var temp = SC.LOYALTY_DATA;
			var item = this.getCurrentItem();

			var pmodel=ProfileModel.getInstance();
			var isLoggedIn=pmodel.get('isLoggedIn');
			var tier_level='', 
			global_earned_points_ratio=0, 
			sku_earned_points_ratio=0, 
			tier_earned_points_ratio=0, 
			maximum_points_ratio=0;
			sku_earned_points_ratio=item.custitem_sku_based_points;
			
			if(!temp)
				return 0;
			var productcategory = item.class;
			console.log("productcategory", productcategory);

			var productcategory_halfpoints = temp.productcategory_halfpoints;
			console.log("productcategory_halfpoints", productcategory_halfpoints);

			var productcategory_nopoints = temp.productcategory_nopoints;
			console.log("productcategory_nopoints", productcategory_nopoints);

			//var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
			var isClassFound = productcategory_nopoints.indexOf(productcategory);

			if(isClassFound >= 0)
				return 0;
			else{
				var isClassFound_=productcategory_halfpoints.indexOf(productcategory);
				if(isClassFound_ >= 0)
					return 0.2;
			}
			

 
            if(!sku_earned_points_ratio)
            	sku_earned_points_ratio=0;

            if(temp){
					global_earned_points_ratio= temp.earned_ratio;
					tier_level=temp.tier_name;
			    }
			else{
				global_earned_points_ratio=0.01;
			}
			if(isLoggedIn == 'T' && (tier_level != ''))
				tier_earned_points_ratio=Number(tier_level.split(":")[1]);
			
		
			if((isLoggedIn == 'T') && (tier_earned_points_ratio != 0)){
				if((tier_earned_points_ratio > sku_earned_points_ratio) && (tier_earned_points_ratio > global_earned_points_ratio))
                {
                    maximum_points_ratio=tier_earned_points_ratio;
                }
                else if(sku_earned_points_ratio != 0){
					if(global_earned_points_ratio > sku_earned_points_ratio){
						maximum_points_ratio=global_earned_points_ratio;
					}
					else{
						maximum_points_ratio=sku_earned_points_ratio;
					}
				}
				else{
					maximum_points_ratio=global_earned_points_ratio;
				}
            }
            else
            {
				if(sku_earned_points_ratio != 0){
					if(global_earned_points_ratio > sku_earned_points_ratio){
						maximum_points_ratio=global_earned_points_ratio;
					}
					else{
						maximum_points_ratio=sku_earned_points_ratio;
					}
				}
				else{
					maximum_points_ratio=global_earned_points_ratio;
				}
			}


			//if(isNaN(points))
				//return Math.round(parseFloat(global_earned_points_ratio*price).toFixed(2));
				return maximum_points_ratio;

		}

	,  	getPointsforThisItem: function(){
			var quantity=1;
			if(document.getElementById('quantity'))
			quantity=$('#quantity').val();
			else
			quantity=1;
			var points_obj={};
			var selected_matrix_item=this.pdp_info.getSelectedMatrixChilds();
			var prices_obj=this.getItemPrice(selected_matrix_item, quantity);
			console.log('prices_obj',prices_obj);
			var min_price=prices_obj.min ? prices_obj.min.price : 0;
			console.log('min_price  ',min_price);
			var max_price=prices_obj.max ? prices_obj.max.price : 0;
			console.log('max_price  ',max_price);
			var price=prices_obj.price;
			console.log('price  '+price);
			var maximum_points_ratio=this.getMaximumPointsRatio();
			console.log('maximum_points_ratio  '+maximum_points_ratio);
			if(min_price)
				points_obj.minimum_points=Math.round(min_price*quantity*maximum_points_ratio);
			else
				points_obj.minimum_points=0;
			if(max_price)
				points_obj.maximum_points=Math.round(max_price*quantity*maximum_points_ratio);
			else
				points_obj.maximum_points=0;
			if(price)
				points_obj.points=Math.round(price*quantity*maximum_points_ratio);
			else
				points_obj.points=0;
			return points_obj;
		}

		//@method getContext @return NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View.Context
	,	getContext: function getContext()
		{
			var pmodel=ProfileModel.getInstance();
			var isLoggedIn=pmodel.get('isLoggedIn');
			var temp=SC.LOYALTY_DATA, isCustomerELigibleforLoyalty='F';
			if(temp){
				isCustomerELigibleforLoyalty=temp.iseligibleforloyalty;
			}
			return {
				isProductEligible: this.getItemEligibility(),
				points_obj: this.getPointsforThisItem(),
				isCustomerELigibleforLoyalty: isCustomerELigibleforLoyalty == 'T',
				isLoggedIn: isLoggedIn == 'T',
				message: 'helo world'
			};
		}
	});
});



define('NetScore.NS_Loyalty_Rewards.SocialSharing'
,   [
		'NetScore.NS_Loyalty_Rewards.SocialSharing.View'
	]
,   function (
		SocialSharingView
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
			var layout = container.getComponent('Layout');
			var environment_component = container.getComponent("Environment");
			var pdp = container.getComponent('PDP');
			var fb_app_id=environment_component.getConfig("loyaltyapp.facebookappid");
			var pageURL = window.location.href.slice(window.location.href.indexOf('?') + 1);
			if(pdp)
			{
				pdp.addChildViews(
					'ProductDetails.Full.View'
				,	{
						'SocialSharing.Flyout': {
							'NetScore.NS_Loyalty_Rewards.SocialSharing.View':
							{
								childViewIndex: 10
							,	childViewConstructor: function()
								{
									//collection.fetch();

									return new SocialSharingView({
										pdp: pdp,
										FBappid: fb_app_id,
										pageURL: pageURL,
										env_comp: environment_component
									});
								}
							}
						}
					}
				);
			}
		}
	};
});


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


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/DisplayLoyaltyPoints.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.SocialSharing.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/SocialSharing.Service.ss"
            )
        )
        
});
});


// @module NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints
define('NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.PLP.View'
,	[
		'netscore_ns_loyalty_rewards_displayplployaltypoints.tpl'
	,	'NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.Model'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'Profile.Model'
    ]
, function (
		netscore_ns_loyalty_rewards_displayplployaltypoints_tpl
	,	DisplayLoyaltyPointsModel
	,	Backbone
	,	jQuery
	,	_
	,	ProfileModel
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_displayplployaltypoints_tpl

	, 	contextDataRequest: ['item']

	,	initialize: function (options) {
			debugger;
			this.env_comp=options.env_component;
			var self=this; 
			setTimeout(function(){
				self.render();
			}, 2000);

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,	getItemEligibility: function(){
			var isEligible;
			var item=this.contextData.item();
			isEligible=item.custitem_item_is_eligible;
			if((isEligible != 'undefined') ||(isEligible != '') || (isEligible != null))
			{
				return isEligible;	
			}
			return false;
		}

	,  	getPointsforThisItem: function(){
		debugger;
			var temp=SC.LOYALTY_DATA;
			var item=this.contextData.item();
			var global_earned_points_ratio=0, 
			sku_earned_points_ratio=0, 
			tier_earned_points_ratio=0, 
			tier_level='',
			maximum_points_ratio=0;
			var pmodel=ProfileModel.getInstance();
			var isLoggedIn=pmodel.get('isLoggedIn');
			var points=0;
			var price=0;
			var quantity=1;

			/*product categories based points**/
			var details_object = item.onlinecustomerprice_detail || {}; 
			if (details_object.priceschedule && details_object.priceschedule.length)
			{
				var price_schedule
				,	min
				,	max;

				for (var i = 0; i < details_object.priceschedule.length; i++)
				{
					price_schedule = details_object.priceschedule[i];

					min = parseInt(price_schedule.minimumquantity, 10);
					max = parseInt(price_schedule.maximumquantity, 10);

					if ((min <= quantity && quantity < max) || (min <= quantity && !max))
					{
						
						price=price_schedule.price;
					}
				}
			}
			else
				price=item.onlinecustomerprice_detail.onlinecustomerprice;

			if(!temp)
				return 0;
			var productcategory = item.class;
			console.log("productcategory", productcategory);
			var productcategory_halfpoints = temp.productcategory_halfpoints;
			console.log("productcategory_halfpoints", productcategory_halfpoints);
			var productcategory_nopoints = temp.productcategory_nopoints;
			console.log("productcategory_nopoints", productcategory_nopoints);
			var isClassFound = productcategory_nopoints.indexOf(productcategory);
			if(isClassFound >= 0)
				return 0;
			else{
				var isClassFound_=productcategory_halfpoints.indexOf(productcategory);
				if(isClassFound_ >= 0)					
				return Math.round(price * 0.2);
			}


			



            sku_earned_points_ratio=item.custitem_sku_based_points;
            if(!sku_earned_points_ratio)
            	sku_earned_points_ratio=0;

            if(temp){
				global_earned_points_ratio=temp.earned_ratio;
				tier_level=temp.tier_name;
			     }
			else{
				global_earned_points_ratio=0.1;
			}

			if(isLoggedIn == 'T' && (tier_level != ''))
				tier_earned_points_ratio=Number(tier_level.split(":")[1]);
			
		
			if((isLoggedIn == 'T') && (tier_earned_points_ratio != 0)){
				if((tier_earned_points_ratio > sku_earned_points_ratio) && (tier_earned_points_ratio > global_earned_points_ratio))
                {
                    points=parseFloat(tier_earned_points_ratio*quantity*price).toFixed(2);
                }
                else if(sku_earned_points_ratio != 0){
					if(global_earned_points_ratio > sku_earned_points_ratio){
						points=parseFloat(global_earned_points_ratio*quantity*price).toFixed(2);
					}
					else{
						points=parseFloat(sku_earned_points_ratio*quantity*price).toFixed(2);
					}

				}
				else{
					points=parseFloat(global_earned_points_ratio*quantity*price).toFixed(2);
				}
            }
            else
            {
				if(sku_earned_points_ratio != 0){
					if(global_earned_points_ratio > sku_earned_points_ratio){
						points=parseFloat(global_earned_points_ratio*quantity*price).toFixed(2);
					}
					else{
						points=parseFloat(sku_earned_points_ratio*quantity*price).toFixed(2);
					}
				}
				else{
					points=parseFloat(global_earned_points_ratio*quantity*price).toFixed(2);
				}
			} 

				return Math.round(points);
			 
		}



		//@method getContext @return NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View.Context
	,	getContext: function getContext()
		{
			var pmodel=ProfileModel.getInstance();
			var isLoggedIn=pmodel.get('isLoggedIn');
			var temp=SC.LOYALTY_DATA, isCustomerELigibleforLoyalty='F';
			if(temp){
				isCustomerELigibleforLoyalty=temp.iseligibleforloyalty;
			}
			return {
				isProductEligible: this.getItemEligibility(),
				points: this.getPointsforThisItem(),
				isCustomerELigibleforLoyalty: isCustomerELigibleforLoyalty == 'T',
				isLoggedIn: isLoggedIn == 'T'
			};
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


define('NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints'
,   [
		'NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View',
		'NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.PLP.View',
		'NetScore.NS_Loyalty_Rewards.SocialSharing',
		'Utils'
	]
,   function (
		DisplayLoyaltyPointsView,
		DisplayLoyaltyPointsPLPView,
		SocialSharing,
		Utils
	)
{
	'use strict';
	var _container=null;
	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			_container=container;
			var layout = container.getComponent('Layout');
			var environment_component = container.getComponent("Environment");
			if (environment_component) {
				var isLoyaltyEnabled = environment_component.getConfig("loyaltyapp.enableloyaltyprogram");
				var isPointsDisplayPLP=environment_component.getConfig("loyaltyapp.enablepointsdisplayplp");
				var isPointsDisplayPDP=environment_component.getConfig("loyaltyapp.enablepointsdisplaypdp");
				var isEmailShareEnabled=environment_component.getConfig("loyaltyapp.enableemailshare");
				var isFBShareEnabled=environment_component.getConfig("loyaltyapp.enablefbshare");
				if(isLoyaltyEnabled){
					var url=Utils.getAbsoluteUrl(getExtensionAssetsPath('services/DisplayLoyaltyPoints.Service.ss'));
					$.ajax({url: url, success: function(result){
						SC.LOYALTY_DATA=result;
						//console.log('SC',SC);
		    		}});
					if(isPointsDisplayPLP){
						var pdp = container.getComponent('PDP');
						if(pdp)
						{
							pdp.addChildViews(
								'ProductDetails.Full.View'
							,	{
									'Product.Price': {
										'Netscore.DisplayLoyaltyPoints.DisplayLoyaltyPoints.View':
										{
											childViewIndex: 10
										,	childViewConstructor: function()
											{
												return new DisplayLoyaltyPointsView({
													pdp: pdp,
													env_component: environment_component
												});
											}
										}
									}
								}
							);
						}
					}

					if(isPointsDisplayPDP){
						var plp = container.getComponent('PLP');
						if(plp)
						{
							plp.addChildViews(
								'Facets.Browse.View'
							,	{
									'StockDescription': {
										'Netscore.DisplayLoyaltyPoints.DisplayLoyaltyPoints.PLP.View':
										{
											childViewIndex: 5
										,	childViewConstructor: function()
											{
												return new DisplayLoyaltyPointsPLPView({
													plp: plp,
													env_component: environment_component
												});
											}
										}
									}
								}
							);
						}
					}

					if(isEmailShareEnabled || isFBShareEnabled){
						SocialSharing.mountToApp(container);
					}
				}
			}

		},
		getLoyaltyConfigValue: function getLoyaltyConfigValue(key){
			if(key)
			{
				var env_component = _container.getComponent("Environment");
				if (env_component) {
					var key_value = env_component.getConfig(key);
					return key_value;
				}
			}
			return '';
		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["Tvarana.UVU.UVU.View","Tvarana.UVU.UVU.Model","Tvarana.UVU.UVU.SS2Model","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.Model","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.SS2Model","NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.View","NetScore.NS_Loyalty_Rewards.SocialSharing","NetScore.NS_Loyalty_Rewards.SocialSharing.View","NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.Model","NetScore.NS_Loyalty_Rewards.SocialSharing.Model","NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.PLP.View","NetScore.NS_Loyalty_Rewards.LoyaltyInfoGet.Model"];
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
	SC.addExtensionModule('NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints');
}
catch(error)
{
	console.error(error);
}

