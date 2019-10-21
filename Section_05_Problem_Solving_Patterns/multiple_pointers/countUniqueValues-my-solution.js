function countUniqueValues(arr) {
  const uniqueValues = new Set()

  for (let val of arr) {
    if (!uniqueValues.has(val)) {
      uniqueValues.add(val)
    }
  }

  return uniqueValues.size
} 	

//console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
 console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) )// 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4