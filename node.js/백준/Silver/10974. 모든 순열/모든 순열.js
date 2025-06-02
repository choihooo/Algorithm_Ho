const fs = require('fs');
const path = require('path');

let input

if (process.platform === 'linux') {
    input = fs.readFileSync('/dev/stdin').toString();
} else {
    input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();
}

const lines = Number(input.trim())
const arr = []
for (let i = 1; i <= lines; i++) { arr.push(i) }
let visited = new Array(lines).fill(false)
// console.log(lines)

let selected = [];

let answer = "";

function dfs(arr, depth) {
    if (depth === lines) {
        let result = [];
        for (let i of selected) { result.push(arr[i]); }
        for (let x of result) { answer += x + " " }
        answer += "\n"
        return
    }

    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue

        selected.push(i)
        visited[i] = true
        dfs(arr, depth + 1)

        selected.pop()
        visited[i] = false
    }
}

dfs(arr, 0)
console.log(answer)