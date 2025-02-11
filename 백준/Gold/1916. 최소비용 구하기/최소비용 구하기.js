const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const graph = Array.from({ length: N + 1 }, () => new Map());

for (let i = 0; i < M; i++) {
    const [from, to, cost] = input[i + 2].split(' ').map(Number);
    if (graph[from].has(to)) {
        graph[from].set(to, Math.min(graph[from].get(to), cost));
    } else {
        graph[from].set(to, cost);
    }
}

const [start, end] = input[M + 2].split(' ').map(Number);

function dijkstra(start, end) {
    const costs = Array(N + 1).fill(Infinity);
    const priorityQueue = [{ node: start, cost: 0 }];
    costs[start] = 0;

    while (priorityQueue.length) {
        priorityQueue.sort((a, b) => a.cost - b.cost);
        const { node, cost } = priorityQueue.shift();
        
        if (cost > costs[node]) continue;

        for (const [to, nextCost] of graph[node]) {
            const totalCost = cost + nextCost;
            if (totalCost < costs[to]) {
                costs[to] = totalCost;
                priorityQueue.push({ node: to, cost: totalCost });
            }
        }
    }

    return costs[end];
}

console.log(dijkstra(start, end));
