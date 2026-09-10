{{#if iseligibleforloyalty}}
{{#if nopoints}} 
<div class="row">
  <div class="loyalty_points_section">
    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
      <div class="earned_points_section earned_sec">
        <div class="earnedsection__inner">
          <div class="earnedsection__content"> 
            <h1>{{earned_points}}<span class="lines">&nbsp;</span><small> Total Points Earned </small></h1>
          </div>      
          
        </div>
      </div>
    </div> 
    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
      <div class="earned_points_section available_sec">
        <div class="earnedsection__inner">

          <div class="earnedsection__content">
            <h1>{{availble_points}}<span class="lines lines1">&nbsp;</span><small> Available Points</small></h1>  </div> 
          </div>
        </div>
      </div> 
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">      
       <div class="earned_points_section redeem_sec">
        <div class="earnedsection__inner"> 
         <div class="earnedsection__content">
          <h1>{{redeem_points}}<span class="lines lines2">&nbsp;</span><small> Total Points Redeemed </small></h1>
        </div>
      </div>
    </div>
  </div>  
</div>
</div>
<div class="earned_tablehistory">
  <!-- <div class="lyalty_title"><h3>{{translate 'Earned Points History'}}</h3></div> -->
  <div class="table-responsive-class">
    <table class="table-condensed loyalty_earnedtable">
      <thead>
        <th>DATE</th>
        <th>ACTIVITY PERFORMED</th>
        <th>TRANSACTION ID</th>
        <th>POINTS EARNED</th>
      </tr>
    </thead>
    <tbody>
      {{#each data}}
      <tr class="loyaltyviews-row">
        <td data-title="Date">{{date}}</td>
        <td data-title="Activity">{{activity}}</td>
        <td data-title="Transaction Id">{{transaction}}</td>
        <td data-title="POINTS EARNED">{{earned}}</td>
      </tr>
      {{/each}}
    </tbody>
  </table>
</div>
</div>
{{else}}
<h3 class="empty-points">Your account does not have any available Loyalty Rewards Points!</h3>
<h4 class="show-earn">Start Earning Today</h4>
<ul class="refer-pnt">
  <li>{{translate 'Purchasing items'}}</li>
  <li>{{translate 'Write a product review'}}</li>
  <li>{{translate 'Refer a friend'}}</li>
  <li>{{translate 'Share products on social media'}}</li>
</ul>
{{/if}}
{{else}}
<div data-view="noteligible"></div>
{{/if}}