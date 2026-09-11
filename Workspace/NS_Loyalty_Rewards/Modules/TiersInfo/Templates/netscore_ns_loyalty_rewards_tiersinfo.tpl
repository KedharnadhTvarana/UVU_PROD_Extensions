{{#if iseligibleforloyalty}}
<div class="loyalty_tiressection">
    <h5>Your Current Tier</h5>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
            <!-- showing current level and next level -->
            <!-- starts here -->
            <div class="row">
                {{#if flag}} 
                <div class="col-xs-12 col-sm-5 col-md-5">
                    <div class="tirebbase_image">
                        <h1><img class="img-responsive" src={{current_image_url}}></h1>                      

                        <div class="tirebbase_sec">
                            <h4><img class="img-responsive" src="{{current_image_url_icon}}"></h4>
                            <h2>Current Level</h2>
                        <h3>{{tierName}}</h3>
                        <p>"{{tierPoints}} Points" for every $1 spent</p>
                        </div>


                    </div>
                </div> 
                <div class="col-xs-12 col-sm-2 col-md-2">
                    <div class="tirebbase_arrow">
                        <p> {{difference}} <span>Points</span> </p>
                    </div>
                </div>               
                <div class="col-xs-12 col-sm-5 col-md-5">
                    <div class="tirebbase_image">
                        <h1><img class="img-responsive" src={{next_imageurl}}></h1> 
                        <div class="tirebbase_sec">
                            <h4><img class="img-responsive" src="{{next_imageurl_icon}}"></h4>
                            <h2>Next Level</h2>
                            <h3>{{nexttierName}}</h3>
                            <p>"{{nexttierPoints}} Points" for every $1 spent</p>
                        </div>
                    </div>
                </div>
                {{/if}}
                <!-- ends here -->

                <!-- if Customer is in final level -->
                <!-- starts here -->
                {{#if isFinalLevel}}               
                <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                    <div class="tirebbase_image">                    
                        <h1><img class="img-responsive" src={{current_image_url}}></h1> 
                        <div class="tirebbase_sec">
                            <h4><img class="img-responsive" src="{{current_image_url_icon}}"></h4>
                            <h2>You've Reached Final Level</h2>
                            <h3>{{tierName}}</h3>

                            <p>"{{tierPoints}} Points" for every $1 spent</p>
                        </div>
                    </div>
                </div>
                {{/if}}
                <!-- ends here -->
                <!-- if customer is in startinfg level -->
                <!-- starts here -->
                {{#if isStartLevel}}
                
                <div class="col-xs-10 col-sm-10 col-md-12 col-md-offset-0 col-sm-offset-1 col-xs-offset-1">
                    <div class="tirebbase_image" style="border: 1px solid #3e7f9b;border-radius: 20px;background: #3e7f9b;">
                        <h1 style="padding: 10px;font-size: 20px;color: #ffffff;
                        ">You need <span style="color: #0f3460;">{{difference}}</span> points to reach next level</h1>
                    </div>
                </div>


                <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                    <div class="tirebbase_image" style="margin-top:  65px;">
                        <h1><img class="img-responsive" src={{current_image_url}}></h1> 
                        <div class="tirebbase_sec">
                            <h4><img class="img-responsive" src="{{current_image_url_icon}}"></h4>
                            <h2>Next Level</h2>
                            <h3>{{tierName}}</h3>

                            <p>"{{tierPoints}} Points" for every $1 spent</p>
                        </div>
                    </div>
                </div>
                {{/if}}
                <!-- ends here -->
            </div>   
        </div>
    </div>
</div>
{{else}}
<div data-view="noteligible"></div>
{{/if}}