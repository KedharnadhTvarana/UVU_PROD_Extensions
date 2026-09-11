<section class="loyaltypointspdp-layout">
    <div>
        {{#if isProductEligible}}
        {{#if points_obj.minimum_points}}
        {{#if points_obj.maximum_points}}
        <div id="show-points">
            <p class="single_pro">{{translate 'Earn <span class="single_pnt">$(0) - $(1) </span> Reward Points'
                points_obj.minimum_points points_obj.maximum_points}}</p>
        </div>
        {{/if}}
        {{/if}}
        {{#unless points_obj.minimum_points}}
        {{#unless points_obj.maximum_points}}
        {{#if points_obj.points}}
        <div id="show-points" class="plp_show now_shw">
            <h2><span class="pts_item">{{points_obj.points}} </br>Pts</span></h2>
            <h3 class="pts_text">{{translate 'Earn $(0) Reward Points for this product purchase'
                points_obj.points}}</span></h3>
        </div>
        {{/if}}
        {{/unless}}
        {{/unless}}
        {{/if}}
    </div>
</section>