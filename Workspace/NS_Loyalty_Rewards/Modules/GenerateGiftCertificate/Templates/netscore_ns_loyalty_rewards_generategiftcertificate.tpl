{{#if iseligibleforloyalty}}
<div class="clearfix"></div>
<div class="giftcetificate_section">
  <div class="giftsection_container">  
    <div class="gift_banner">
      <h1><img src="/site/loyalty_images/gift_banner.png"></h1>
      <h4 id="availble-points">{{avail_points}}</h4>
      <h5>{{translate 'Available Points'}}</h5> 
    </div>
    <div class="giftcertificate_form">
      <div class="form-group">
        <label for="">{{translate 'Points you want to redeem:'}}</label>
        <input class="form-control" type="text" name="redeempoints" id="redeempoints" >
      </div>
      <p style="text-align: center; margin: 0 0 14px 0;"><span id="points-error" style="display: none;"></span></p>
      <div class="form-group">
        <label for="">Receiver's Email:</label>
        <input class="form-control" type="text" name="receiverEmail" id="receiverEmail">
      </div>
      <p style="text-align: center; margin: 10px auto 10px auto"><span id="email-error" style="display: none;"></span></p>
      <button id="generate-gift-card" class="generate_gift">{{translate 'Generate Gift Card'}}</button>
    </div>
    <p  style="text-align: center; margin: 10px auto 10px auto;width:100%;float: left;"><span id="success-msg" style="display: none;"></span></p>
    <p  style="text-align: center; margin: 10px auto 10px auto;width: 100%;float: left;"><span id="fail-msg" style="display: none;"></span></p>

  </div>
</div>
{{else}}
<div>
  <p style="margin-top: 70px;margin-left: 40px;">You are Not a Loyalty Memeber, please send us Email to  <a href="#"> </a></p>
</div>
{{/if}} 