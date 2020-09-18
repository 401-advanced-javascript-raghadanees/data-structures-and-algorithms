# Stacks and Queues

## Challenge

Implementation of a Stack and a Queue with linked lists.

## Approach & Efficiency


### Stack

- push instantiates a new instance of Node and reassigns top and next pointers in place for that node. 
- pop checks whether top and top.next are defined and replaces the top with the next value, else null. It returns null if there is no top. 
- peek returns the data of top if it exists. 
- isEmpty to check the satck if empty return true depend on the length

### Queue

- enqueue instantiates a new instance of Node and reassigns appropriate back, next, and, if necessary, front pointers in place. 
- dequeue iterates through the instance of Queue until it reaches the node before the front node. It returns the value of that front node's data and reassigns the new front to the node behind it, updating other pointers as necessary. 
- peek returns the data of front if it exists. 
- isEmpty to check the queue if empty return true depend on the length



## solution
![Image](../../assets/stack&queue.jpg)