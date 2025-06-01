### 병합정렬 설명

```js
let arr = [5, 2, 9, 1, 5, 6];
let sorted = new Array(100000); // 병합 결과를 담을 임시 배열

mergeSort(arr, 0, arr.length - 1); // 배열 전체 범위 병합 정렬 실행
console.log(arr); // → [1, 2, 5, 5, 6, 9]

function mergeSort(arr, left, right) {
  // 예: mergeSort(arr, 0, 5) → mid = 2 → 정렬 범위를 반으로 나눈다
  if (left < right) {
    const mid = Math.floor((left + right) / 2); 
    mergeSort(arr, left, mid);     // 왼쪽 절반 정렬 → 예: mergeSort(arr, 0, 2)
    mergeSort(arr, mid + 1, right); // 오른쪽 절반 정렬 → 예: mergeSort(arr, 3, 5)
    merge(arr, left, mid, right);   // 두 절반 병합 → merge(arr, 0, 2, 5)
  }
}

function merge(arr, left, mid, right) {
  let i = left;      // 왼쪽 포인터 → 예: i = 0
  let j = mid + 1;   // 오른쪽 포인터 → 예: j = 3
  let k = left;      // 병합 결과 저장 인덱스 → 예: k = 0

  // 병합 시작
  while (i <= mid && j <= right) {
    // 예시: arr = [5, 2, 9, 1, 5, 6]
    // i → 5, j → 1 → 1이 작으므로 sorted[0] = 1
    if (arr[i] <= arr[j]) {
      sorted[k++] = arr[i++]; 
    } else {
      sorted[k++] = arr[j++]; 
    }
  }

  // 왼쪽 부분이 남은 경우 (예: i가 아직 mid 안 넘음)
  while (i <= mid) {
    sorted[k++] = arr[i++];
  }

  // 오른쪽 부분이 남은 경우 (예: j가 아직 right 안 넘음)
  while (j <= right) {
    sorted[k++] = arr[j++];
  }

  // sorted에 병합된 내용을 원래 arr에 복사
  for (let l = left; l <= right; l++) {
    arr[l] = sorted[l];
  }

  // 예: merge(arr, 0, 2, 5) 실행 시 → arr은 [1, 2, 5, 5, 6, 9]로 정렬됨
}

```