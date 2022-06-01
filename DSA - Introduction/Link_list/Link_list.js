//


class Node {
    constructor(value) {
        this.value = value
        this.next = null                
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addValue(value){
        var newNode = new Node(value)
        var latest
        if(this.head == null){
            this.head = newNode
        }
        else{
            latest = this.head  //2nd node onwards
            //Iteration
            while(latest.next){
                latest = latest.next
            }
            latest.next = newNode
        }
        this.size +=1
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
}

let myList = new LinkedList();
myList.addValue(5);
myList.addValue(10);
console.log("lastNode: ", myList.getLast());
console.log(myList.size)

