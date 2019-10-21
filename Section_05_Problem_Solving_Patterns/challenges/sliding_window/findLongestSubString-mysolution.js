// 1. Can I restate the problem in my own words?
  // Accepts a string and finds the longest substring length that contains all unique characters
// 2. What are the input that go into the problem?
    // - Confirm required data types (string, integers, floats, arrays, objects) STRING
		// - Can negative numbers be included? N/A
    // - Confirm upper/lowercase enforcement CHECK WITH INTERVIEWER
    // - Confirm whitespace and punctuation CHECK WITH INTERVIEWER
    // - Confirm if each argument must be the same length (strings and arrays) N/A
    // - Confirm upper and lower bound limits of integers and floating points N/A
// 3. What are the outputs that should come from the solution to the problem? INTEGER (substring length)
// 4. Can the outputs be determined from the inputs? YES
// 5. Any time or space constraints with the solution? TIME - O(n)
// 6. How should I label the important pieces of data that are part of the problem?
// variable strLength type integer, set uniqueChar

/**
 * Algorithm
 */
// Edge case check for empty string
// Declare integer variables maxLength = 0, strLength = maxLength
// Declare new set uniqueChar
// Iterate through string
  //If char is NOT in set
    // Add char to set
    // Increment strLength

  // Compare strLength to maxLength
    // Assign the large amoun to maxLength

  // return maxLength

function findLongestSubstring(str) {
  if (str.length < 1) {
    return 0
  }

  let maxLength = 0
  let strLength = maxLength
  let uniqueChar = new Set()

  for (let char of str) {
    if (uniqueChar.has(char)) {
      maxLength = Math.max(maxLength, strLength)
      uniqueChar.clear()
      strLength = 0;
    } else {
      uniqueChar.add(char)
      strLength++
    }
   
  }

  return maxLength;
}

