// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for (var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j + 1])
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    console.log("ONE PASS COMPLETE!")
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]))
//bubbleSort([8,1,2,3,4,5,6,7]);