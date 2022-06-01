const cardVerification = require('./card-verification');

// Placing order and deducting amount for order.

async function getCardDetails() {
    console.log("Card Received");
    const card = "5544 4344 3434 5455";
    // // 1. using then function

    // const promis = cardVerification.verify(card, deductMoney);
    // console.log(promis);
    // promis.then(
    //     //execute when promise is resolved.
    //     () => {
    //         deductMoney();
    //     },
    //     // execute when promise is rejected.
    //     (err) => {
    //         console.log("error block");
    //         console.log(err);
    //     }

    //     // can handle error from body of promise as well as after resolution if there are any error.
    // ).catch(err => {
    //     console.log("error in catch");
    //     console.log(err);
    // })

    // 2. using async/await
    try{
        let result = await cardVerification.verify(card);
        console.log("Promis result");
        console.log(result);
        deductMoney();

    }catch(err){
        console.log("catch Error");
        console.log(err);
    }
    
}

console.log("this is syncronous code")

function deductMoney(card) {
    console.log("Amount deducted");
}

getCardDetails();

// 1. How to create a promise. new Promise((resolve,reject)=>{...})
// 2. How to listen to a promise. then().catch();
// 3. Is there better way to listen ?=> async, await
// 4. How to handle error from promise ?=> err, catch block.
    // 4.1 if using then => user err or catch block.
    // 4.2 is using async await => use try, catch block.