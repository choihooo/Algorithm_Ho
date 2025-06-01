let arr = [5, 2, 9, 1, 5, 6];
let sorted = new Array(100000);
mergeSort(arr, 0, arr.length - 1);

function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = right;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      sorted[k++] = arr[i++];
    } else {
      sorted[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    sorted[k++] = arr[i++];
  }
  while (k <= right) {
    sorted[k++] = arr[j++];
  }

  for (let l = left; l < right; l++) {
    arr[l] = sorted[l];
  }
}
