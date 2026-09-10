<div class="modal-dialog global-views-modal {{modalDialogClass}}">
	<div class="global-views-modal-content">
		<!--Modal-Header -->
		<div id="modal-header" class="global-views-modal-content-header">
			<button type="button" class="global-views-modal-content-header-close" data-dismiss="modal" role="region"
				aria-label="Close">
				&times;
			</button>
			{{#if showPageHeader}}
			<h2 class="global-views-modal-content-header-title">
				{{pageHeader}}
			</h2>
			{{/if}}
		</div>
		<!--Modal-content -->
		<div id="modal-body" data-type="modal-body" class=" global-views-modal-content-body" data-view="Child.View">
		</div>
	</div>
</div>

<script>
	$(document).on('focus', '.product-detail-to-quote-add-to-quote-button', function () {
		$(this).on('keydown', function (e) {
			if (e.key === "Tab" && !e.shiftKey) {
				e.preventDefault(); // Prevent default tab behavior
				e.stopPropagation(); // Stop propagation to prevent multiple executions
				$('.global-views-modal-content-header-close').focus(); // Set focus to header close button
			}
		});
	}).on('blur', '.product-detail-to-quote-add-to-quote-button', function () {
		$(this).off('keydown'); // Remove the keydown event listener when focus is lost
	});

	$('.global-views-modal-content-header-close').on('keydown', function (e) {
		if (e.key === "Tab" && e.shiftKey) {
			e.preventDefault(); // Prevent default tab behavior
			e.stopPropagation(); // Stop propagation to prevent multiple executions
			$('.product-detail-to-quote-add-to-quote-button').focus();
			$('.address-edit-form-button-cancel').focus();
		}
	});

	$(document).on('focus', '.address-edit-form-button-cancel', function () {
		$(this).on('keydown', function (e) {
			if (e.key === "Tab" && !e.shiftKey) {
				console.log('hi', 'hi');
				e.preventDefault(); // Prevent default tab behavior
				e.stopPropagation(); // Stop propagation to prevent multiple executions
				$('.global-views-modal-content-header-close').focus(); // Set focus to header close button
			}
		});
	})

</script>

{{!----
Use the following context variables when customizing this template:

pageHeader (String)
showPageHeader (Boolean)
modalDialogClass (String)

----}}