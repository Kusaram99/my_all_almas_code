// Finde largest Number
/*
Step 1: start
Step 2: Declare variables a,b and c.
Step 3: Read variables a,b and c.
Setp 4: If a > b
           If a > b
              Display a is the largest number.
            Else
              Display c is the largest number.
        Else
            If b > c
              Display b is the largest number.
            Else
              Display c is the greatest number
        
Step 5: Stop
*/

var a, b, c;

function getLargest(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log("a is big:- ", a);
        } else {
            console.log("c is greatest:- ", c);
        }
    }
    else {
        if (b > c) {
            console.log("b is big:- ", b);
        } else {
            console.log("c is greatest:- ", c);
        }
    }
}

a = 203;
b = 930;
c = 40;

getLargest(a,b,c);
