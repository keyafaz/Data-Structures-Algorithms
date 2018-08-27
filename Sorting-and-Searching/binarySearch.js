/*
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad. You are given an API isBadVersion(version) which will return whether version is bad.

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
 */


const isBadVersion = (version) => version >= 4

/* Linear Scan -
  * Time complexity = O(n); assuming isBadVersion(version) takes constant time
  * Space complexity : O(1)O(1)
*/
const firstBadVersion = (versions) => {
  let version = 1
  while (!isBadVersion(version)) {
    version++
  }
  return version
}

/* Binary Search
  * Time complexity : O(\log n)O(logn)
  * Space complexity : O(1)O(1).
*/
const binarySearch = (versions) => {
  let lower = 1,
    upper = versions,
    mid

  while (lower < upper) {
    mid = lower + Math.floor(((upper - lower) / 2))
    if (!!isBadVersion(mid)) upper = mid
    if (!isBadVersion(mid)) lower = mid + 1
  }

  return lower
}


const recursiveBS = (n, lowerVal, upperVal) => {
  let lower = lowerVal || 1,
    upper = upperVal || n,
    mid = lower + Math.floor((upper - lower) / 2)

  if (lower === upper) return lower
  if (!isBadVersion(mid)) lower = mid + 1
  if (!!isBadVersion(mid)) upper = mid

  return recursiveBS(mid, lower, upper)
}


