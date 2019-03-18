'use strict';

/**
 * import node class
 */
const Node = require('./node');


class Stack {

    constructor(){
        this.top = null;
    }

    /**
     * pushes new node with given value to top of stack
     * @param {*} value 
     */
    push(value){

        const newNode = new Node(value);
        
        newNode.next = this.top;
        this.top = newNode;
        let current = this.top;

        return console.log(`Successfully pushed ${current.value} to top of stack.`);
    }

    /**
     * pops node from top of stack
     */
    pop(){

       let current = this.top;
       this.top = current.next;

       return console.log(`Successfully popped ${current}, new top is ${this.top.value}`);
    }

    /**
     * peeks node at top of stack, returns error if stack is empty
     */
    peek(){

        try{
            return this.top.value;
        } 
        catch(err){
            return console.log('Stack is empty.');
        }
    }

    printStack(){
        let current = this.top;

        while(current.next){
            console.log(current.value);
            current = current.next;
        }

        return console.log(`${current.value} ==> NULL`);

       
    }
//end stack class
}

module.exports = Stack;