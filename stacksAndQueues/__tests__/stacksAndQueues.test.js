'use strict';

const Node = require('../node');
const Stack = require('../stack');
const Queue = require('../queue');


describe('#stack', () => {
  const testStack = new Stack();
  testStack.push(1);
  testStack.push(2);
  
  
  test('can push onto stack', () =>{
    expect(testStack.push(3)).toBe(`Successfully pushed 3 to top of stack.`);
  });

  test('can pop from stack', () => {
      expect(testStack.pop()).toBe(`Successfully popped 3, new top is 2`);
  });

  test('can peek', () => {
      expect(testStack.peek()).toBe(2);
  });


  test('empty stack', () => {
    //empty test stack
    testStack.pop();
    testStack.pop();
      expect(testStack.peek()).toBe('Stack is empty.');
  });

});

describe('#Queue', () => {
    const testQ = new Queue();
    testQ.enqueue(1);
    testQ.enqueue(2);
    
    
    test('can enqueue', () =>{
      expect(testQ.enqueue(3)).toBe(`Successfully enqueued 3.`);
    });
  
    test('can dequeue', () => {
        expect(testQ.dequeue()).toBe(`New front of Queue: 2`);
    });
  
    test('can peek', () => {
        expect(testQ.peek()).toBe(`Peeked 2`);
    });
  
  
    test('empty queue', () => {
      //empty test queue
      testQ.dequeue();
      testQ.dequeue();
        expect(testQ.peek()).toBe('Stack is empty.');
    });
  
  });
