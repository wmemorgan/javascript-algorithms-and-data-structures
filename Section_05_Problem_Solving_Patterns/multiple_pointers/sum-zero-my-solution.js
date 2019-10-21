function sumZero(arr) {
  let start = 0
  let end = arr.length - 1
  const complimentNum = new Set()

  while (start < end) {
    complimentNum.add(0 - arr[start])
    console.log("complimentNum: ", complimentNum)
    if (complimentNum.has(arr[end])) {
      console.log("complimentNum length: ", complimentNum.size)
      return [arr[start], arr[end]]
		} else {
      start++
      console.log("start moves to: ", start)
      end--
      console.log("end moves to: ", end)
    }
  }
  console.log("complimentNum length: ", complimentNum.length)
  return undefined

} 

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
//console.log(sumZero([-2, 0, 1, 3])) // undefined
// console.log(sumZero([1, 2, 3])) // undefined