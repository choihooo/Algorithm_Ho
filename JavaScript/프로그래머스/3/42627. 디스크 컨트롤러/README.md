# [level 3] 디스크 컨트롤러 - 42627 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42627?language=javascript) 

### 성능 요약

메모리: 36.5 MB, 시간: 8.64 ms

### 구분

코딩테스트 연습 > 힙（Heap）

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 15일 11:34:43

# 동작 흐름
1. 제일 먼저 도착하는 작업의 시간으로 currentTime 초기화
2. 현재 시간 이하에 도착한 작업들을 대기열에 넣기
3. 대기열에 작업이 있다면 SJF으로 처리, 처리후, 시간 업데이트, 누적시간도 업데이트
4. 대기열도 없고, 아직 작업이 남아있다면 currentTime을 다음 작업의 요청 시간으로 맞춰서 "시간을 점프"
5. totalTurnaroundTime/ 모든 작업 을 반환
