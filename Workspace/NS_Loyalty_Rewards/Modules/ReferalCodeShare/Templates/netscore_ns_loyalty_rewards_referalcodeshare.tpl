{{#if iseligibleforloyalty}}
<div class="refer_section">
  <div class="row"> 
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
     <div class="earnrefer_image">
      <img src="/site/loyalty_images/referal.png">
    </div>
    <div class="earnrefer_content">
      <!--<h1>{{translate 'Refer & Earn'}}</h1>-->
      <!--<h3>{{translate 'Share your code with anyone and you each get $(0)reward points when they make their Sign up.' referrer_points}}</h3>-->
      <h3>{{translate 'Share Your Code With Your Friend.'}}</h3> 
      <h3>{{translate 'On SignUp, You and Your Referred Friend Can Get <span>$(0)</span> Points' referrer_points}}</h3>
      <div id="referral_code">
       <h2 id="referral" class="referal_point" for="loyaltypoints">{{translate 'Your code is'}} <span> {{referralCode}} </span></h2>
       <div class="form-group">
        <div class="earn_mail" data-input="email" data-validation="control-group">
          <!--<label>{{translate 'Invite Friends'}}</label>-->
          <input class="email-textbox-new" type="text" name="email" id="email" value="" placeholder="Enter your friend's email here">
          <button id="submit-button" class="submit-button earn_submit">
           <img src="/site/loyalty_images/next_icon.png">
         </button>
       </div>
     </div>
     <p class="error_field"><span id="message-error" style="text-align: center;display: none;"></span></p>
     <p class ="earn_mailtitle">{{translate 'You can enter multiple email addresses by separating them with a semicolon extension(;).'}}</p>
       <!--<div class="earnpoint_submit">
         <button id="submit-button" class="sharebtn">{{translate 'Share & Earn'}}</button>           
       </div>-->
       <p style="text-align: center; margin: 13px 0 0 0;width: 100%;float: left;"><span id="message-status" style="text-align: center;display: none;"></span></p>
     </div>
   </div>
 </div>
</div>
</div>
{{else}}
<div data-view="noteligible"></div>
{{/if}}