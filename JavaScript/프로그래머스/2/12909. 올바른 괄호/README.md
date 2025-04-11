# 다른 풀이
```js
function solution(s) {
    let cum = 0
    for (let paren of s) {
        cum += paren === '(' ? 1 : -1
        if (cum < 0) {
            return false
        }
    }
    return cum === 0 ? true : false;
}
```
cum은 여는 괄호의 개수에서 닫는 괄호 개수를 뺀 누적값.
문자열을 왼쪽부터 한 글자씩 보면서:

- '('이면 cum += 1
- ')'이면 cum -= 1

만약 cum이 중간에 0보다 작아지면, 닫는 괄호가 먼저 나온 거니까 잘못된 괄호 → 바로 false 리턴.

끝까지 돌았을 때:

- cum === 0이면 괄호 짝이 딱 맞으므로 true
- cum !== 0이면 괄호가 남거나 부족한 거라 false

