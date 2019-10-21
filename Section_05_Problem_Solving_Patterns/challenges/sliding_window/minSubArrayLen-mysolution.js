// 1. Can I restate the problem in my own words?
  // Among in the numbers given find 1 or more consecutive numbers whose value or sum is greater than the provided number
// 2. What are the input that go into the problem?
  // - Confirm required data types (string, integers, floats, arrays, objects) ARRAYS of POSITVE INTEGERS and a POSITIVE INTEGER
  // - Can negative numbers be included? NO
  // - Confirm upper/lowercase enforcement N/A
  // - Confirm whitespace and punctuation N/A
  // - Confirm if each argument must be the same length (strings and arrays) ARRAY LENGTH > 0
  // - Confirm upper and lower bound limits of integers and floating points
// 3. What are the outputs that should come from the solution to the problem? INTEGER
// 4. Can the outputs be determined from the inputs? YES
// 4a. Any time or space constraints? TIME - O(n) SPACE - O(1)
// 5. How should I label the important pieces of data that are part of the problem? maxSum

/**
 * Algorithm
 */
// Edge case check if array length is less than 0 or if num <= 0 RETURN 0 (confirm with interviewer)
// Declare variables lenCount and runningTotal set to 0
// Iterate through array
  // Compare current element with target number
    // IF >= reset lenCount to 1 and return lenCount

  // Add current element to runningTotal
  // Increment lenCount
  // Compare runningTotal with target number
    // IF >= increment return lenCount

// return 0

function minSubArrayLen(arr, targetNum) {
  if (arr.length < 1 && num <= 0) {
    return 0
  }

  let lenCount = 0
  let runningTotal = 0

  for (let num of arr) {
    if (num >= targetNum) {
      letCount = 1
      return letCount
    }

    runningTotal += num
    lenCount++

    if (runningTotal >= targetNum) {
      return lenCount
    }
  }

  return 0
}