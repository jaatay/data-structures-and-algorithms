'use strict';

const LinkedList = require('../linkedList');
const Node = require('../node');

describe('#linkedList', () => {
  const testList = new LinkedList();
  testList.insertAtHead(1);
  testList.insertAtHead(2);
  testList.insertAtHead(3);
  testList.insertAtHead(4);
  testList.insertAtHead(5);
  
  test('cannot find k less than zero', () =>{
    expect(testList.findKfromEnd(-1)).toBe('Not found: value K must be equal or greater than zero');
  });

  test('can find value at end of list', () => {
    expect(testList.findKfromEnd(0)).toBe(1);
  });

  test('can find value k', () => {
    expect(testList.findKfromEnd(3)).toBe(4);
  });

  test('cannot find k greater than list length', () => {
    expect(testList.findKfromEnd(7)).toBe('Not found: value K out of range');
  });

});