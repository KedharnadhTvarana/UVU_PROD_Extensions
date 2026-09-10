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

extensions['NSeComm.CustomLogin.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/NSeComm/CustomLogin/1.0.0/' + asset;
}

define('CustomLogin.View', [
    'customlogin.tpl',
    'SCView'
], function CustomLoginViewModule(
    customloginTpl,
    SCViewComponent
) {
    'use strict';
 
    var SCView = SCViewComponent.SCView;
 
    function CustomLoginView(options) {
        SCView.call(this);
        this.options = options || {};
        this.container = options.container;
        this.template = customloginTpl;
    }
 
    CustomLoginView.prototype = Object.create(SCView.prototype);
 
    // Restore the constuctor.
    CustomLoginView.prototype.constructor = CustomLoginView;
 
    CustomLoginView.prototype.getContext = function getContext() {
        var env = this.container.getComponent('Environment');
        var ssoURL = env.getConfig('extensions.sso.url');
        var isSSOEnabled = env.getConfig('extensions.sso.enabled');
        var loginTitle = env.getConfig('extensions.sso.logintitle');
        var loginMessage = env.getConfig('extensions.sso.loginmessage');
        var loginButtonLabel = env.getConfig('extensions.sso.loginbuttonlabel');

        return {
            isSSOEnabled: isSSOEnabled,
            ssoURL: ssoURL,
            loginTitle: loginTitle,
            loginMessage: loginMessage,
            loginButtonLabel: loginButtonLabel
        };
    };
 
    return CustomLoginView;
});


define('NSeComm.CustomLogin.Main', [
    'CustomLogin.View'
], function NSeCommCustomLoginMain(
    CustomLoginView
) {
    'use strict';
 
    return {
        mountToApp: function mountToApp(container) {
            var layout = container.getComponent('Layout');
            if (layout) {
                layout.addChildViews(
                    'LoginRegister.View',
                    {
                        'Login': {
                            'CustomLoginView': {
                                childViewIndex: 1,
                                childViewConstructor: function () {
                                    return new CustomLoginView({ container: container });
                                }
                            }
                        }
                    }
                );
            }
        }
    };
});


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

// @module NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout
define('NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View'
,	[
		'Wizard.Module'
	,	'netscore_ns_loyalty_rewards_pointsredeemcheckout.tpl'
	,	'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.Model'
	,	'Backbone'
	,	'Utils'
	,	'jQuery'
	,	'underscore'
	,	'Profile.Model'
	,	'LiveOrder.Model'
	,	'SC.Configuration'
    ]
, function (
		WizardModule
	,	netscore_ns_loyalty_rewards_pointsredeemcheckout_tpl
	,	PointsRedeemCheckoutModel
	,	Backbone
	,	Utils
	,	jQuery
	,	_
	,	ProfileModel
	,	LiveOrderModel
	,	Configuration
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View @extends Backbone.View
	var temp_apply_amount=0, temp_remaining_amount=0, temp_applied_points=0;
	return WizardModule.extend({

		template: netscore_ns_loyalty_rewards_pointsredeemcheckout_tpl

	,	initialize: function (options) {

			WizardModule.prototype.initialize.apply(this, arguments);
			
			var self=this;
			this.model1=new PointsRedeemCheckoutModel();
			this.model1.fetch({
			}).done(function(){
				self.render();
			});
			this.model.on('change', this.render, this);
			this.model.set({apply_amount:''});
			this.model.set({remaining_amount:''});
		}

	,	events: {
			'click #apply-points': 'applyPoints',
			'click #remove-points': 'removePoints',
			'click #use-all-points': 'useAllPoints'
		}

	,	bindings: {
		}

	, 	childViews: {

		}
	,	applyPoints: function()
		{
			if($('.order-wizard-cart-summary-total .loyaltyamount').length > 0){
				$('.order-wizard-cart-summary-total .loyaltyamount').html('');
				$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+order_total);
			}
			var currency_symbol=SC.SESSION.currency.symbol;
			var redeem_ratio=this.model1.get('redeem_ratio');
			var redeemratio_limit=this.model1.get('redeem_ratio_limit');
			//var redeem_ratio=Configuration.get('loyaltyapp.pointsredeemedratio');
			//var redeemratio_limit=Configuration.get('loyaltyapp.redeemtionratiolimit');			
			var current_points;
			var customFields=ProfileModel.getInstance().get('customfields');
			_.each(customFields, function(field){
				//alert(field.name);
				if(field.name == 'custentity_currentpoints')
					current_points = Math.floor(field.value);
			});
			$("#error-msg").hide();
			
			var redeem_limit_points=(current_points)*Number((redeemratio_limit)*(0.01));
			//console.log('redeem_limit_points',redeem_limit_points);
			redeem_limit_points=Number(redeem_limit_points);
			var apply_points = $('#enter-points').val();
			var order_sub_total=this.model.get('summary').discountedsubtotal;
			var order_total=this.model.get('summary').total;
			var gc_total=this.model.get('summary').giftcertapplied;
			order_sub_total= order_sub_total-gc_total;
			
			if((apply_points != '') && !Number.isNaN(apply_points)){
				$("#remove-points").show();
				var apply_amount =  parseFloat(apply_points*redeem_ratio).toFixed(2);
				var remaining_amount=parseFloat(order_total-apply_amount).toFixed(2);
				var remaining_amount_foramtted=new Intl.NumberFormat().format(remaining_amount);
				if(Number(apply_points)<=current_points){
					if(apply_amount <= order_sub_total){
						$("#spend-points").html(apply_points);
						$("#spend-amount").html(apply_amount);
						$("#spend-points-show").show();
						this.model.get('options').custbody_apply_loyalty_points=apply_amount;
						$('.order-wizard-cart-summary-total').prepend('<div class="loyaltyamount">Loyalty- Discount <span class="refer_amt">'+currency_symbol+apply_amount+'</span></div>');
						$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+remaining_amount);
   					//this.model.set({apply_amount:apply_amount});
   					//this.model.set({remaining_amount:remaining_amount});
   					temp_apply_amount=apply_amount;

   					temp_remaining_amount=remaining_amount;
   					temp_applied_points=apply_points;
   				}
   				else
   				{
   					$("#error-msg").html('Order Amount is less than Points Value');
   					$("#error-msg").show();
   					$("#remove-points").hide();
   					$('#enter-points').val('');
   					$("#spend-points-show").hide();
   					document.getElementById('use-all-points').checked=false;
   					this.model.get('options').custbody_apply_loyalty_points='';
   					if($('.order-wizard-cart-summary-total .loyaltyamount').length > 0){
   						$('.order-wizard-cart-summary-total .loyaltyamount').html('');
   						$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+order_total);
   					}
   					temp_apply_amount=0;
   					temp_remaining_amount=0;
   					temp_applied_points=0;
   				}
   			}
   			else
   			{
   				$("#error-msg").html("You don't have that much points to enter");
   				$("#error-msg").show();
   				$("#remove-points").hide();
   				$('#enter-points').val('');
   				$("#spend-points-show").hide();
   				document.getElementById('use-all-points').checked=false;
   				this.model.get('options').custbody_apply_loyalty_points='';
   				if($('.order-wizard-cart-summary-total .loyaltyamount').length > 0){
   					$('.order-wizard-cart-summary-total .loyaltyamount').html('');
   					$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+order_total);
   				}
   				temp_apply_amount=0;
   				temp_remaining_amount=0;
   				temp_applied_points=0;
   			}
   		}
   		else
   		{
   			$("#error-msg").html('Please Enter Points To Redeem');
   			$("#error-msg").show();
   			$("#spend-points-show").hide();
   			this.model.get('options').custbody_apply_loyalty_points='';
   		}

   	}

   	,	removePoints: function()
   	{
   		var currency_symbol=SC.SESSION.currency.symbol;
   		$("#error-msg").hide();
   		$("#remove-points").hide();
   		$("#spend-points-show").hide();
   		var order_total=this.model.get('summary').total;
			//alert('remove points');
			$('#enter-points').val('');
			$('.loyaltyamount').remove();
			document.getElementById('use-all-points').checked=false;
			this.model.get('options').custbody_apply_loyalty_points='';
			if($('.order-wizard-cart-summary-total .loyaltyamount').length > 0){
				$('.order-wizard-cart-summary-total .loyaltyamount').html('');
				$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+parseFloat(order_total).toFixed(2));
			}
			temp_apply_amount=0;
			temp_remaining_amount=0;
			temp_applied_points=0;
		}

		,	useAllPoints: function(e)
		{
			var current_points;
			var customFields=ProfileModel.getInstance().get('customfields');
			_.each(customFields, function(field){
				//alert(field.name);
				if(field.name == 'custentity_currentpoints')
					current_points = Math.floor(field.value);
			});
			//var redeemratio_limit=Configuration.get('loyaltyapp.redeemtionratiolimit');
			var redeemratio_limit=this.model1.get('redeem_ratio_limit');
			var redeem_limit_points=(current_points)*Number((redeemratio_limit)*(0.01));
			redeem_limit_points=Number(redeem_limit_points.toFixed(2));
			if(redeem_limit_points>0)
			{
				var id=e.currentTarget.id;
				if(document.getElementById(id).checked)
				{
					$('#enter-points').val(redeem_limit_points);
				}
				else{
					$('#enter-points').val('');
				}
			}
			else{
				if(redeem_limit_points==0 ||redeem_limit_points=='' || redeem_limit_points==undefined)
				{
					var id=e.currentTarget.id;
					if(document.getElementById(id).checked)
					{
						$('#enter-points').val(current_points);
					}
					else{
						$('#enter-points').val('');
					}	
				}
			}
		}

		//@method getContext @return NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View.Context
	,	getContext: function getContext()
		{
			var redeem_ratio=this.model1.get('redeem_ratio');
			var currency_symbol=SC.SESSION.currency.symbol;
			var customFields=ProfileModel.getInstance().get('customfields');
			//console.log(customFields);
			var current_points, isEligibleforLoyalty;
			_.each(customFields, function(field){
				//alert(field.name);
				if(field.name == 'custentity_currentpoints')
					current_points = field.value;
				if(field.name == 'custentity_loyalty_program')
					isEligibleforLoyalty = field.value;
			});
			var self=this;
 			var applied_amount=temp_apply_amount; 
			var isloggedin=ProfileModel.getInstance().get('isLoggedIn');
			var temp_sub_total=0;

			if(isloggedin == 'T'){

				//alert('applied_amount  '+applied_amount);
				var avail_amount=parseFloat(current_points*redeem_ratio).toFixed(2);
				var isguest=ProfileModel.getInstance().get('isGuest');
				var temp_sub_total=this.model.get('summary').discountedsubtotal;
				var temp_total=this.model.get('summary').total;
				var gc_total=this.model.get('summary').giftcertapplied;
				temp_sub_total= temp_sub_total-gc_total;
			    //var isEligibleforLoyalty=ProfileModel.getInstance().get('isEligibleForLoyalty');

			    if(applied_amount > 0 && isEligibleforLoyalty == 'T'){

			    	setTimeout(function(){
			    		
			    		if(temp_sub_total > 0 && applied_amount > 0 && applied_amount <= temp_sub_total){
			    			var remainingTotaltobepaid=parseFloat(temp_total-applied_amount).toFixed(2);
		                	//alert(remainingTotaltobepaid);
		                	//console.log($('.order-wizard-cart-summary-total .referralAmount').length > 0);
		                	if(!$('.order-wizard-cart-summary-total .loyaltyamount').length > 0){
		                		$('.order-wizard-cart-summary-total').prepend('<div class="loyaltyamount"> Loyalty Discount <span class="refer_amt">  '+currency_symbol+temp_apply_amount+'</span></div>');
		                		$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+remainingTotaltobepaid);
		                	}
		                }
		                else if(temp_total > 0 && applied_amount > 0 && applied_amount >= temp_total){
		                	var order_total=self.model.get('summary').total;
		              		//var remainingTotaltobepaid=parseFloat(order_total-temp_total).toFixed(2);
		                 	//alert(remainingTotaltobepaid);
		              	//console.log($('.order-wizard-cart-summary-total .referralAmount').length > 0);
		                //   	if(!$('.order-wizard-cart-summary-total .referralAmount').length > 0){
	            			// 	$('.order-wizard-cart-summary-total').prepend('<div class="referralAmount"> Loyalty Discount <span class="refer_amt">  '+currency_symbol+temp_apply_amount+'</span></div>');
	            			// 	$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+temp_remaining_amount);
	            			// }
	            			$("#error-msg").html('Order Amount is less than Points Value');
	            			$("#error-msg").show();
	            			self.model.get('options').custbody_apply_loyalty_points='';
	            			if($('.order-wizard-cart-summary-total .loyaltyamount').length > 0){
	            				$('.order-wizard-cart-summary-total .loyaltyamount').html('');
	            				$('.order-wizard-cart-summary-total .order-wizard-cart-summary-grid-right').html(currency_symbol+order_total);
	            			}
	            			temp_apply_amount=0;
	            			temp_remaining_amount=0;
	            		}

	            	}, 1000);
			    }
			}
			//console.log('temp_apply_amount  '+temp_apply_amount+'temp_applied_points  '+temp_applied_points)
			return {
				is_temp_apply_amount: temp_apply_amount > 0 || false,
				temp_apply_amount: temp_apply_amount,
				temp_applied_points: temp_applied_points,
				currency_symbol: currency_symbol,
				points:	Math.floor(current_points),
				available_amount: parseFloat(Math.floor(avail_amount)).toFixed(2),
				isHavingPoints: current_points > 0,
				isguest: isguest == 'F',
				isEligibleforLoyalty: isEligibleforLoyalty == 'T',
				temp_sub_total: parseFloat(temp_sub_total).toFixed(2),
				title:this.options.title || _('Spend Your Loyalty Rewards Points').translate()
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/PointsRedeemCheckout.Service.ss"
            )
        )
        
});
});



define(
	'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup'
,   [
		'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View'
	]
,   function (
		ReferCodeAtSignupView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{		
	      	var LoginRegisterPage = container.getComponent('LoginRegisterPage');

		  	if (LoginRegisterPage){
			  	LoginRegisterPage.addChildView('Register.CustomFields', function ()
				{
				  return new ReferCodeAtSignupView({LoginRegisterPage: LoginRegisterPage});	
				});
	   		}

		}
	};
});


// @module NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup
define('NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View'
,	[
	'netscore_ns_loyalty_rewards_refercodeatsignup.tpl'
	
	,	'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.Model'
	
	,	'Backbone'
    ]
, function (
	netscore_ns_loyalty_rewards_refercodeatsignup_tpl
	
	,	ReferCodeAtSignupModel
	
	,	Backbone
)
{
    'use strict';

	// @class NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View @extends Backbone.View
	return Backbone.View.extend({

		template: netscore_ns_loyalty_rewards_refercodeatsignup_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new ReferCodeAtSignupModel();
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

		//@method getContext @return NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View.Context
	,	getContext: function getContext()
		{
			//@class NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View.Context
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
define("NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
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
	'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout'
,   [
		'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View',
		'NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup'
	]
,   function (
		PointsRedeemCheckoutView,
		ReferCodeAtSignup
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
			var isenableLoyalty=environment_component.getConfig('loyaltyapp.enableloyaltyprogram');
			var isSignupenabled=environment_component.getConfig('loyaltyapp.enablereferralcodesignup');
			var isEnablePointsredeem=environment_component.getConfig('loyaltyapp.enableRedeemPointsCheckout');
			
			if(isenableLoyalty && isSignupenabled){
				ReferCodeAtSignup.mountToApp(container);
			}
			if(isEnablePointsredeem){
				var checkout = container.getComponent('Checkout');

			    checkout.addModuleToStep(
			    {
			        step_url: 'opc'
			      , module: {
			          id: 'PointsRedeemCheckoutView'
			        , index: 5
			        , classname: 'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View'
			        }
			    });

			    checkout.addModuleToStep(
			    {
			        step_url: 'billing'
			      , module: {
			          id: 'PointsRedeemCheckoutView'
			        , index: 3
			        , classname: 'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View'
			        }
			    });
			}
		}
	};
});


};

extensions['Tvarana.SetDefaultPaymentMethodCreditCard.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Tvarana/SetDefaultPaymentMethodCreditCard/1.0.0/' + asset;
}


define(
	'Tvarana.SetDefaultPaymentMethodCreditCard.Tvr'
	, [
		'OrderWizard.Module.PaymentMethod.Selector'
	],
	function (
		OrderWizardModulePaymentMethodSelector
	) {

		'use strict';

		return {

			mountToApp: function () {

				console.log('======credit card default======');

				OrderWizardModulePaymentMethodSelector.prototype.render =
					_.wrap(
						OrderWizardModulePaymentMethodSelector.prototype.render,
						function (fn) {

							if (this.wizard && !this.selectedModule) {

								var selected_payment = this.model
									.get('paymentmethods')
									.findWhere({ primary: true });

								var selected_type;

								if (selected_payment) {
									selected_type = selected_payment.get('type');
								}
								else {
									selected_type = 'creditcard';
								}

								this.setModuleByType(selected_type, true);
							}

							return fn.apply(this, _.toArray(arguments).slice(1));
						}
					);
			}
		};
	}
);


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["Tvarana.UVU.UVU.View","Tvarana.UVU.UVU.Model","Tvarana.UVU.UVU.SS2Model","CustomLogin.View","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.View","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.Model","Tvarana.HeaderMenuCustomisation.HeaderMenuCustomisation.SS2Model","NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.View","NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.Model","NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup","NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.View","NetScore.NS_Loyalty_Rewards.ReferCodeAtSignup.Model","NetScore.NS_Loyalty_Rewards.LoyaltyInfoGet.Model"];
try{
	extensions['Tvarana.applecare_addon.1.0.2']();
	SC.addExtensionModule('Tvarana.UVU.UVU');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['NSeComm.CustomLogin.1.0.0']();
	SC.addExtensionModule('NSeComm.CustomLogin.Main');
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
	SC.addExtensionModule('NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Tvarana.SetDefaultPaymentMethodCreditCard.1.0.0']();
	SC.addExtensionModule('Tvarana.SetDefaultPaymentMethodCreditCard.Tvr');
}
catch(error)
{
	console.error(error);
}

