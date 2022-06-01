module.exports.verify = (card, cd)=>{
    let promis = new Promise((resolve, reject)=>{
        if(!card){
            reject("Card is empty");
        }
        console.log("Promise is countinues");
        setTimeout(()=>{
            // cerifying card.. calling bank db
            console.log("Card Verified");
            resolve("resolev");
        }, 4000);
    });
    return promis;
}


