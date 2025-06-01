function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      } else {
        break;
      }
    }
  }
}
