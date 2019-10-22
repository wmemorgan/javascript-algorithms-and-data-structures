// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
  // Create a pointer in the middle
  // If you find the value you want, return the index
  // If the value is too small, move the left pointer up
  // If the value is too large, move the right pointer down
// If you never find the value, return -1

function binarySearch(arr, val) {
  if (arr.length < 1) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < val) {
      left = middle + 1
    } else if (arr[middle] > val) {
      right = middle + 1
    } else {
      return middle;
    }
  }

  return -1;
}