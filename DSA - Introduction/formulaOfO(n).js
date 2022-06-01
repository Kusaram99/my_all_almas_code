// 1)-----------------> 
//finde indivisible Proccesor operation (its not important for calculat).

// n=1;
// for(let i=0; i<n; i++){
//     let sum = i;
// } // here proccesor operation total is (1 + 1 + 1 + 1 + 1 = 5) ;

// 2)-----------------> linear Algorithm
// if =, +, etc., with input have relation then it is a 1+ operation.
// Algorithm comparison-linear search.

let arr = [43, 54, 56, 66];// its a sorted array
let findValue = 5;
let n = 6;

// this Algorithm return matching element else return -1;
function sortValue(arr) {
    for (let i = 0; i < n; i++) {
        if (arr[i] == findValue) {
            return arr[i];
        }
    }
    return -1;
}
console.log(sortValue(arr));  //total operation 1+ 7+ 6+ 6 = 20

// ----> Explain about Time complexity
for (let i = 0; i < 20; i++) {
    a += a;
}

// --- above code complexity ---
// 1 + 20 + 1 + 20 + 40 = 82
// 1 (n+1) n 2n = 4*20 = 80 + 2 = 82
// T(n) = 4n+2  


