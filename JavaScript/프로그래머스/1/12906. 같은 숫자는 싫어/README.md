# 스택 사용하지 않는 방법
```js
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
```
1. arr.filter()는 배열을 순회하면서 조건에 맞는 값만 걸러서 새로운 배열로 반환
2. 콜백 함수 (val, index) => val != arr[index + 1]은 현재 값 val과 그 다음 값 arr[index + 1]을 비교해서 다를 경우만 남긴다.
