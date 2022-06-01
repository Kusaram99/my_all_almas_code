// Reale life use of quese as booking machanisiom as booking movies show

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value); // creates the node using class Node

        if (this.head) { // if the first Node exitsts
            this.tail.next = node; // inserts the created node after the tail of our Queue
            this.tail = node; // now the created node is the last node
        } else { // if there are no nodes in the Queue
            this.head = node; // the created node is a head 
            console.log("head: ", this.head.next.value)
            this.tail = node // also the created node is a tail in Queue because it is single.
        }

        this.length++; // increases the length of Queue by 1
    }

    dequeue() {
        const current = this.head; // saves the link to the head which we need to remove
        this.head = this.head.next; // moves the head link to the second Node in the Queue
        this.length--; // decreaments the length of our Queue

        return current.value; // returns the removed Node's value
    }

    print() {
        let current = this.head; // saves a link to the head of the queue

        while (current) { // goes through each Node of the Queue
            console.log(current.value); // prints the value of the Node in console
            current = current.next; // moves link to the next node after head
            console.log("while current: ", current);
        }
    }

}

let queue = new Queue();

queue.enqueue(1)
queue.enqueue(12)
queue.enqueue(13)
console.log(queue.head);
console.log(queue.tail);

// console.log('\n');

// queue.enqueue(2)
// console.log(queue.head);
// console.log(queue.tail);
// console.log('\n');

// console.log(queue);

// console.log('\n');

// console.log(queue.dequeue());
// queue.print();

