class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        this.items[this.tail] = item
        this.tail++
    }

    dequeue() {
        if (this.items.length === 0) return null
        const item = this.items[this.head];
        delete this.items[this.head++]
        return item
    }

    peek() {
        return this.items[this.head]
    }

    getLength() {
        return this.tail - this.head
    }
}

function bfs(graph, start, visited) {
    queue = new Queue();
    queue.enqueue(start)

    visited[start] = true;

    while (queue.getLength() != 0) {
        v = queue.dequeue()
        console.log(v)
        for (i of graph[v]) {
            if (!visited[i]) {
                queue.enqueue(i)
                visited[i] = true
            }
        }
    }
}

const graph = [
    [],
    [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]
]

const visited = new Array(graph.length).fill(false);

bfs(graph, 1, visited)