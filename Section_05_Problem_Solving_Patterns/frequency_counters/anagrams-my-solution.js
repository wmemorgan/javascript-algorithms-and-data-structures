function validAnagram(string1, string2) {
  // Edge Case Check - compare length of arguments return false EOfn
  if (string1.length !== string2.length) {
    return false;
  }
  // Create 2 empty objects to store characters of each string
  let charStore1 = {}
  

  // Iterate through strings and store characters in object
  for (let char of string1) {
    charStore1[char] = 
    console.log("charStore1: ", charStore1)
    charStore2[char] = (charStore2[char] || 1) + 1
    console.log("charStore2: ", charStore2)
  }

  // Iterate through first object and compare key/value pairs in objects
  // If key/value pair cannot be found in 2nd object return false EOfn
  for (let banana of Object.entries(charStore1)) {
    console.log("banana: ", banana)
  }
}

console.log(validAnagram('anagram', 'nagaram'))