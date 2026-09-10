<div itemprop="itemListElement" data-item-id="{{itemId}}" data-track-productlist-list="{{track_productlist_list}}"
	data-track-productlist-category="{{track_productlist_category}}"
	data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}" class="recent-item-div">
	<div data-view="ItemThumbnail"></div>
	<a {{{itemURL}}} class="item-relations-related-item">
		<div class="item-relations-related-item-thumbnail">
			<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="" />
		</div>
		<span class="item-relations-related-item-title" itemprop="name">{{itemName}}</span>
		<div class="item-relations-related-item-price" data-view="Item.Price"></div>

		{{#if showRating}}
		<div class="item-relations-related-item-rate" data-view="Global.StarRating">
		</div>
		{{/if}}
	</a>
</div>


<script>
	$(document).ready(function () {
		// Function to update tabindex
		function updateTabIndex() {
			$('li.recently-viewed-cell-item').each(function () {
				if ($(this).attr('aria-hidden') === 'true') {
					$(this).find('a').attr('tabindex', -1);
				} else {
					$(this).find('a').removeAttr('tabindex');
				}
			});
		}

		function updateIndex() {
			$('li.item-relations-cell').each(function () {
				if ($(this).attr('aria-hidden') === 'true') {
					$(this).find('a').attr('tabindex', -1);
				} else {
					$(this).find('a').removeAttr('tabindex');
				}
			});
		}

		// Initial update
		updateTabIndex();
		updateIndex();

		// Event delegation for slider control buttons
		$(document).on('click focus', '#relations-correlated-items-id-prev', function () {
			updateIndex();
		});

		$(document).on('click focus', '#relations-correlated-items-id-next', function () {
			updateIndex();
		});
		$(document).on('click focus', '#recently-viewed-items-id-prev', function () {
			updateTabIndex();
		});

		$(document).on('click focus', '#recently-viewed-items-id-next', function () {
			updateTabIndex();
		});
	});

</script>


<script>
	$(document).ready(function () {
		$('.item-relations-related-item').focus(function () {
			$(this).closest('.recent-item-div').addClass('focusedRecentItem');
		});

		$('.item-relations-related-item').blur(function () {
			$(this).closest('.recent-item-div').removeClass('focusedRecentItem');
		});
	});

</script>


{{!----
Use the following context variables when customizing this template:

itemURL (String)
thumbnail (Object)
thumbnail.url (String)
thumbnail.altimagetext (String)
sku (String)
model (Object)
model.itemsIds (Number)
model.options (Array)
model._matrixParent (Object)
model._matrixParent.options (Array)
model._url (String)
model._name (String)
model._thumbnail (Object)
model._thumbnail.url (String)
model._thumbnail.altimagetext (String)
model._sku (String)
model._rating (Number)
model._ratingsCount (Number)
model._matrixChilds (Array)
model._inStockMessage (String)
model._showInStockMessage (Boolean)
model._showStockDescription (Boolean)
model._stockDescriptionClass (String)
model._quantityavailableforstorepickup_detail (Array)
model._showQuantityAvailable (Boolean)
showRating (Boolean)
itemName (String)
itemId (Number)

----}}