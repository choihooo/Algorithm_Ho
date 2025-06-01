// minHeap으로 구현
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // 요소 추가
  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this._bubbleUp();
  }

  // 가장 우선순위 높은 요소 제거
  dequeue() {
    if (this.isEmpty()) return null;
    this._swap(0, this.heap.length - 1);
    const removed = this.heap.pop();
    this._bubbleDown();
    return removed;
  }

  // 현재 우선순위가 가장 높은 요소 보기
  peek() {
    return this.heap[0] ?? null;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (element.priority >= parent.priority) break;
      this._swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let smallest = idx;

      if (
        leftIdx < length &&
        this.heap[leftIdx].priority < this.heap[smallest].priority
      ) {
        smallest = leftIdx;
      }

      if (
        rightIdx < length &&
        this.heap[rightIdx].priority < this.heap[smallest].priority
      ) {
        smallest = rightIdx;
      }

      if (smallest === idx) break;

      this._swap(idx, smallest);
      idx = smallest;
    }
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
