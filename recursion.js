/** product: calculate the product of an array of numbers. */

function product(nums, idx= 0) {
  if (nums.length === idx) return 1;
  return nums[idx] * product(nums, idx + 1);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, len = 0) {
  if (idx === words.length) return len;

  len = Math.max(len, words[idx].length);
  return longest(words,idx +1 ,len)

}

/** everyOther: return a string with every other letter. */

function everyOther(str,idx=0, charSkip = '') {
  if (idx >= str.length) return charSkip;
  charSkip += str[idx];
  return everyOther(str,idx+2,charSkip)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str,idx=0) {
  let left = idx;
  let right = str.length - idx - 1;
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
  if (str.length === newStr.length) return newStr;
  newStr = newStr + str[str.length -  1 - idx];
  return revString(str, idx + 1, newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let allStrings = [];
  for (let keys in obj) {
    if (typeof obj[keys] === 'string') allStrings.push(obj[keys]);
    if (typeof obj[keys] === 'object') allStrings.push(...gatherStrings(obj[keys]));
  }
  return allStrings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val,  middle + 1,right,);
  

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
