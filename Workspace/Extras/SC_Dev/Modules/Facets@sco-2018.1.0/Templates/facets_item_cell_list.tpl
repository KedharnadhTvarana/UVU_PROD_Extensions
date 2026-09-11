{{!-- Edited for Threads Theme --}}

<style>
	.facets-item-cell-list:focus-within .facets-item-cell-list-quick-view-wrapper {
		display: block;
	}
</style>

<div class="facets-item-cell-list" data-track-productlist-list="{{track_productlist_list}}"
	data-track-productlist-category="{{track_productlist_category}}"
	data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}" itemprop="itemListElement"
	data-item-id="{{itemId}}">
	{{#if itemIsNavigable}}
	<a class="facets-item-cell-list-anchor itemquickview-{{itemId}}" href='{{url}}'>
		{{/if}}
		<div class="facets-item-cell-list-left">
			<div class="facets-item-cell-list-image-wrapper">
				<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt=""
					itemprop="image">
			</div>
		</div>
		<div class="facets-item-cell-list-right">

			<h2 class="facets-item-cell-list-title">
				<span itemprop="name">
					{{name}}
				</span>
			</h2>
			<div class="facets-item-cell-list-price">
				<div data-view="ItemViews.Price"></div>
			</div>

			<div data-view="Cart.QuickAddToCart"></div>

			{{#if showRating}}
			<div class="facets-item-cell-list-rating" itemprop="aggregateRating" data-view="GlobalViews.StarRating">
			</div>
			{{/if}}

			<div data-view="ItemDetails.Options"></div>

			<div class="facets-item-cell-list-stock">
				<div data-view="ItemViews.Stock" class="facets-item-cell-list-stock-message"></div>
			</div>

			<div data-view="StockDescription"></div>
		</div>
		{{#if itemIsNavigable}}
	</a>
	{{/if}}

	{{#if isEnvironmentBrowser}}
	<div class="facets-item-cell-list-quick-view-wrapper">
		<a href="{{url}}?quicview=true" class="facets-item-cell-list-quick-view-link" data-toggle="show-in-modal"
			role="button" aria-haspopup="dialog">
			<i class="facets-item-cell-list-quick-view-icon"></i>
			{{translate 'Quick View'}}
		</a>
	</div>
	{{/if}}
</div>


<script>
	$(document).ready(function () {
		$('.facets-item-cell-list-anchor').focus(function () {
			$(this).closest('.facets-items-collection-view-cell-span12').addClass('focused');
		});

		$('.facets-item-cell-list-anchor').blur(function () {
			$(this).closest('.facets-items-collection-view-cell-span12').removeClass('focused');
		});
	});

</script>


<script>
	$(document).ready(function () {
		// Function to handle click event on Quick View link
		$('.facets-item-cell-list-quick-view-link').on('click', function (event) {
			// Prevent the default action of the link
			event.preventDefault();

			// Get the Item ID from the data attribute
			var itemId = $(this).closest('.facets-item-cell-list').data('item-id');
			console.log("🚀 ~ itemId:", itemId);

			// Store the Item ID in local storage
			localStorage.setItem('lastClickedItemId', itemId);
		});

	});
</script>


<script>
	$(document).ready(function () {
		// Check if the script has already been executed
		if (!window.buttonScriptExecutedList) {
			// Set flag variable to indicate that the script has been executed
			window.buttonScriptExecutedList = true;

			// Attach event listener to all elements with the specified class
			$(document).on('keydown', '.facets-item-cell-list-quick-view-link', function (e) {
				const keyD = e.key !== undefined ? e.key : e.keyCode;

				// Check if the pressed key is 'Enter' or 'Space'
				if (keyD === 'Enter' || keyD === ' ' || keyD === 13 || keyD === 32) {
					// Prevent scrolling
					if (e.key === ' ' || e.key === 'PageDown' || e.key === 'PageUp') {
						e.preventDefault();
					}

					// Trigger a click event on the element
					$(this).click();
				}
			});
		}
	});
</script>

{{!----
Use the following context variables when customizing this template:

itemId (Number)
name (String)
url (String)
sku (String)
isEnvironmentBrowser (Boolean)
thumbnail (Object)
thumbnail.url (String)
thumbnail.altimagetext (String)
itemIsNavigable (Boolean)
showRating (Boolean)
rating (Number)

----}}