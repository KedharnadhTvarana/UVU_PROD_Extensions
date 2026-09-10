
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
