# Stacks and Queues
This challenge involved finding a given value, k, from the end of a linked list.

## Challenge
This challenge was to:
-Implement a stack and queue.

## Approach & Efficiency
My approach was to modify the function of a linked list, in order to achieve the stack and queue structures.

A stack operates on a Last In, First Out approach. As such, both the push, pop, and peek methods involved the top of a stack.

The time and space complexity is:
Time = O(1)
Space = O(1)

This is because, given a stack of n elements, all required operations of pushing, popping, and peeking, only deal with the top element of a stack.

A queue on the other hand, operates on a First In, First Out approach. That is, an element that is enqueued will also be dequeued and peeked, given n elements in a queue. This required a traversal method.

The time and space complexity for a queue is:
Time = O(n)
Space = O(1)

This is because in order to dequeue and peek, the time is subject to the length of the list. If there are 1000 elements, we will have to traverse all 1000 to dequeue and peek. However, all methods are an O(1) complexity given that only a single value is inserted, deleted, or returned at any given time.


## Solution

#### Acknowledgments
vladimirsan - starter code and documents
