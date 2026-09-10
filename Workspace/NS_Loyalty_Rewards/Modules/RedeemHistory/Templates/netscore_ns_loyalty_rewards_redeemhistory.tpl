{{#if iseligibleforloyalty}}
<div class="reedem_pnt">
    <img class="small-ic1" src="/site/loyalty_images/reedem-pnts.png"/>
    <h3>{{translate 'Redeemed Points History'}}</h3>
</div>
{{#if isnotempty}}
<div class="table-responsive-class">
   <table class="table-condensed loyalty_earnedtable">
    <thead>
        <th>DATE</th>
        <th>ACTIVITY PERFORMED</th>
        <th>TRANSACTION ID</th>
        <th>VOCHER CODE</th>
        <th>VALUE</th>
        <th>POINTS REDEEMED</th>
        <th>PRINT</th> 
    </thead>
    <tbody>
        {{#each data}}
        <tr class="loyaltyviews-row"> 
            <td data-title="DATE">{{date}}</td>
            <td data-title="ACTIVITY PERFORMED">{{specialnote}}</td>
            {{#if transactionid}}
            <td data-title="TRANSACTION ID">{{transactionid}}</td>
            {{else}}
            <td data-title="TRANSACTION ID">-</td>
            {{/if}}
            {{#if giftvalue}}
            <td data-title="VOCHER CODE">{{giftvalue}}</td>
            {{else}}
            <td data-title="VOCHER CODE">-</td>
            {{/if}}
            {{#if ordertotal}}
            <td data-title="VALUE">{{currency_symbol}}{{ordertotal}}</td>
            {{else}}
            <td data-title="VALUE">-</td>
            {{/if}}
            <td data-title="POINTS REDEEMED">{{redeemed}}</td>
            {{#if vocherPdf}}
            <td data-title="PRINT"><a href="{{../basicURL}}{{vocherPdf}}" target="_blank"><span class="loyalty-print"> PRINT</span></a></td>
            {{else}}
            <td data-title="PRINT"></td>
            {{/if}}
        </tr>
        {{/each}}
    </tbody>
</table>
</div>
{{else}}
<div class="notransction">
    <h3>No Transactions in Redeemed Points History</h3>
</div>
{{/if}}
{{else}}
<div data-view="noteligible"></div>
{{/if}}

