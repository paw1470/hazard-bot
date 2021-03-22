function testAll(){
    testPresenceId();
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

