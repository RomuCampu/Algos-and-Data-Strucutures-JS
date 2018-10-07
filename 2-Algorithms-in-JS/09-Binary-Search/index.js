function binarySearch(numArray, key) {
    var midIdx = Math.floor(numArray.length / 2);
    var midElm = numArray[midIdx];

    if (midElm === key) return true;
    else if (midElm < key && numArray.length > 1) {
        return binarySearch(numArray.splice(midIdx, numArray.length), key);
    } else if (midElm > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, midIdx), key);
    } else return false;
};

// Logs false
binarySearch([5, 6, 7, 8, 9, 11, 14, 16, 21, 23, 33, 44, 55, 79, 81, 83], 56);

// Logs true
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

// Factorialize a num with recursion
/* function factorial(num) {
    if (num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
};
factorial(6); */