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
