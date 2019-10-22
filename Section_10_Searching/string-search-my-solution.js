// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

/**
 * Alogorithm
 */

// Edge case check: empty strings, first string shorter than second string

function naiveSearch(longStr, shortStr) {
	// Edge case check: empty string
	if (longStr.length < 1 || shortStr.length < 1) return 0;
	// Edge case check: 1st argument shorter than 2nd argument
	if (longStr.length < shortStr.length) return 0;

	let count = 0;
	for (let i = 0; i < longStr.length; i++) {
		for (let j = 0; j < shortStr.length; j++) {
			console.log(longStr[i+j], shortStr[j])
			if (shortStr[j] !== longStr[i + j]) {
				console.log("BREAK!");
				break;
			}
			if (j === shortStr.length - 1) count++;
		}
	}
	return count;
}

console.log(naiveSearch("lorie loled", "lo"))
