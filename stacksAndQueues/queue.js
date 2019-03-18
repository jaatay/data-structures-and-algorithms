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
    Enqueue(value){

        const newNode = new Node(value);
        
        let current = this.front;
        newNode.next = current;
        this.front = newNode;
       

        console.log(`Successfully enqueued ${current.value}.`);
    }

    /**
     * removes a node from the end of the queue
     */
    Dequeue(){

       let current = this.front;

       while(current.next.next){
           current = current.next;
       }
       
       console.log(`Current front of Queue: ${current.next.value}`);

       current.next = null;

       console.log(`New front of Queue: ${current.value}`);

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

            console.log(`Peeked ${current.next.value}`);

        } 
        catch(err){
            return console.log('Stack is empty.');
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

        console.log(`${current.value} ==> NULL`);

       
    }
//end queue class
}

module.exports = Queue;