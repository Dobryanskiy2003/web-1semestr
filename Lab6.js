let queue = [];
let count = 0;

function enqueue() {
    let queueElement = document.createElement('div');
    queueElement.textContent = ++count;
    queueElement.className = 'queue-box';
    document.querySelector('.queue').appendChild(queueElement);
    queue.push(queueElement);
}

function dequeue() {
    if (queue.length > 0) {
        let queueElement = queue.shift();
        document.querySelector('.queue').removeChild(queueElement);
    }
}
