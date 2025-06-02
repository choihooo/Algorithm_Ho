// readline 모듈을 사용해 콘솔 입력을 받을 수 있도록 설정
const readline = require('readline');

(async () => {
    // readline 인터페이스 생성
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // 입력을 저장할 배열
    const input = [];

    // 한 줄씩 입력을 비동기로 받음
    for await (const line of rl) {
        input.push(line.trim()); // 공백 제거 후 배열에 저장

        // 첫 줄에 주어진 수 N개 + 첫 줄(N 자체)을 모두 받으면 입력 종료
        if (input.length === Number(input[0]) + 1) {
            rl.close();
        }
    }

    // N: 행렬의 크기
    const n = Number(input[0]);

    // 문자열 배열을 숫자 배열로 변환 (이차원 배열 map 생성)
    const map = input.slice(1).map(line => line.split(' ').map(Number));

    // 방문 여부를 체크할 배열 (처음엔 모두 false)
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    // 상, 하, 좌, 우 방향 벡터
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 영역의 크기를 담을 배열
    const sizes = [];

    // DFS 함수: 현재 좌표 (x, y)에서 연결된 1들을 탐색
    function dfs(x, y) {
        let count = 1; // 현재 칸도 1이므로 크기 1부터 시작
        visited[x][y] = true; // 현재 칸 방문 처리

        // 4방향으로 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 범위 안에 있고, 1이고, 아직 방문하지 않은 경우에만 탐색
            if (
                nx >= 0 && ny >= 0 && nx < n && ny < n &&
                map[nx][ny] === 1 && !visited[nx][ny]
            ) {
                count += dfs(nx, ny); // 연결된 곳의 개수 합산
            }
        }

        return count; // 해당 영역의 크기 반환
    }

    // 전체 map을 순회하며 DFS 시작점 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 아직 방문하지 않았고 값이 1이라면 새 영역 시작
            if (map[i][j] === 1 && !visited[i][j]) {
                const size = dfs(i, j); // DFS를 통해 크기 측정
                sizes.push(size); // 크기 배열에 추가
            }
        }
    }

    // 영역 크기를 오름차순으로 정렬
    sizes.sort((a, b) => a - b);

    // 영역의 개수 출력
    console.log(sizes.length);

    // 각 영역의 크기 출력
    sizes.forEach(size => console.log(size));
})();
