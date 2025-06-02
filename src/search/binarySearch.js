// 재귀
function binarySearch(arr, target, start, end) {
    if (start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid - 1);
    }
}

// 반복
function binarySearchIterative(arr, target, start, end) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

function lowerBound(arr, target, start, end) {
    while (start < end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] >= target) end = mid
        else start = mid + 1
    }
    return end
}

function upperBound(arr, target, start, end) {
    while (start < end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] <= target) end = mid
        else start = mid + 1
    }
    return end
}

function countRange(arr, leftValue, rightValue) {
    const leftIndex = lowerBound(arr, leftValue, 0, arr.length)
    const rightIndex = upperBound(arr, rightValue, 0, arr.length)
    return rightIndex - leftIndex
}