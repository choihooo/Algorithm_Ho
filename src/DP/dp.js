d = new Array(100).fill(0)

// 하향식
function fibo(x) {
    if (x == 1 || x == 2) {
        return 1;
    }

    if (d[x] != 0) {
        return d[x]
    }

    d[x] = fibo(x - 1) + fibo(x - 2)
    return d[x]
}

// 상향식
d[1] = 1
d[2] = 1
n = 99

for (let i = 3; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2]
}


/*
1. 종료 조건
2. 이미 계산한식인지 판별
3. 계산
*/