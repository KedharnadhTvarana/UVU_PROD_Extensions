<div id="layout" class="shopping-layout">
	<header id="site-header" class="shopping-layout-header" data-view="Header"></header>
	<div id="main-container">
		<div class="shopping-layout-breadcrumb">
			<div data-view="Global.Breadcrumb" data-type="breadcrumb"></div>
		</div>
		<div class="shopping-layout-notifications">
			<div data-view="Notifications"></div>
		</div>
		<!-- Main Content Area -->
		<div id="content" role="main" class="shopping-layout-content"></div>
		<!-- / Main Content Area -->
	</div>
	<footer id="site-footer" class="shopping-layout-footer" data-view="Footer"></footer>
</div>

<script>
	$(document).ready(function () {
		$('noscript').remove();
	});
</script>
<script>
	$(document).ready(function () {
		console.log(SC);
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



{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context
variables in the Console of your browser's developer tools.

----}}