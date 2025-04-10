# 최초 풀이
```js
function solution(nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return map.size;
}
```
## 문제
문제를 잘 이해하지 못하고 map의 size를 이용해서 풀려고 한게 문제였던것 같다.

# 답
```js
function solution(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1); // num 종류의 폰켓몬 개수를 카운트
  }

  const maxPick = nums.length / 2; // 고를 수 있는 최대 마리수 N/2
  const uniqueCount = map.size; // 폰켓몬 종류 수

  return Math.min(maxPick, uniqueCount); // 종류 수의 최댓값: 고를 수 있는 마리 수 VS 존재하는 종류 수 중 작은 값
}
```


# 다른 풀이
```js
function solution(nums) {
  const maxPick = nums.length / 2;
  const uniqueCount = new Set(nums).size;
  return Math.min(maxPick, uniqueCount);
}
```
### 핵심 아이디어
전체 폰켓몬 수 = N = nums.length

고를 수 있는 마리 수 = N / 2

존재하는 폰켓몬의 종류 수 = new Set(nums).size

