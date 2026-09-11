{{!-- Edited for Manor Theme --}}
<style>
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		color: #757575;

	}
</style>
<section class="login-register">

	<header class="login-register-header">
		{{#if showRegister}}
		<h2 class="login-register-title">{{translate 'Log in | Register'}}</h2>
		{{else}}
		<h2 class="login-register-title login-register-title-noregister">{{translate 'Log in'}}</h2>
		{{/if}}
	</header>

	<div data-view="Messages"></div>

	<div {{#if showRegister}} class="login-register-body" {{else}} class="login-register-body-colored" {{/if}}>

		{{#if showLogin}}
		<div class="login-register-wrapper-column-login">
			<div class="login-register-wrapper-login" data-view="Login"></div>
		</div>
		{{/if}}

		{{#if showRegisterOrGuest}}
		<div class="login-register-wrapper-column-register">
			<div class="login-register-wrapper-register">
				<h2 class="login-register-title-register">{{translate 'New customer'}}</h2>
				<h3 class="visually-hidden">THE OFFICIAL ONLINE STORE OF UTAH VALLEY UNIVERSITY</h3>


				{{#if showCheckoutAsGuest}}
				<div class="login-register-wrapper-guest" data-view="CheckoutAsGuest"></div>
				{{/if}}

				{{#if showRegister}}
				<div class="{{#if showCheckoutAsGuest}}collapse{{/if}} " data-view="Register" id="register-view"></div>
				{{/if}}
			</div>
		</div>
		{{/if}}

	</div>
</section>


<script>
	function updateAriaInvalid(inputs) {
		inputs.forEach(input => {
			const errorMsg = input.nextElementSibling && input.nextElementSibling.getAttribute('data-validation-error') === 'block';
			console.log("🚀 ~ updateAriaInvalid ~ errorMsg:", errorMsg);
			if (errorMsg) {
				input.setAttribute('aria-invalid', 'true');
			} else {
				// If no error message directly follows the input, check for error message after additional text
				const errorMsgAfterText = input.nextElementSibling && input.nextElementSibling.nextElementSibling && input.nextElementSibling.nextElementSibling.getAttribute('data-validation-error') === 'block';
				if (errorMsgAfterText) {
					input.setAttribute('aria-invalid', 'true');
				} else {
					input.setAttribute('aria-invalid', 'false');
				}
			}
		});
	}

	// Get all login and register input fields excluding type "hidden" and "checkbox"
	const loginInputs = document.querySelectorAll('.login-register-login-form-controls input:not([type="hidden"]):not([type="checkbox"])');
	const registerInputs = document.querySelectorAll('.login-register-register-form-controls input:not([type="hidden"]):not([type="checkbox"])');

	// Initial update of aria-invalid attributes
	updateAriaInvalid(loginInputs);
	updateAriaInvalid(registerInputs);

	// Function to add event listeners for focus, input, and blur events
	function addValidationEventListeners(inputs) {
		inputs.forEach(input => {
			input.addEventListener('focus', function () {
				updateAriaInvalid(loginInputs);
				updateAriaInvalid(registerInputs);
			});

			input.addEventListener('input', function () {
				updateAriaInvalid(loginInputs);
				updateAriaInvalid(registerInputs);
			});

			input.addEventListener('blur', function () {
				updateAriaInvalid(loginInputs);
				updateAriaInvalid(registerInputs);
			});
		});
	}

	// Add event listeners to detect changes in login and register input fields
	addValidationEventListeners(loginInputs);
	addValidationEventListeners(registerInputs);
</script>
{{!----
Use the following context variables when customizing this template:

showRegister (Boolean)
showCheckoutAsGuest (Boolean)
showLogin (Boolean)
showRegisterOrGuest (Boolean)

----}}