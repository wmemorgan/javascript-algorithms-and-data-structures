// 1. Can I restate the problem in my own words?
// Sort a list of numbers in an array by identifying a minimum number and compare it with each of the numbers
// then placing the number in the beginning of the list and repeating the process with the remaining numbers
// 2. What are the input that go into the problem?
// - Confirm required data types (string, integers, floats, arrays, objects), ARRAYS OF INTEGERS and/or FLOATS
// - Can negative numbers be included? YES
// - Confirm upper/lowercase enforcement N/A
// - Confirm whitespace and punctuation N/A
// - Confirm if each argument must be the same length (strings and arrays) N/A
// - Confirm upper and lower bound limits of integers and floating points CHECK WITH INTERVIEWER
// 3. What are the outputs that should come from the solution to the problem? AN ARRAY OF NUMBERS SORTED IN ASCENDING ORDER
// 4. Can the outputs be determined from the inputs? YES
// 5. Any time or space constraints with the solution? IT"S GOING TO BE UGLY O(n^2)
// 6. How should I label the important pieces of data that are part of the problem?
// min: holds the minimum number, i: is the index of the outer loop, j: is the index of the inner loop

/**
 * Algorithm
 */

function selectionSort(arr) {
	// Edge case check empty array
	if (arr.length < 1) {
    return null;
  }
  // Edge case check array with 1 number
  else if (arr.length === 1) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (i !== min) {
      console.log(i, min)
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr
}

console.log(selectionSort([0, 2, 34,22,10,19,17]))
