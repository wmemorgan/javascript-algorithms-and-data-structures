// 1. Can I restate the problem in my own words?
  // Find the letters in the first string that are in the second string in the same order
// 2. What are the input that go into the problem?
// - Confirm required data types (string, integers, floats, arrays, objects) STRING
// NOTE: empty strings automatically return false
// - Can negative numbers be included? N/A
// - Confirm upper/lowercase enforcement YES
// - Confirm whitespace and punctuation YES
// - Confirm if each argument must be the same length (strings and arrays) DO NOT NEED TO BE SAME LENGTH
// - Confirm upper and lower bound limits of integers and floating points N/A
// 3. What are the outputs that should come from the solution to the problem? BOOLEAN
// 4. Can the outputs be determined from the inputs? YES
// 5. How should I label the important pieces of data that are part of the problem?
// starting point of range (start = 0)
// ending point of range (end = length of first string)

/**
 * Algorithm
 */

// Edge case check for empty strings
// Edge case check if first string is longer then second string
// Declare and assign 0 to i and j variables
// iterate through second string
// compare letter of first string with letter of second string
// IF they match return increment both
// ELSE
//increment j variable
// IF i is equal to length of first string
  // return TRUE
// Return FALSE if iteration completes

function isSubsequence(str1, str2) {
	if (str1.length < 1 || str2.length < 1) {
		return false;
  }

  if (str1.length > str2.length) {
    return false;
  }

  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++
    }

    if (i === str1.length) {
      return true;
    }
  }

	return false;
}
