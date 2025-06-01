class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this._bubbleUp();
  }

  dequeue() {
    if (this.isEmpty) return null;
    this._swap(0, this.heap.length - 1);
    const removed = this.heap.pop();
    this._bubbleDown();
    return removed;
  }

  isEmpty() {
    return this.heap[0] ?? null;
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
    let idx = this.size - 1;
    const length = this.size;

    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let largest = idx;

      if (
        rightIdx < length &&
        this.heap[rightIdx].priority > this.heap[largest].priority
      ) {
        largest = rightIdx;
      }

      if (
        leftIdx < length &&
        this.heap[leftIdx].priority > this.heap[largest].priority
      ) {
        largest = leftIdx;
      }

      if (largest === 0) break;

      this._swap(idx, largest);
      idx = largest;
    }
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
