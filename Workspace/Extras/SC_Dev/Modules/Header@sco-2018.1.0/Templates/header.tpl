<!-- <head>
<meta name="google-site-verification" content="LMpN6TaGJe_30jJpv3eXJE_0wsJO0bZF-2VJk8IBGWA" />
</head> -->
<div class="header-message" data-view="Message.Placeholder"></div>

<div class="header-main-wrapper">
	<a href="" class="text-assistive display-at-top-on-focus">Skip to main content</a>

	{{#if extraHeaderView.bannertext}}
	<div class="header-menu-bannertext">
		<p>{{extraHeaderView.bannertext}}</p>
	</div>
	{{/if}}

	<div id="banner-header-top" class="content-banner banner-header-top header-banner-top"
		data-cms-area="header_banner_top" data-cms-area-filters="global"></div>

	<nav class="header-main-nav">

		<div class="header-content">
			<div class="header-logo-wrapper">
				<div data-view="Header.Logo"></div>
			</div>

			{{#if extraHeaderView.bannertext}}
			<div class="header-menu-bannertext-desktop">
				<p>{{extraHeaderView.bannertext}}</p>
			</div>
			{{/if}}

			<div class="header-right-menu">
				<div class="header-menu-profile" data-view="Header.Profile"></div>
				<div class="header-menu-locator" data-view="StoreLocatorHeaderLink"></div>
				<div class="header-menu-mobile-cart">
					<div class="header-menu-cart-dropdown">
						<div data-view="Header.MiniCart"></div>
					</div>
				</div>
				<div class="header-menu-quote" data-view="RequestQuoteWizardHeaderLink"></div>
				<div class="header-menu-quickorder" data-view="QuickOrderHeaderLink"></div>
				{{#if showLanguagesOrCurrencies}}
				<ul class="header-subheader-options">
					<li class="header-subheader-settings">
						<a href="#" class="header-subheader-settings-link" data-toggle="dropdown"
							title="{{translate 'Settings'}}">
							<i class="header-menu-settings-icon"></i>
							<i class="header-menu-settings-carret"></i>
						</a>
						<div class="header-menu-settings-dropdown">
							<h5 class="header-menu-settings-dropdown-title">{{translate 'Site Settings'}}</h5>
							{{#if showLanguages}}
							<div data-view="Global.HostSelector"></div>
							{{/if}}
							{{#if showCurrencies}}
							<div data-view="Global.CurrencySelector"></div>
							{{/if}}
						</div>
					</li>
				</ul>
				{{/if}}
			</div>

			<div class="header-sidebar-toggle-wrapper">
				<button class="header-sidebar-toggle" data-action="header-sidebar-show" aria-label="Sidebar">
					<span></span>
				</button>
			</div>

		</div>
	</nav>
</div>

<div class="header-sidebar-overlay" data-action="header-sidebar-hide"></div>

<div class="header-logo-nav-container">
	<div class="header-logo-nav-wrapper">
		<div class="header-logo-desktop-wrapper">
			<div data-view="Header.Logo"></div>
		</div>
		<div class="header-nav-desktop-wrapper">
			{{!-- Navigation --}}
			<div class="header-secondary-wrapper" data-view="Header.Menu" data-phone-template="header_sidebar"
				data-tablet-template="header_sidebar"></div>
		</div>
		<div class="header-right-menu-also">
			<div class="header-menu-cart">
				<div class="header-menu-cart-dropdown">
					<div data-view="Header.MiniCart"></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="banner-header-bottom" class="content-banner banner-header-bottom" data-cms-area="header_banner_bottom"
	data-cms-area-filters="global"></div>

{{!----

This block is duplicated; it needs to be here, and also in this way in order to meet some functional requirements.
If you understand how this works, and you have a better way to resolve the puzzle (without duplicate this search box),
we'll be glad to hear and apply the solution.

FYI: We're calling this same block (but with a different class name) in "header_menu" template

----}}
<div class="header-site-search search-mobile" data-view="SiteSearch" data-type="SiteSearch"></div>

<script>
	$(document).ready(function () {
		$(".text-assistive").click(function () {
			var $targetElement = $(".facets-facet-browse-results");
			var $targetElement2 = $(".facets-category-cell-thumbnail");
			if ($targetElement.length && !$targetElement2.length) {
				console.log('if');
				$('html, body').animate({
					scrollTop: $targetElement.offset().top
				}, 500, function () {
					var $focusableElements = $targetElement.find('a, button, input, select, textarea').filter(function () {
						return $(this).is(':visible') && $(this).css('visibility') !== 'hidden';
					}).not('header, header *');
					if ($focusableElements.length) {
						$focusableElements.first().focus();
					}
				});
			} else {
				console.log('else');
				$('html, body').animate({
					scrollTop: $("#main-container").offset().top
				}, 500, function () {
					var $focusableElements = $("#main-container").find('a, button, input, select, textarea').filter(function () {
						return $(this).is(':visible') && $(this).css('visibility') !== 'hidden';
					});
					if ($focusableElements.length) {
						$focusableElements.first().focus();
					}
				});
			}
		});
	});

</script>

<script>
	$(document).ready(function () {
		// Toggle click event on .header-sidebar-toggle button
		$(".header-sidebar-toggle").click(function () {
			$('#main').toggleClass("header-sidebar-opened");
			setTimeout(() => {
				if ($('#main').hasClass("header-sidebar-opened")) {
					$('.header-sidebar-wrapper').css('display', 'block');
				} else {
					$('.header-sidebar-wrapper').css('display', 'none');
				}
			})

		});

	});
	$(this).on('keydown', function (e) {
		if ($('#main').hasClass('header-sidebar-opened')) {
			if (e.key === "Escape") {
				$('#main').removeClass('header-sidebar-opened')
				$('.header-sidebar-toggle').focus()

				if ($(window).width() < 990) {
					$('.header-sidebar-wrapper').hide(); // Hide .header-secondary-wrapper if window width is less than 1000px
				}
			}
		}

	});

</script>

<script>
	$(document).ready(function () {
		const intervalLoadingIndicator = setInterval(() => {
			const loadingIndicator = $('.global-loading-indicator');
			if (loadingIndicator.attr('alt') !== 'Loading Icon') {
				loadingIndicator.attr('alt', 'Loading Icon');
			} else {
				clearInterval(intervalLoadingIndicator);
			}
		}, 10);
	});
</script>
<!------------------Tvarana-changes ------------------->

<style>
	#banner-header-top{
		margin: 0px;
	}
	.header-profile-welcome-link{
		color: white;
	}
	.header-logo-nav-container {
		background-color: #275D38 !important;
	}

	@media (min-width: 992px) {
		.header-logo-desktop-wrapper {
			align-self: auto !important;
		}
	}

	.header-sidebar-toggle span,
	.header-sidebar-toggle span:before,
	.header-sidebar-toggle span:after {
		background-color: white !important;
	}

	.header-sidebar-opened .header-sidebar-toggle {
		background: inherit !important;
	}

	.header-sidebar-opened .header-sidebar-toggle span {
		background-color: transparent !important;
	}

	.site-search-content {
		width: 100% !important;
	}

	@media (min-width: 992px) {
		#site-header .header-site-search.search-desktop {
			display: flex !important;
			justify-content: center;
			padding-left: 0px;
		}

		.header-site-search.search-desktop>div {
			width: 80%;
			padding-left: 3rem;
		}

		.header-right-menu {
			width: 18%;
		}
	}

	@media (max-width: 992px) {
		.header-content {
			background-color: #275D38 !important;
		}
	}

	@media (min-width:992px) and (max-width: 1141px) {

		.header-right-menu {
			width: 25% !important;
		}


	}

	@media (min-width:1440px) {
		.header-site-search.search-desktop>div {
			padding-left: 4.5rem;
		}
	}

	.header-menu-search-icon {
		display: none;
	}

	#site-header .header-menu-search {
		margin-top: 0px;
	}

	.header-site-search.search-desktop {
		width: 70%;
		padding-left: 50px;
		background: rgb(39, 93, 56);
		width: -webkit-fill-available;
	}

	.header-profile-menu-login,
	.header-profile-menu-login a {
		color: white !important;
	}

	.header-menu-bannertext-desktop {
		text-align: center;
		width: -webkit-fill-available;
	}

	.header-mini-cart-menu-cart-link,
	.header-logo-nav-wrapper,
	.header-secondary-wrapper,
	.header-mini-cart-menu-cart-link.header-mini-cart-menu-cart-link-enabled {
		background-color: #275D38 !important;
	}

	.svg-shopping-trolley {
		fill: white;
	}

	.header-mini-cart-menu-cart-legend {
		color: white;
	}

	.header-menu-level1 {
		padding: 5px 0px 10px 0px;
		background-color: white !important;

	}

	/* .home-slider-container {

		.home-gallery-prev-icon,
		.home-gallery-next-icon {
			display: none;
		}

		.bx-pager.bx-default-pager {
			display: none;
		}
	} */

	.header-menu-level1-anchor:focus-visible,
	.header-menu-level2-anchor:focus-visible,
	.header-menu-level3-anchor:focus-visible {
		outline: 2px solid black;
	}



	.header-menu-search {
		padding-left: 0px;

	}

	.header-menu-secondary-nav {
		margin-left: 0px;

	}
	@media (min-width: 992px) {
		.site-search-content {
			width: 450px !important;

		}
	}

	@media (min-width: 992px) {

		input.nav-search-input,
		input.itemssearcher-input {
			width: calc(100% - 40px);
		}
	}
</style>
<script>
	setInterval(function () {
		var $search = $(".header-menu-search");
		var $nav = $(".header-menu-secondary-nav");

		// Check if the first child of .header-menu-secondary-nav is .header-menu-search
		if ($nav.children().first().is($search) === false) {
			$nav.prepend($search);
		}
	}, 100); // Check every second


	jQuery(document).ready(function ($) {

		function adjustLayout() {
			$(".header-menu-search").append($(".header-right-menu")).css({ "display": "flex" });
			// $(".header-site-search.search-desktop").css({ "width": "87%", "padding-left": "50px" });

			$(".header-logo-nav-container").append($(".header-menu-level1").css({ "display": "flex", "justify-content": "center" }));
			$(".header-menu-level-container").css({ "width": "80%", "left": "10%" });

			$(".header-menu-level1 li").hover(
				function () {
					$(this).addClass("open");
				},
				function () {
					$(this).removeClass("open");
				}
			);

		}

		// Execute on page load
		adjustLayout();

		// Execute on screen resize
		$(window).resize(function () {
			adjustLayout();
		});
	});

	$(document).on('focus', '.header-menu-level1 li', function () {
		$(this).addClass("open");

	})
	$(document).on('blur', '.header-menu-level1 li', function () {
		$(this).removeClass("open");
	})

</script>
<!------------------Tvarana-changes ------------------->
{{!----
Use the following context variables when customizing this template:

profileModel (Object)
profileModel.addresses (Array)
profileModel.addresses.0 (Array)
profileModel.creditcards (Array)
profileModel.firstname (String)
profileModel.paymentterms (undefined)
profileModel.phoneinfo (undefined)
profileModel.middlename (String)
profileModel.vatregistration (undefined)
profileModel.creditholdoverride (undefined)
profileModel.lastname (String)
profileModel.internalid (String)
profileModel.addressbook (undefined)
profileModel.campaignsubscriptions (Array)
profileModel.isperson (undefined)
profileModel.balance (undefined)
profileModel.companyname (undefined)
profileModel.name (undefined)
profileModel.emailsubscribe (String)
profileModel.creditlimit (undefined)
profileModel.email (String)
profileModel.isLoggedIn (String)
profileModel.isRecognized (String)
profileModel.isGuest (String)
profileModel.priceLevel (String)
profileModel.subsidiary (String)
profileModel.language (String)
profileModel.currency (Object)
profileModel.currency.internalid (String)
profileModel.currency.symbol (String)
profileModel.currency.currencyname (String)
profileModel.currency.code (String)
profileModel.currency.precision (Number)
showLanguages (Boolean)
showCurrencies (Boolean)
showLanguagesOrCurrencies (Boolean)
showLanguagesAndCurrencies (Boolean)
isHomeTouchpoint (Boolean)
cartTouchPoint (String)

----}}