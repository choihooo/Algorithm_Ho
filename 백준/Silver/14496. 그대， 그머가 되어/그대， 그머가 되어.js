/** 백준 14496: 그대, 그머가 되어 (다익스트라/실버2)
 *
 * 문제: 주어진 문자 A를 문자 B로 바꾸기 위한 최소 치환 횟수 구하기
 * 
 * 입력:
 * 첫 번째 줄에 변환을 시작할 문자 A와 최종 문자 B
 * 두 번째 줄에 전체 문자의 수 N과 치환 가능한 문자쌍의 수 M
 * 이후 M개의 줄에 걸쳐 치환 가능한 문자쌍이 주어짐
 * 
 * 출력:
 * 문자 A를 B로 바꾸는 최소 치환 횟수, 불가능하면 -1 출력
 *
 * 접근 방법:
 * 1. 그래프의 인접 리스트를 생성하여 각 문자간 치환 가능 정보를 저장
 * 2. 다익스트라 알고리즘을 사용하여 최소 치환 횟수 계산
 * 3. 결과 출력
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const [N, M] = input[1].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
    const [from, to] = input[i + 2].split(' ').map(Number);
    graph[from].push([to, 1]); // 비용은 모두 1로 동일
    graph[to].push([from, 1]); // 양방향 그래프
}

function dijkstra(start, end) {
    const INF = Infinity;
    const dist = Array(N + 1).fill(INF);
    dist[start] = 0;
    const pq = [[0, start]]; // [cost, vertex]

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]); // 우선순위 큐를 배열로 구현
        const [cost, u] = pq.shift();

        if (dist[u] < cost) continue; // 이미 처리된 노드 스킵

        for (const [v, weight] of graph[u]) {
            const nextCost = cost + weight;
            if (dist[v] > nextCost) {
                dist[v] = nextCost;
                pq.push([nextCost, v]);
            }
        }
    }

    return dist[end] === INF ? -1 : dist[end];
}

console.log(dijkstra(A, B)); // 결과 출력
