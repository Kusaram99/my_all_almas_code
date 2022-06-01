// Bubble Sort Algorithm 
// Bubble sort using javascript
/* --------------------------------------------------
const bubSort_js =(arr)=>{
    for (let i = 0; i<arr.length; i++){

        for(let j = 0; j < arr.length-i-1; j++){
            
            if(arr[j] > arr[j+1]){
                let item = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = item;
            }
        }
    }

    console.log("Sorted Arr: ", arr);
}

var arr = [234, 43, 55, 63,  5, 6, 235, -547];
bubSort_js(arr);
*///---------------------------------------------- end 

// Optimised Bubble Sort Algorithm
// Optimized implementation of bubble sort Algorithm
/* 
function bubbleSort(arr) {
    var len = arr.length;
    var isSwapped = false;

    for (let i =0; i< len; i++){
        isSwapped = false;
        for(let j = 0; j<len-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    console.log(arr);
}

var arr = [1, 2, 3, 6, 1];
// calling the bubbleSort Function
bubbleSort(arr)
*/// --------------------------------------- End


/*// Selection Sort Code in JavaScript
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
function selectionSort(arr, n)
{
    var min_idx;
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i; 
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
    console.log(arr)
}
  
var arr = [64, 12, 22, 11];
var n = 5;
selectionSort(arr, n);

*/
// --------------------------------------------- End


/* // Insertion Sort in JavaScript 
// Javascript program for insertion sort 
  
// Function to sort an array using insertion sort
function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        //  Move elements of arr[0..i-1], that are 
        // greater than key, to one position ahead 
        // of their current position 
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
}
let arr = [12, 11, 13, 5, 6 ]; 
let n = arr.length; 
insertionSort(arr, n);
*/
// ------------------------------------------------- End


// MergeSort Algorithm
//Divide and Conquer Strategy




