{{#each options}}
<a href="{{configOptionUrl}}"
	class="facets-item-list-display-selector {{#if isActive}} active {{/if}} {{#if isGrid}} facets-item-list-display-selector-grid {{/if}}"
	title="{{name}}" role="button">
	<i class="{{icon}}"></i>
</a>
{{/each}}

<script>
	$(document).ready(function () {
		// Check if the script has already been executed
		if (!window.buttonPLPViewChange) {
			// Set flag variable to indicate that the script has been executed
			window.buttonPLPViewChange = true;

			// Attach event listener to all elements with the specified class
			$(document).on('keydown', '.facets-item-list-display-selector', function (e) {
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

configClasses (String)
options (Array)

----}}