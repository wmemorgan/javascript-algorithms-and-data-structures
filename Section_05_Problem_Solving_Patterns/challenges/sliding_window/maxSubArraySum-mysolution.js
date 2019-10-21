// 1. Can I restate the problem in my own words?
// 2. What are the input that go into the problem?
// - Confirm required data types (string, integers, floats, arrays, objects) ARRAYS of INTEGERS
// - Can negative numbers be included? YES
// - Confirm upper/lowercase enforcement N/A
// - Confirm whitespace and punctuation N/A
// - Confirm if each argument must be the same length (strings and arrays) ARRAY LENGTH >= number
// - Confirm upper and lower bound limits of integers and floating points
// 3. What are the outputs that should come from the solution to the problem? INTEGER
// 4. Can the outputs be determined from the inputs? YES
// 4a. Any time or space constraints? TIME - O(n) SPACE - O(1)
// 5. How should I label the important pieces of data that are part of the problem? subArr, sum,

/**
 * Algorithm
 */
// Edge case check if array length is < number return NULL
// Declare a variable for max sum and assign 0
// Calculate sum for first n consecutive numbers in the array
// Iterate through array starting at n index
// calculate temp sum by subtracting first element of sum and adding current element
// compare temp sum with max sum and assign the higher amount to max sum
// return max sum

function maxSubarraySum(arr, num) {
	if (arr.length < num) {
		return null;
	}

	let maxSum = 0;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

  let tempSum = maxSum
  
	for (let i = num; i < arr.length; i++) {
	  tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = maxSum > tempSum ? maxSum : tempSum;
	}

	return maxSum;
}
