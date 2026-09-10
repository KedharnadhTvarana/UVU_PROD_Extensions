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
