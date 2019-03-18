'use strict';

const Node = require('../node');
const Stack = require('../stack');
const Queue = require('../queue');


describe('#stack', () => {
  const testStack = new Stack();
  testList.push(1);
  testList.push(2);
  
  
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
      expect(testStack.pop().pop().peek()).toBe('Stack is empty.');
  });

});

