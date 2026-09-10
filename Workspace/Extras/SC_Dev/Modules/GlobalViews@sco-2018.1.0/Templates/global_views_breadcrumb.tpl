<div id="banner-breadcrumb-top" class="content-banner banner-breadcrumb-top" data-cms-area="breadcrumb_top"
	data-cms-area-filters="global"></div>
<nav aria-label="Breadcrumb">

	<ol class="global-views-breadcrumb" itemprop="breadcrumb">
		{{#each pages}}
		{{#if @last}}
		<li class="global-views-breadcrumb-item-active" role="listitem">
			{{text}}
		</li>
		{{else}}
		<li class="global-views-breadcrumb-item" role="listitem">
			<a href="{{href}}" {{#if hasDataTouchpoint}} data-touchpoint="{{data-touchpoint}}" {{/if}} {{#if
				hasDataHashtag}} data-hashtag="{{data-hashtag}}" {{/if}}> {{text}} </a>
		</li>
		<li class="global-views-breadcrumb-divider" role="presentation">
			/<!-- <span class="global-views-breadcrumb-divider-icon"></span> -->
		</li>
		{{/if}}
		{{/each}}
	</ol>
</nav>
<div id="banner-breadcrumb-bottom" class="content-banner banner-breadcrumb-bottom" data-cms-area="breadcrumb_bottom"
	data-cms-area-filters="global"></div>



{{!----
Use the following context variables when customizing this template:

pages (Array)

----}}