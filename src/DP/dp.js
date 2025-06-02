d = new Array(100).fill(0)
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