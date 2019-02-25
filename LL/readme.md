# Linked List Insertions
Linked List insertions involve 2 methods extending the linked list class. Having both a traversal and find method, it was necessary to add additional methods for inserting new nodes. The insertion itself is an O(1) operation, with time and space being considered by how far a traversal must occur along the list before the insertion takes place.

## Challenge
This challenge was to:
-Add a node before a given node.
-Add a node after a given node.

## Approach & Efficiency
In both cases, the first step was to find the given node, then perform the insertion. For the insert after method, once a reference to the desired value was found, the reference value's 'next' property was set to the new node, and the new node to the next.next. 

For the insert before, once the reference was found, the new node was set to the reference, and the current's next set to the new node. 

The time and space complexity is:
Time = O(N)
Space = O(N)

This is because, while the insertion itself is an O(1), the complexity is ultimately determined by the length of the list. If the value given is the end of the list, the traversal would have to go the full N length of the list before performing the insertion. Likewise, the greater the size of the list, the more memory allocated.


## Solution
[LL Insertions](../assets/LLInsert.jpg)

#### Acknowledgments
vladimirsan - starter code
xochiil - whiteboard partner