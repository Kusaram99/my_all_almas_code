const cardVerification = require('../asyncronous/card-verification');

// Placing order and deducting amount for order.

function getCardDetails(){
    console.log("Card Received");
    const card = "9988 8889 6699 6699";
    cardVerification.verify(card, deductMoney);
}

function deductMoney(card){
    console.log("Amount deducted");
}

getCardDetails();