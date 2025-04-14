class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value) {
        this.heap.push(value);
        this._bubbleUp();
        return this;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const top = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._siftDown(0);
        }

        return top;
    }

    _bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element >= parent) break;

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    _siftDown(index) {
        let smallest = index;
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;

            if (leftChildIdx < length && this.heap[leftChildIdx] < this.heap[smallest]) {
                smallest = leftChildIdx;
            }

            if (rightChildIdx < length && this.heap[rightChildIdx] < this.heap[smallest]) {
                smallest = rightChildIdx;
            }

            if (smallest === index) break;

            this.heap[index] = this.heap[smallest];
            this.heap[smallest] = element;
            index = smallest;
        }
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    let answer = 0;
    const pq = new PriorityQueue();

    for (let s of scoville) {
        pq.enqueue(s)
    }

    while (pq.size() >= 2 && !(pq.peek() >= K)) {
        pq.enqueue(pq.dequeue() + (pq.dequeue() * 2))
        answer++;
    }
    
     if (pq.peek() < K) {
        return -1;
    }
    
    return answer;
}