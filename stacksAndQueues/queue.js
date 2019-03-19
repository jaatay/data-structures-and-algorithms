'use strict';

/**
 * import node class
 */
const Node = require('./node');


class Queue {

    constructor(){
        this.front = null;
    }

    /**
     * Enters a new node into the queue
     * @param {*} value 
     */
    enqueue(value){

        const newNode = new Node(value);
        
        if(!this.front){
            this.front = newNode;
            let current = this.front;
            return `Successfully enqueued ${current.value}.`;
        }

        let current = this.front;
        newNode.next = current;
        this.front = newNode;
       

        return `Successfully enqueued ${this.front.value}.`;
    }

    /**
     * removes a node from the end of the queue
     */
    dequeue(){

        if(!this.front){
            return 'Queue is empty.'
        }

       let current = this.front;

       if(current.next === null){
           this.front = null;
           return 'Queue is empty.'
       }

       while(current.next.next){
           current = current.next;
       }

       current.next = null;

       return `New front of Queue: ${current.value}`;

    }

    /**
     * peeks node at front of stack, returns error if queue is empty
     */
    peek(){

        try{

            let current = this.front;

            while(current.next.next){
                current = current.next;
            }

            return `Peeked ${current.next.value}`;

        } 
        catch(err){
            return 'Stack is empty.';
        }
    }

    /**
     * prints stack to console
     */
    printQ(){

        let current = this.front;

        while(current.next){
            console.log(current.value);
            current = current.next;
        }

        return `${current.value} ==> NULL`;

       
    }
//end queue class
}

module.exports = Queue;