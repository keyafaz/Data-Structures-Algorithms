// time complexity: O(n log(n))
const mergeSort = (arr) => {
  if (arr.length < 2) return arr

  const mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}


const merge = (left, right) => {
  const result = []

  while (left.length || right.length) {
    if (!right.length || (left.length && left[0] < right[0])) result.push(left.shift())
    else result.push(right.shift())
  }

  return result
}
