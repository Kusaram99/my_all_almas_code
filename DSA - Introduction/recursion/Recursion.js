// From tube -- its giving error -- we handle next time ---->
// let myArray = [3, 4, 1, 5];
// let f = 0;
// let s = 1;

// function isArraySorted(array){
//     for(let i = 0; i<array.length; i++){
//         if(array[i] > array[i+1]){
//             return false;
//         }
//     }
//     return true;
// }

// function sortArray (array){
//     if(isArraySorted(array)){
//         console.log(array);
//     }else if(array[f] < array[s]){
//         f++;
//         s++;
//         sortArray(array)
//     }
//     else{
//         [array[f], array[s]] = [array[s], array[f]];
//         f = 0;
//         s = 0;
//         sortArray(array);
//     }
// }

// sortArray(myArray);

//------------------------------------> 


// =============================================== Recursion Start ===========================

// any function calling self this mean that is a "Recursion function"

// Example

// let add_num = 0;
// function getSum(num) {
//     debugger
//     if (num == 0) {
//         return 0;
//     }
//     console.log("add_num:- ", add_num+num);
//     return num + getSum(num - 1);
// }
// console.log(getSum(10));

//---------------- new Problem start -----
// Write a function to sum all numbers till 11

/* let arr = [1,2,3,4,5,6,7,8,9,10,11];

function getSum(arr){
    return _getSum(arr, arr.length-1)//(arr, 10)
}

function _getSum(arr, index){
    if(index==0){
        return arr[0];
    }
    console.log("sum for num:- ", index)
    return arr[index]+_getSum(arr, index-1);
}

console.log(getSum(arr)); */

// ------------------------- new Problem reverse Start  --------
// Start
// Write function which takes one parameter as string 
// Recursively call reverse function on every character of the input string 
// if all characters travered(length), return string
// end

// water --> retaw

// 5--> 5*4*3*2* 
/*
// this not effective -----
function factorial(n) {
    var prod = 1;
    for (var i = 1; i <= n; i++) {
        prod *= i
    }
    return prod;
}

console.log(":- ",factorial(10));

//this effective ================================== yay 
function _factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * _factorial(n-1);
}

console.log("_:- ", _factorial(3));

// Its worked like below -------------

// _factorial(3) n=3 _factorial(2)  //  3 *  2 =  6    Final return value 6
// _factorial(2) n=2 _factorial(1)  //  2 * 1 = 2 return 2
// _factorial(1) return 1 

*/

// --------------- Second Example

/* // Write a function to reverse the array

// Iterative approach
function getReverseArray(arr){
    var reverseArr = [];
    for(let i=arr.length-1; i>-1; i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

console.log(getReverseArray([1,2,3,4,5]));

// Recursive approach
// Above example like but short
function getReverseArr(arr){
    debugger
    if(arr.length > 1){
        return [arr.pop()].concat(getReverseArr(arr))
    }
    else{
        return arr.pop();
    }
}

console.log("second:- ",getReverseArr([1,2,3,4,5]));
*/

function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-2) + fibonacci(n-1);
}
console.log(fibonacci(10));

// Memoization
const results = {};
function fib(n){
    if(n <= 1) return n;
    if(n in results) {
        return results[n];
    }
    else{
        results[n] = fib(n - 2) + fib(n - 1);
    }
    return results[n];
}

console.log(fib(200));
