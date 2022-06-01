// Factorial
// factorial means ulta multiple karne jo paryant 1 yet nahi.
// Example:-
// 5! :- 5 * 4 * 3 * 2 * 1 = 120
// 4! :- 4 * 3 * 2 * 1 = 25

// 1. If I want 4 number's factorial using Iterative factorial
// Iterative Approch
/*
const iterativeFactorial = (number)=>{
    let count = 1;
    for(let i = number; i>0; i--){
        count = count * i
    }
    console.log(count);
}

iterativeFactorial(3);

*/
// Recursive Approch
// finde 4!
/*
const recursiveFactorial = (number)=>{
    if(number == 1){
        return 1;
    }
    
    return number * recursiveFactorial(number - 1); // 4*3,= 12 * 2  
}
console.log(recursiveFactorial(4));

*/

/*
/// Fibonacci -----------------------

// Iterative Approach
const iterativeFibonacci = (number)=>{
    let arr = [0,1];
    let sum = 0;
    for(let i =0; i<number;i++){
        sum = arr[i] + arr[i+1];
        arr.push(sum);
    }

    console.log(arr);
}

iterativeFibonacci(7);
*/

// recursive approch -----------------
// const incNum =(n)=>{
//     if(n < 1){
//         return 1;
//     }
//     return incNum(n - 1) + incNum(n - 2);
// }

// console.log(incNum(8));


// hackerRanck Q.2 ------------
// function range(x, y) {
//     x += 1;
//     if (!(x < y)) {
//         return;
//     }
//     console.log(x);
//     range(x, y);
// }
// range(2, 9);

// Q.3 -----------
let index = 0;
let result = 0;
function array_sum(sum) {
    if (!(index < sum.length)) {
        return;
    }else{
        result += sum[index];
        index++;
    }
    array_sum(sum);
    return result;
}

console.log(array_sum([1, 2, 3, 4, 5, 6]));
