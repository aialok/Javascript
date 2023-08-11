import * as searchFunctions from './linearSearch.js';

const linearSearchResult = searchFunctions.linearSearch([1, 2, 3, 4, 5], 3);
const binarySearchResult = searchFunctions.binarySearch([1, 2, 3, 4, 5], 3);

console.log('Linear Search Result:', linearSearchResult);
console.log('Binary Search Result:', binarySearchResult);
console.log(searchFunctions)