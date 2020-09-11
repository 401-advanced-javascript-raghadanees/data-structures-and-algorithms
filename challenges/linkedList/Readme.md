# Singly Linked List
*a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.*

## Challenge
Creating Singly Linked List in javascript and implement insertion, checking value if exist and representing linked list values as string.

## Approach & Efficiency
- Create a Node class has properties (value & pointer of next Node).

- Create LinkedList class, include a head property. 

- Create a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

- Create a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value or not .
- Create a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"
## API

- Create a new linked list

`const linkedList = new LinkedList();`

- adding a value to linked list

`linkedList.insert(value);`

- check if specific value exist
`linkedList.include(value); `

- represent all linked list value as string

`linkedList.toString(); value } -> { value } -> { value } -> NULL"`