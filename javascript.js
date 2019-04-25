function count(arr, data) {
    let count = 0;
    let position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (let i = position - 1; i > 0; --i) {
            if (arr[i] === data) {
                ++count;
            } else {
                break;
            }
        }

        for (let i = position + 1; i < arr.length; ++i) {
            if (arr[i] === data) {
                ++count;
            } else {
                break;
            }
        }
    } //end if
    return count;
}

function binSearch(arr, data) {
    let upperBoard = arr.length - 1;
    let lowerBoard = 0;
    while (lowerBoard <= upperBoard) {
        let mid = Math.floor((lowerBoard + upperBoard) / 2);
        if (arr[mid] < data) {
            lowerBoard = mid + 1;
        } else if (arr[mid] > data) {
            upperBoard = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function insertionSort(arr) {
    arr.sort(function(a, b){return a-b});
}

function displayArr(arr) {
    let count = 10;
    for (let i = 0; i < arr.length; i++) {
        if (i === count) {
            document.write("<br>");
            count = count + 10;
        }
        document.write(arr[i] + " ");
    }
}

let nums = [];
for (let i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}

insertionSort(nums);
displayArr(nums);
document.write("</br>");
let val = parseInt(prompt("Enter a value to count: "));
let retVal = count(nums, val);
document.write("Found " + retVal + " occurrences of " + val + ".");