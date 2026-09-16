
define(
	'Tvarana.Punchout2Go_Overrides.Main'
	, [
		'Punchout2Go.TransferCart.Button.View'
	]
	, function (
		Punchout2GoTransferCartButtonView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				_.extend(Punchout2GoTransferCartButtonView.prototype, {
					transferCart: function transferCart() {
						var model = this.punchout2GoTransferCartModel;
						var currencies = this.options.environment.getSiteSetting('currencies');
						var currency = _(currencies).findWhere({ isdefault: 'T' }) || { code: 'USD' };
						var defaultItemClassification = this.options.environment.getConfig('punchout2go.defaultItemClassification') || null;
						var itemClassificationFieldId = this.options.environment.getConfig('punchout2go.itemClassificationFieldId');
						var classification = defaultItemClassification;
						this.getCartData().then(function afterGetCartData(lines, summary, profile) {
							var transferCartData = {
								total: summary.subtotal,
								currency: currency.code,
								items: _(lines).map(function mapLineToCartDataItem(line) {
									var matrixOptions = _(line.options).where({ isMatrixDimension: true });
									var itemOptions = _(line.options).where({ isMatrixDimension: false });
									var cartDataItem;
									var simpleMatrixOptions;
									if (itemClassificationFieldId) {
										// line.item is for native fields
										// line.item.extras is for custom item fields
										classification = line.item[itemClassificationFieldId] || line.item.extras[itemClassificationFieldId];
									}
									cartDataItem = {
										supplierid: line.item.itemid,
										supplierauxid: line.item.internalid + '/' + profile.internalid,
										description: line.item.displayname,
										classification: classification,
										uom: line.item.extras.saleunit || 'EA',
										unitprice: line.rate,
										currency: currency.code,
										quantity: line.quantity,
										commoditycode: "X720092",
										data: _(itemOptions).reduce(function reduceOptionsToSimpleOption(simpleOption, option) {
											simpleOption[option.cartOptionId] = option.value.internalid;
											return simpleOption;
										}, {})
									};
									simpleMatrixOptions = _(matrixOptions).reduce(function reduceMAtrixOptionsToSimpleMatrixOption(simpleOption, option) {
										simpleOption[option.label.toLowerCase()] = option.value.label;
										return simpleOption;
									}, {});
									return _(cartDataItem).extend(simpleMatrixOptions);
								})
							};
							model.set(transferCartData);
							model.save().then(function afterTransferCart(response) {
								if (response && response.url) {
									window.location.href = response.url;
								}
							});
						});
					}
				})

			}
		};
	});
