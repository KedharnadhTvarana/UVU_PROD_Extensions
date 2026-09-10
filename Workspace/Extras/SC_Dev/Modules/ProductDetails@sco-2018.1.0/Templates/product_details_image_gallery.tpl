<div class="product-details-image-gallery">
	{{#if showImages}}
	{{#if showImageSlider}}
	<ul class="bxslider" data-slider>
		{{#each images}}
		<li data-zoom class="product-details-image-gallery-container">
			<img src="{{resizeImage url ../imageResizeId}}" alt="{{altimagetext}}" itemprop="image" data-loader="false">
		</li>
		{{/each}}
	</ul>
	{{else}}
	{{#with firstImage}}
	<div class="product-details-image-gallery-detailed-image" data-zoom>
		<img class="center-block" src="{{resizeImage url ../imageResizeId}}" alt="{{altimagetext}}" itemprop="image"
			data-loader="false">
	</div>
	{{/with}}

	{{/if}}
	{{/if}}
	<div data-view="SocialSharing.Flyout.Hover"></div>
</div>


<script>
	$(document).ready(function () {
		const intervalBxPagerLink = setInterval(function () {
			let allImagesUpdated = true;

			$('.bx-pager-link img').each(function () {
				// Check if the alt attribute is already set
				if (!$(this).attr('alt')) {
					// Generate and set the alt text
					const slideIndex = $(this).parent().data('slide-index');
					const altText = `Image for slide ${slideIndex}`;
					$(this).attr('alt', altText);

					// Mark as not fully updated
					allImagesUpdated = false;
				}
			});

			// Clear interval if all images have been updated
			if (allImagesUpdated) {
				clearInterval(intervalBxPagerLink);
			}
		}, 100); // Check every 100ms
	});


</script>

{{!----
Use the following context variables when customizing this template:

imageResizeId (String)
images (Array)
firstImage (Object)
firstImage.altimagetext (String)
firstImage.url (String)
showImages (Boolean)
showImageSlider (Boolean)

----}}