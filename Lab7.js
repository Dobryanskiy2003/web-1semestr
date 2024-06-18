let stack = [];
let count = 0;

function push() {
    let stackElement = document.createElement('div');
    stackElement.textContent = ++count;
    stackElement.className = 'stack-box';
    document.querySelector('.stack').appendChild(stackElement);
    stack.push(stackElement);
}

function pop() {
    if (stack.length > 0) {
        let stackElement = stack.pop();
        document.querySelector('.stack').removeChild(stackElement);
    }
}
