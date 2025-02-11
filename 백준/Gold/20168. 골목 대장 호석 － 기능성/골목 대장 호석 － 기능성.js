const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M, A, B, C] = input[0].split(' ').map(Number);
const roads = input.slice(1, M + 1).map(line => line.split(' ').map(Number));

function canReach(start, end, maxCost, graph, N) {
    const visited = Array(N + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    
    while (queue.length) {
        const current = queue.shift();
        if (current === end) {
            return true;
        }
        graph[current].forEach(([neighbor, cost]) => {
            if (!visited[neighbor] && cost <= maxCost) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return false;
}

function solve(N, M, A, B, C, roads) {
    const graph = Array.from({ length: N + 1 }, () => []);
    roads.forEach(([u, v, cost]) => {
        graph[u].push([v, cost]);
        graph[v].push([u, cost]);
    });
    
    let left = 1, right = 1000, answer = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canReach(A, B, mid, graph, N)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return answer;
}

console.log(solve(N, M, A, B, C, roads));
