{{!-- Edited for Threads Theme --}}

<style>
	.facets-item-cell-table:focus-within .facets-item-cell-table-quick-view-wrapper {
		display: block;
	}
</style>

<div class="facets-item-cell-table" data-track-productlist-list="{{track_productlist_list}}" data-item-id="{{itemId}}"
	data-track-productlist-category="{{track_productlist_category}}"
	data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}" itemprop="itemListElement">
	<a href="{{url}}" class="facets-item-cell-table-link itemquickview-{{itemId}}">
		<div class="facets-item-cell-table-image-wrapper">
			<img class="facets-item-cell-table-image" src="{{resizeImage thumbnail.url 'main'}}" alt=""
				itemprop="image">
		</div>
		<div class="facets-item-cell-table-content-wrapper">
			<h2 class="facets-item-cell-table-title" itemprop="name">{{name}}</h2>
			<div class="facets-item-cell-table-price">
				<div data-view="ItemViews.Price"></div>
			</div>
			<div data-view="Cart.QuickAddToCart"></div>

			{{#if showRating}}
			<div class="facets-item-cell-table-rating" data-view="GlobalViews.StarRating">
			</div>
			{{/if}}
			<div data-view="ItemDetails.Options"></div>
			<div class="facets-item-cell-table-stock">
				<div data-view="ItemViews.Stock" class="facets-item-cell-table-stock-message"></div>
			</div>
			<div data-view="StockDescription"></div>
		</div>
	</a>


	{{#if isEnvironmentBrowser}}
	<div class="facets-item-cell-table-quick-view-wrapper" style="margin-top: 97px;">
		<a href="{{url}}?quicview=true" class="facets-item-cell-table-quick-view-link" data-toggle="show-in-modal"
			role="button" aria-haspopup="dialog">
			<i class="facets-item-cell-table-quick-view-icon"></i>
			{{translate 'Quick View'}}
		</a>
	</div>
	{{/if}}
</div>


<script>
	$(document).ready(function () {
		// Function to handle click event on Quick View link
		$('.facets-item-cell-table-quick-view-link').on('click', function (event) {
			// Prevent the default action of the link
			event.preventDefault();

			// Get the Item ID from the data attribute
			var itemId = $(this).closest('.facets-item-cell-table').data('item-id');

			// Store the Item ID in local storage
			localStorage.setItem('lastClickedItemId', itemId);
		});

	});
</script>


<script>
	$(document).ready(function () {
		$('.facets-item-cell-table-link').focus(function () {
			$(this).closest('.facets-items-collection-view-cell-span6').addClass('focused');
		});

		$('.facets-item-cell-table-link').blur(function () {
			$(this).closest('.facets-items-collection-view-cell-span6').removeClass('focused');
		});
	});

</script>


<script>
	$(document).ready(function () {
		// Check if the script has already been executed
		if (!window.buttonScriptExecutedTable) {
			// Set flag variable to indicate that the script has been executed
			window.buttonScriptExecutedTable = true;

			// Attach event listener to all elements with the specified class
			$(document).on('keydown', '.facets-item-cell-table-quick-view-link', function (e) {
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