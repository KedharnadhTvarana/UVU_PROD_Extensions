{{#if iseligibleforloyalty}}
<section class="loyaltyprofileupdate-layout">
    <div class="update-profile-section">
        <p id="success_msg" style="display: none"></p>
        {{#unless is_birth_date}}
        <div class="profile-form">
            <label>Birth Date </label>
            <input type="date" name="birth_date" id="birth_date" value="{{birth_date}}" placeholder="MM-DD-YY">
            <p class="profile-error" id="birth_error" style="display: none"></p>
        </div> 
        {{/unless}}
        {{#if is_birth_date}}
        <div class="profile-form">
            <label>Birth Date</label>  
            <p name="birth_date" id="birth_date">{{birth_date}}</p>
            <p class="profile-error" id="birth_error" style="display: none"></p>
        </div>
        {{/if}} 
        {{#unless is_anniversary_dt}}
        <div class="profile-form">
            <label>Anniversary Date</label>
            <input type="date" name="anniversary_date" id="anniversary_date" value="{{anniversary_dt}}" placeholder="MM-DD-YY">
            <p class="profile-error" id="anniversary_error" style="display: none"></p>
        </div>
        {{/unless}}
        {{#if is_anniversary_dt}}
        <div class="profile-form">
            <label>Anniversary Date</label> 
            <p name="anniversary_date" id="anniversary_date">{{anniversary_dt}}</p>
            <p class="profile-error" id="anniversary_error" style="display: none"></p>
        </div>
        {{/if}}
        <div class="profile-form">
            <label>Referral Code Sent By Your Friend</label>
            <input type="text" name="referral_code" id="referral_code" value="{{referral_code}}" {{#if is_referral_code}}disabled{{/if}}>
            <p class="profile-error" id="referral_error" style="display: none"></p>
        </div>
        {{#if show_update_button}}
        <button id="update_profile" class="earn_submit pro_btn" data-action="update-profile">Update</button>
        {{/if}}
    </div>
</section>
{{else}}
<div>
  <p style="margin-top: 70px;margin-left: 40px;">You are Not a Loyalty Memeber, please send us Email to<a href="#">#</a></p>
</div>
{{/if}}