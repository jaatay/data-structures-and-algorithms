'use strict'

const Node = require('./node');
const List = require('./linkedList');

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

const list1 = new List();

//new instances of nodes and list
console.log(node1.value, node2.value, node3.value);
console.log(list1);

//adding nodes to list
list1.insertAtHead(5);
console.log(list1);

list1.insertAfter(5, 1);
console.log(list1);

list1.insertAfter(5, 3);
console.log(list1);

list1.insertBefore(3, 2);
console.log(list1);

let storedArray = list1.printList();
console.log(storedArray);
