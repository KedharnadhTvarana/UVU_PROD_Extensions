// NetScore.NS_Loyalty_Rewards.EarnedHistory.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('NetScore.NS_Loyalty_Rewards.EarnedHistory'
,	[
		'NetScore.NS_Loyalty_Rewards.EarnedHistory.ServiceController',
		'NetScore.NS_Loyalty_Rewards.DisplayLoyaltyPoints.ServiceController',
		'NetScore.NS_Loyalty_Rewards.GenerateGiftCertificate.ServiceController',
		'NetScore.NS_Loyalty_Rewards.LoyaltyInfo.ServiceController',
		'NetScore.NS_Loyalty_Rewards.PointsRedeemCheckout.ServiceController',
		'NetScore.NS_Loyalty_Rewards.RedeemHistory.ServiceController',
		'NetScore.NS_Loyalty_Rewards.ReferalCodeShare.ServiceController',
		'NetScore.NS_Loyalty_Rewards.SocialSharing.ServiceController',
		'NetScore.NS_Loyalty_Rewards.TiersInfo.ServiceController'
	]
,	function (
		EarnedHistoryServiceController,
		DisplayLoyaltyPointsServiceController,
		GenerateGCServiceController,
		LoyaltyInfoServiceController,
		PointsRedeemCheckoutServiceController,
		RedeemHistoryServiceController,
		ReferalCodeShareServiceController,
		SocialSharingServiceController,
		TiersInfoServiceController
	)
{
	'use strict';
});
