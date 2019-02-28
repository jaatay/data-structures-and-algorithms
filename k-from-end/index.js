'use strict';

const Node = require('./node');
const LinkedList = require('./linkedList');

const newList = new LinkedList();

newList.insertAtHead(1);
newList.insertAtHead(2);
newList.insertAtHead(3);
newList.insertAtHead(4);
newList.insertAtHead(5);

console.log(newList);

newList.printList();

console.log('----------------------------');

console.log(newList.findKfromEnd(-1));
console.log(newList.findKfromEnd(0));
console.log(newList.findKfromEnd(1));
console.log(newList.findKfromEnd(2));
console.log(newList.findKfromEnd(6));