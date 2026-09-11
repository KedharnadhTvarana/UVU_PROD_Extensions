<style>
	.facets-item-cell-grid:focus-within .facets-item-cell-grid-quick-view-wrapper {
		display: block;
	}
</style>
{{!-- Edited for Threads Theme --}}

<div class="facets-item-cell-grid" data-type="item" data-item-id="{{itemId}}" itemprop="itemListElement"
	data-track-productlist-list="{{track_productlist_list}}"
	data-track-productlist-category="{{track_productlist_category}}"
	data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<a class="facets-item-cell-grid-link itemquickview-{{itemId}}" href="{{url}}">
		<div class="facets-item-cell-grid-image-wrapper">
			<img class="facets-item-cell-grid-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt=""
				itemprop="image" />
		</div>

		<div class="facets-item-cell-grid-details">
			<span class="facets-item-cell-grid-title" itemprop="name">{{name}}</span>
			<div class="facets-item-cell-grid-price" data-view="ItemViews.Price"></div>
			<div data-view="Cart.QuickAddToCart"></div>

			{{#if showRating}}
			<div class="facets-item-cell-grid-rating" data-view="GlobalViews.StarRating"></div>
			{{/if}}

			<div data-view="ItemDetails.Options"></div>
			<div class="facets-item-cell-grid-stock">
				<div data-view="ItemViews.Stock" class="facets-item-cell-grid-stock-message"></div>
			</div>
			<div data-view="StockDescription"></div>
		</div>
	</a>

	{{#if isEnvironmentBrowser}}
	<div class="facets-item-cell-grid-quick-view-wrapper">
		<a href="{{url}}?quicview=true" class="facets-item-cell-grid-quick-view-link" data-toggle="show-in-modal"
			role="button" aria-haspopup="dialog">
			<i class="facets-item-cell-grid-quick-view-icon"></i>
			{{translate 'Quick View'}}
		</a>
	</div>
	{{/if}}
</div>



<script>
	$(document).ready(function () {
		// Function to handle click event on Quick View link
		$('.facets-item-cell-grid-quick-view-link').on('click', function (event) {
			// Prevent the default action of the link
			event.preventDefault();

			// Get the Item ID from the data attribute
			var itemId = $(this).closest('.facets-item-cell-grid').data('item-id');

			// Store the Item ID in local storage
			localStorage.setItem('lastClickedItemId', itemId);
		});

	});
</script>



<script>
	$(document).ready(function () {
		// Check if the script has already been executed
		if (!window.buttonScriptExecuted) {
			// Set flag variable to indicate that the script has been executed
			window.buttonScriptExecuted = true;

			// Attach event listener to all elements with the specified class
			$(document).on('keydown', '.facets-item-cell-grid-quick-view-link', function (e) {
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