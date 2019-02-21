'use strict';

const node = require('../node');
const list = require('../linkedList');

describe('#node.js', () => {
  //test node
  let testNode = new node(4);

  test('test node exists', () => {
    expect(testNode).toBeTruthy();
  });

  test('test node has a value', () => {
    expect(testNode.value).toBe(4);
  });

});
describe('#linkedList.js', () => {
  //test list
  let testList = new list();

  test('test list exists', () => {
    expect(testList).toBeTruthy();
  });

  //insert a node
  testList.insertAtHead(3);
  test('can add node', () => {
    expect(testList.head.value).toBe(3);
  });

  //insert node at end
  testList.insertAtTail(1);
  test('can add to end of list', () => {
    expect(testList.head.next.next.value).toBe(1);
  });

  //insert a node before given value
  testList.insertBefore(1, 2);
  test('can insert before', () => {
    expect(testList.head.next.value).toBe(2);
  });

  //insert a node after given value
  testList.insertAfter(1, 4);
  test('can insert after', () => {
    expect(testList.head.next.next.next.value).toBe(4);
  });

  //insert multiple nodes at end
  testList.insertAtTail(6);
  testList.insertAtTail(7);
  test('can insert multiple nodes', () => {
    expect(testList.findLength()).toBe(6);
  });
});