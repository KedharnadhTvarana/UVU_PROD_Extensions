{{#if showCells}}
<aside class="recently-viewed-items">
	<h3>{{translate 'Recently viewed'}}</h3>
	<button class="item-relations-related-carousel-prev" id="recently-viewed-items-id-prev" aria-label="prev"
		style="background-color: #fff;"><i class="carousel-prev-arrow"></i><span
			class="control-text">prev</span></button>
	<button class="item-relations-related-carousel-next" id="recently-viewed-items-id-next" aria-label="next"
		style="background-color: #fff;"><span class="control-text">next</span><i
			class="carousel-next-arrow"></i></button>
	<div data-type="backbone.collection.view.rows"></div>
</aside>
{{/if}}


<script>

	$(document).ready(function () {
		var bxSliderDefaults = {
			minSlides: 2,
			slideWidth: 295,
			maxSlides: 4,
			forceStart: true,
			pager: false,
			touchEnabled: true,
			controls: true,
			preloadImages: 'all'
		};

		// Find the slider within the container
		var slider = $('[data-type="recentlyviewed-items"]').bxSlider(bxSliderDefaults);

		// Attach click event handlers only within the container
		$('.recently-viewed-items #recently-viewed-items-id-next').click(function () {
			// Move to the next slide
			slider.goToNextSlide();
			return false;
		});

		$('.recently-viewed-items #recently-viewed-items-id-prev').click(function () {
			// Move to the previous slide
			slider.goToPrevSlide();
			return false;
		});

		$('.recently-viewed-items .bx-controls-direction').remove();
	});


</script>

{{!----
Use the following context variables when customizing this template:

collection (Array)
showCells (Boolean)

----}}