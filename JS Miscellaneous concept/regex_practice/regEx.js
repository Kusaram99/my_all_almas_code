// Practise Questions
// 1. Write a JavaScript program to test the first character of a string is uppercase or not.

// const q1_str = "Sam your bRother";
// let q1_reg = new RegExp(/^[A-Z]/);
// console.log(q1_str.match(q1_reg));
// if(q1_str.match(q1_reg)){
//     console.log("first caracter is Uppercase");
// }else{
//     console.log('first Caracter is not Uppercase');
// }

// ------------- Q-1 end

// 2. Write a JavaScript program to check a credit card number

const q2_cardNum = 'this is Ram ok';
const q2_reg = /Ram/;
console.log(q2_reg.exec(q2_cardNum));