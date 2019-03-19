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

        return `Successfully pushed ${current.value} to top of stack.`;
    }

    /**
     * pops node from top of stack
     */
    pop(){

        if(!this.top){
            return 'Stack is empty.';
        }

       let current = this.top;

       if(current.next === null){
           this.top = null;
           return 'Stack is empty.';
       }

       this.top = current.next;

       return `Successfully popped ${current.value}, new top is ${this.top.value}`;
    }

    /**
     * peeks node at top of stack, returns error if stack is empty
     */
    peek(){

        if(!this.top){
            return 'Stack is empty.';

        }
        try{
            return this.top.value;
        } 
        catch(err){
            return 'Stack is empty.';
        }
    }

    printStack(){
        let current = this.top;

        while(current.next){
            console.log(current.value);
            current = current.next;
        }

        return `${current.value} ==> NULL`;

       
    }
//end stack class
}

module.exports = Stack;