// Merge Sort Algorithm
// function merge(arr, l, m, r){

// }


// function MergeSort(arr, l, r){
//     if(l >= r){
//         return // returns recursively
//     }
//     var m = l + parseInt((r-l)/2);
//     MergeSort(arr,l,m);
//     MergeSort(arr,m+1,r);
//     merge(arr, l, m, r);
// }


/*// Merge Sort Algorithm
function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here

    while (left.length && right.length) {
        // insert the smallest element to the sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    // use spread operator and create a new array, combining the three arrays
    console.log("Test:- ", [...sortedArr, ...left, ...right]);
    return [...sortedArr, ...left, ...right];
}

// 
function mergeSort(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
  }

  let finalResult = mergeSort([23, 64, 1, 9, 34, 0]);
  console.log("Final Result:- ", finalResult);

  */

//   -------------------------------------------- End 

// My self code as Practice ---
function merge(left, right) {

    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
    }
    return[...sortedArr, ...left, ...right];
}

function sortMethod(arr){
    let half = arr.length/2;
    if(arr.length <= 1){
        return arr;
    }
    let left = arr.splice(0, half);
    let right = arr;

    return merge(sortMethod(left), sortMethod(right));
}

let result = sortMethod([232, 1,34, 223, 2, 54, 23, 11,22,22, 3,5,3,4,7]);
console.log(result);
console.log(result.length);