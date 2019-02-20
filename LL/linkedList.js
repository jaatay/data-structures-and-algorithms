'use strict'


//import node class
const Node = require('./node');


//linked list constructor
class LinkedList{
    constructor(){
        this.head = null;
    }

//method to insert node at head
insertAtHead(value){
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
}

//method to insert node at end
insertAtTail(value){
    const newNode = new Node(value);

    if(!this.head){
        this.head = newNode;
        return;
    }

    let current = this.head;

    while(current.next){
        current = current.next;
    }

    current.next = newNode;
}

//method to find node
find(value){
    if(!this.head){
        throw new Error('The list is empty');
    }

    if(this.head.value === value){
        return this.head;
    }

    let current = this.head;
    while(current.next){
        if(current.next.value === value){
            return current.next;
        }

        current = current.next;
    }

    throw new Error('Value could not be found.');
}

//method to insert node before value
insertBefore(value, newValue){
    if(!this.head){
        throw new Error('The list is empty');
    }

    if(this.head.value === value){
        newValue.next = this.head;
        this.head = newValue;
    }

    let current = this.head;

    while(current.next){
        if(current.next.value === value){
            newValue.next = current.next;
            current.next = newValue;
        }

        current = current.next;
    }

    throw new Error('Value not found');
}

//method to insert after value
insertAfter(value, newValue){
    if(!this.head){
        throw new Error('The list is empty');
    }

    if(this.head.value === value){
        newValue.next = this.head.next;
        this.head.next = newValue;
    }

    let current = this.head;

    while(current.next){
        if(current.next.value === value){
            newValue.next = current.next.next;
            current.next.next = newValue;
        }

        current = current.next;
    }

    throw new Error('Value not found');
}

//method to print current list
printList(){
    if(!this.head){
        throw new Error('No list exists');
    }

    if(this.head.next = null){
        console.log(this.head.value);
    }

    let current = this.head;

    while(current.next){
        console.log(current.value);
        current = current.next;
    }

}
//constructor end
}