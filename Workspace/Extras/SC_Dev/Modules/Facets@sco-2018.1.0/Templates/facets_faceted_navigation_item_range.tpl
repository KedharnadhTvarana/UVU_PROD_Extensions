<style>
	.facets-faceted-navigation-item-range-slider-bar-right::-webkit-slider-runnable-track {
		background: #fff;
	}

	.facets-faceted-navigation-item-range-slider-bar-left::-webkit-slider-runnable-track {
		background: #fff;
	}

	.facets-faceted-navigation-item-range-slider-bar-right::-webkit-slider-thumb {
		-webkit-appearance: none !important;
		appearance: none !important;
	}

	.facets-faceted-navigation-item-range-slider-bar-left::-webkit-slider-thumb {
		-webkit-appearance: none !important;
		appearance: none !important;
	}


	/********** Range Input Styles **********/
	/*Range Reset*/
	input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		width: 15rem;
	}
</style>
{{#if showFacet}}
<div class="facets-faceted-navigation-item-range-facet-group" id="{{htmlId}}" data-type="rendered-facet"
	data-facet-id="{{facetId}}">
	{{#if showHeading}}
	{{#if isUncollapsible}}
	<div class="facets-faceted-navigation-item-range-facet-group-expander">
		<h4 class="facets-faceted-navigation-item-range-facet-group-title">
			{{facetDisplayName}}
			{{#if showRemoveLink}}
			<a class="facets-faceted-navigation-item-range-filter-delete" href="{{removeLink}}">
				<i class="facets-faceted-navigation-item-range-filter-delete-icon"></i>
			</a>
			{{/if}}
		</h4>
	</div>
	{{else}}
	<a href="#" class="facets-faceted-navigation-item-range-facet-group-expander collapsed" data-toggle="collapse"
		data-target="#{{htmlId}}-category-wrapper" data-type="collapse" title="{{facetDisplayName}}">
		<i class="facets-faceted-navigation-item-range-facet-group-expander-icon"></i>
		<h4 class="facets-faceted-navigation-item-range-facet-group-title">{{facetDisplayName}}</h4>
		{{#if showRemoveLink}}
		<a class="facets-faceted-navigation-item-range-filter-delete" href="{{removeLink}}">
			<i class="facets-faceted-navigation-item-range-filter-delete-icon"></i>
		</a>
		{{/if}}
	</a>
	{{/if}}
	{{/if}}

	{{#if isUncollapsible}}
	<div class="facets-faceted-navigation-item-range-facet-group-wrapper">
		{{else}}
		<div class="facets-faceted-navigation-item-range-facet-group-wrapper {{#if isCollapsed}} collapse in {{else}} collapse{{/if}}"
			id="{{htmlId}}-category-wrapper">
			{{/if}}
			<span class="facets-faceted-navigation-item-range-end" data-range-indicator="end">{{rangeToLabel}}</span>
			<span class="facets-faceted-navigation-item-range-start"
				data-range-indicator="start">{{rangeFromLabel}}</span>
			{{!-- <div class="facets-faceted-navigation-item-range-slider" data-toggle="slider"
				data-facet-id="{{facetId}}" data-min="{{rangeMin}}" data-max="{{rangeMax}}" data-low="{{rangeFrom}}"
				data-high="{{rangeTo}}">
				<div class="facets-faceted-navigation-item-range-slider-bar" data-control="bar"
					style="left: 0%; width: 100%;"></div>
				<button class="facets-faceted-navigation-item-range-slider-bar-right" data-control="low"
					style="left: 0%;"></button>
				<button class="facets-faceted-navigation-item-range-slider-bar-left" data-control="high"
					style="left: 100%;"></button> --}}
				<div class="facets-faceted-navigation-item-range-slider" data-toggle="slider"
					data-facet-id="{{facetId}}" data-min="{{rangeMin}}" data-max="{{rangeMax}}" data-low="{{rangeFrom}}"
					data-high="{{rangeTo}}">
					<input type="range" class="facets-faceted-navigation-item-range-slider-bar-right" data-control="low"
						style="left: 0%;width:18%;z-index:1;" value="{{rangeFrom}}" aria-label="Range from">
					<div class="facets-faceted-navigation-item-range-slider-bar" data-control="bar"
						style="left: 0%; width: 100%;"></div>
					<input type="range" class="facets-faceted-navigation-item-range-slider-bar-left" data-control="high"
						style="left: 100%;width:15%;" value="{{rangeTo}}" aria-label="Range to">
				</div>
			</div>
		</div>
		{{/if}}
	</div>


	<script>
		$(document).ready(function () {
			// Attach keydown event only once
			$('.facets-faceted-navigation-item-range-slider-bar-left').on('keydown', function (e) {
				if ($(window).width() < 955) {

					if (e.key === 'Tab' && !e.shiftKey) { // Check if the Tab key is pressed (no Shift key)
						e.preventDefault(); // Prevent default tab behavior
						e.stopPropagation(); // Stop propagation to prevent multiple executions
						$('.sc-pusher-header-back').focus(); // Move focus to the desired anchor element
					}
				}

			});

			$(document).on('focus', '.facets-facet-browse-facets .sc-pusher-header .sc-pusher-header-back', function () {
				$(this).on('keydown', function (e) {
					if (e.key === "Tab" && e.shiftKey) {
						e.preventDefault()
						e.stopPropagation()
						$('.facets-faceted-navigation-item-range-slider-bar-left').focus();

					}
				});
			})
		});



	</script>
	{{!----
	Use the following context variables when customizing this template:

	htmlId (String)
	facetId (String)
	showFacet (Boolean)
	showHeading (Boolean)
	isUncollapsible (Boolean)
	isCollapsed (Boolean)
	isMultiSelect (Boolean)
	showRemoveLink (Boolean)
	removeLink (String)
	facetDisplayName (String)
	values (Array)
	extraValues (Array)
	showExtraValues (Boolean)
	isRange (Boolean)
	rangeValues (Array)
	rangeMin (Number)
	rangeMax (Number)
	rangeFrom (Number)
	rangeFromLabel (String)
	rangeTo (Number)
	rangeToLabel (String)

	----}}