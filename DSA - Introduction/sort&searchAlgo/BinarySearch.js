// Binary Searching Algorithm
// 1. Pick first element as Pivot
// 2. Divide the datastructure in two portion
// 3. Traerse left section and sort

// finde the number using Iterative Approach -------
/* function binarySearch(value , list){ debugger
    let low = 0;
    let high = list.length -1;//3
    let position = -1;
    let found = false;
    let mid;

    while(!found && low <= high){
        mid = Math.floor((low + high)/2);
        if(list[mid] == value){//1,0,
            found = true;
            position = mid;
        }else if(list[mid] > value){ // if in lower half
            high = mid - 1;
        }else{ // in upper half
            low = mid + 1;//3, 
        }
    }
    return position;
}
let binResult = binarySearch(6,[1, 2, 3, 6]);
console.log(binResult);
*/


// Recursive approach
function binarySearch(value, arr){
    if(!arr.length) return -1;
    let average = Math.floor(arr.length-1/2);

    if(value === arr[average]) return average;
    if(value > arr[average]) return binarySearch(value, arr.slice(average+1));
    if(value < arr[average]) return binarySearch(value, arr.slice(0, average));
}

let binResult = binarySearch(1, [1,2,3,4,5,6,7,89,10]);
console.log(binResult);



