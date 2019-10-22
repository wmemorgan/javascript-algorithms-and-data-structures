function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - 1) - i; j++) {
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    console.log("ONE PASS COMPLETE!")
  }
  return arr
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]))
//console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))