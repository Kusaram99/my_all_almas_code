/* Linear search pseudocode --------- Start
Set found to false
Set position to −1
Set index to 0
while found is false and index < number of elements
    if list[index] is equal to search value
        Set found to true
        Set position to index
    else Add 1 to index
return position
*/

// Linear Search 
/*
function linearSearch(value, list) {
    let found = false;
    let position = -1;
    let index = 0;

    while (!found && index < list.length) {
        if (list[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
}

let result = linearSearch(5,[1, 3, 2, 4, 5]);

console.log(result);
*/
//  ----------------------------------------------------- End Linear Search Algo

// Binary Search Algorithm

// There are two ways of implementing binary search:
// 1) iterative method
// 2) recursive method


