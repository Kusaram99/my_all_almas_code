// Asyncronous 
const fs = require('fs');

const printData = function(err, data){
    if(!err){
        console.log(data.toString());
    }
    console.log("I am asyncronous")
}

fs.readFile("data.txt", printData);
console.log("hello world")