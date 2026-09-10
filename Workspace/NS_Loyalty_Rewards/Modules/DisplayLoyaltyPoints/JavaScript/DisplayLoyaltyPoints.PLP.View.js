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
