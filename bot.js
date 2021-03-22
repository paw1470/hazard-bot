// field id freebitco.in
var $buttonLo = $('#double_your_btc_bet_lo_button');
var $buttonHi = $('#double_your_btc_bet_hi_button');
var $betAmountField = $('#double_your_btc_stake');
var $buttonHalfBet = $('#double_your_btc_half');
var $button2xBet = $('#double_your_btc_2x');
var $buttonMinBet = $('#double_your_btc_min');
var $buttonMaxBet = $('#double_your_btc_max');
var $balanceField = $('#balance');
var $winProfitField = $('#win_amount');
var $loseMessageField = $('#double_your_btc_bet_lose');
var $winMessageField = $('#double_your_btc_bet_win');
var $payoutMultiplierField = $('#double_your_btc_payout_multiplier');
var $winChance = $('#double_your_btc_win_chance');


//set, get, click
function getPayoutMultiplier(){
    return $payoutMultiplierField.val();
}

function setPayoutMultiplier(value){
    $payoutMultiplierField.val(value);
    $payoutMultiplierField.trigger("keyup");
}

function getWinChance(){
    return $winChance.val();
}

function setWinChance(value){
    $winChance.val(value);
    $winChance.trigger("keyup");
}

function getWinProfit(){
    return $winProfitField.text();
}

//bet amount
function getBetAmount(){
    return $betAmountField.val();
}

function setBetAmount(value){
    $betAmountField.val(value.toFixed(8));
}

function clickHalfBet(){
    $buttonHalfBet.trigger("click");
}

function click2xBet(){
    $button2xBet.trigger("click");
}

function clickMinBet(){
    $buttonMinBet.trigger("click");
}

    //alert need click on ok button
// function clickMaxBet(){
//     $buttonMaxBet.trigger("click");
// }

function multiplyBet(multiplier){ 
    var currentValue = getBetAmount();
    var newValue = (currentValue * multiplier);	
    setBetAmount(newValue);
}

function getBalance(){ 
    return $balanceField.text();
}
