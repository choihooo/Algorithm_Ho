const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

const dp = Array(input + 1).fill(0);

for (let i = 1; i <= input; i++) {
    dp[i] = i;
    for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}

console.log(dp[input]);
