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
