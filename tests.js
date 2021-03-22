function testAll(){
    testPresenceId();
    testPayoutMultiplierAndWinChance();
    testBetAmount();
    testWinProfit();
}


function doubleToInt(double){
    return (double*100000000).toFixed(0);
}

function testPresenceId(){
    console.log("Button LO is");
    isPresent($buttonLo);
    console.log("Button HI is");
    isPresent($buttonHi);
    console.log("Field BET AMOUNT is");
    isPresent($betAmountField);
    console.log("Button HALF BET is");
    isPresent($buttonHalfBet);
    console.log("Button 2x BET is");
    isPresent($button2xBet);
    console.log("Button MIN BET is");
    isPresent($buttonMinBet);
    console.log("Button MAX BET is");
    isPresent($buttonMaxBet);
    console.log("Field balanceField is");
    isPresent($balanceField);
    console.log("Field WIN PROFIT is");
    isPresent($winProfitField);
    console.log("Field PAYOUT MULTIPLIER is");
    isPresent($payoutMultiplierField);
    // $loseMessageField cannot be tested
    // $winMessageField cannot be tested
    console.log("Wrong id is (should be undefined)");
    isPresent($('not_exist_only_for_test'));
}

function isPresent(field){
    if (field.length > 0){
        console.log("%cOK", "color:green;");
    } else{
        console.log("%cUNDEFINED", "color:red;");
    }
}

function testPayoutMultiplierAndWinChance(){
    var multiplier = getPayoutMultiplier();
    var winChance = getWinChance();
    setWinChance(30);
    console.log("Is multiplier changed after change win chance")
    console.log(multiplier != getPayoutMultiplier());
    winChance = getWinChance();
    console.log("Is win chance changed after change multiplier")
    setPayoutMultiplier(2.5);
    console.log(winChance != getWinChance());
    console.log("Back to default");
    setPayoutMultiplier(2);
    console.log(getPayoutMultiplier() == 2 && getWinChance() == "47.50%");
}

function testWinProfit(){
    clickMinBet();
    console.log("Is minimal profit 1");
    console.log(doubleToInt(getWinProfit()) == 1);
    console.log("Is minimal profit 2 after click 2x");
    click2xBet();
    console.log(doubleToInt(getWinProfit()) == 2);
    console.log("Is minimal profit not 3 after click 2x");
    console.log(doubleToInt(getWinProfit()) != 3);
}

function testBetAmount(){
    clickMinBet();
    console.log("Is Bet Amount 1");
    console.log(doubleToInt(getBetAmount()) == 1);
    console.log("Is Bet Amount 2 after click 2x");
    click2xBet();
    console.log(doubleToInt(getBetAmount()) == 2);
    console.log("Is Bet Amount 4 after click 2x");
    click2xBet();
    console.log(doubleToInt(getBetAmount()) == 4);
    console.log("Is Bet Amount not 3");
    console.log(doubleToInt(getWinProfit()) != 3);
    console.log("Is Bet Amount 2 after click /2");
    clickHalfBet();
    console.log(doubleToInt(getBetAmount()) == 2);
            // alert need click on ok button
    // console.log("Is Bet Amount max after click max");
    // clickMaxBet;
    // console.log(doubleToInt(getBetAmount()) == getBalance());
    //
    console.log("Insert bet amount value");
    setBetAmount(0.00000003);
    console.log(doubleToInt(getBetAmount()) == 3);
    console.log("bet multiplier");
    multiplyBet(2);
    console.log(doubleToInt(getBetAmount()) == 6);
}