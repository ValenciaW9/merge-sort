
function mergeSortedArrayUsingConcat(array1, array2) { 
  let sortedArray = [], 
    Array1Index = 0, 
    Array2Index = 0; 
  while ( 
    Array1Index < array1.length && 
    Array2Index < array2.length 
  ) { 
    if ( 
      sortFunc( 
        array1[Array1Index], 
        array2[Array2Index] 
      ) > 0 
    ) { 
      sortedArray.push(array2[Array2Index++]); 
    } else { 
      sortedArray.push(array1[Array1Index++]); 
    } 
  } 
  if (Array2Index < array2.length) { 
    sortedArray = sortedArray.concat( 
      array2.slice(Array2Index) 
    ); 
  } else { 
    sortedArray = sortedArray.concat( 
      array1.slice(Array1Index) 
    ); 
  } 
  return sortedArray; 
} 
function sortFunc(a, b) { 
  return a - b; 
} 
console.log( 
  mergeSortedArrayUsingConcat( 
    [1, 2, 3, 5, 9], 
    [4, 6, 7, 8] 
  ) 
);

f//Using Array.reduce() and shift method method 
function mergeSortedArraysUsingReduce(array1, array2) { 

  // Using array.reduce to generate new sorted array 
  let singleMergedArray = array1.reduce( 
    (outputVar, array1Element) => { 
      while ( 
        array2.length && 
        array2[0] < array1Element 
      ) { 
        outputVar.push(array2.shift()); 
      } 
      outputVar.push(array1Element); 
      return outputVar; 
    }, 
    [] 
  ); 

  return singleMergedArray.concat(array2); 
} 
let array1 = [1, 2, 3, 5, 9]; 
let array2 = [4, 6, 7, 8]; 
const outputArray = mergeSortedArraysUsingReduce( 
  array1, 
  array2 
); 
console.log(outputArray);


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;


// Using concat() and slice() method e
// And a written explanation of your solution
// Please add your pseudocode to this

/* The code includes two functions, mergeSortedArrayUsingConcat and mergeSortedArraysUsingReduce, which
* merge two sorted arrays into a single sorted array using different methods.
* @param array1 - [1, 2, 3, 5, 9]
* @param array2 - The `array2` parameter is an array of numbers that you want to merge with `array1`
* in a sorted order.
* @returns The code is returning the sorted merged array of the two input arrays.
*/

