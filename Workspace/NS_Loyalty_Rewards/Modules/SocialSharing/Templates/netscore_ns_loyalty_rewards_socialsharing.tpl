    {{#if isLogged}} 
    {{#if isCustomerELigibleforLoyalty}}
    {{#if itemEligible}}
    {{#if isEnableEmailShare}}
    <!-- Style for Email share --> 
    <!-- starts here --> 
    <a class="email-share" data-action="email-button" data-toggle="modal" data-target="#myModal2">
      <span class="loyalty-email-share-icon"></span>{{translate 'Email Share to Earn Points'}}</a>

      <!-- Modal -->
      <div class="modal fade" id="myModal2" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header share_text">
              <button type="button" class="close popclose" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">{{translate 'Send to a Friend'}}</h4>
          </div>
          <div class="modal-body">
              <div class="email_share">

                <h4>Item: <span class="product_share">{{itemName}}</span></h4>
                <p>{{translate 'Love what you see? Need a second opinion? Email this to a friend!'}}</p>
                <h4>{{translate 'Your friend''s info:'}}</h4>


                <div class="product_viewpop">
                  <div class="form-group col-md-6 nopadding_left">
                    <label for="yourFriendName"><span id="yourFriendNameLabel">{{translate '*Name'}}</span></label>
                    <input class="form-control" type="text" id="yourFriendName" >
                    <p style="text-align: left; margin: 3px 0px;"><span id="referral-name" style="display: none;"></span></p>
                </div>
                <div class="form-group col-md-6 nopadding_right">
                    <label for="yourFriendEmail"><span id="yourFriendEmailLabel">{{translate '*Email Address'}}</span></label>
                    <input class="form-control" type="email" id="yourFriendEmail">
                    <p style="text-align: left; margin: 3px 0px;"><span id="referral-email" style="display: none;"></span></p>
                </div>

                <div class="form-group col-md-12 nopadding">
                    <label for="messageArea"><span id="shareThoughts">{{translate 'Share your thoughts:'}} </span></label>
                    <textarea id="messageArea" rows="3" class="form-control"></textarea>
                </div>
                <div class="clearfix"></div>
                <button class=" share_frm" id="email-share" data-action="email-share-product">{{translate 'Share'}}</button>

                <p style="text-align: left;     margin: 10px 0px;"><span id="message" style="display: none;"></span></p>

            </div>
        </div>
    </div>
</div>
</div>
</div>
{{/if}}
{{#if isEnableFbShare}}
<!-- ends here -->
<!-- Style for Facebook share --> 
<!-- starts here --> 
<div class="loyalty-points-socialshare">
    <a class="fbshare" href="#" id="fb-share-local"><i class="social-sharing-social-facebook"></i> {{translate 'Facebook share to Earn Points'}}</a>
</div>
<!-- ends here --> 
{{/if}}
{{/if}}
{{/if}}
{{/if}}