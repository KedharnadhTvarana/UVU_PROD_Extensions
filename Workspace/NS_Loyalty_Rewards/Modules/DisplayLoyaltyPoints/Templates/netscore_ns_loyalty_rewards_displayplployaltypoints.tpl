<div>
  {{#if isProductEligible}}
  {{#if points}}
  <div id="show-points" class="plp_show">
    <h2><span class="pts_item">{{points}} </br>Pts</span></h2>
    <h3 class="pts_text">{{translate 'Earn $(0) Reward Points for this product purchase' points}}</span></h3>
  </div>
  {{/if}}
  {{/if}}
</div>