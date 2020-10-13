## Challenge Summary
- Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

- Insertion sort works similarly as we sort cards in our hand in a card game.

- We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put at their right place.

*A similar approach is used by insertion sort.*


## Pseudocode
InsertionSort(int[] arr)
    FOR i = 1 to arr.length
      int j <-- i - 1
      int temp <-- arr[i]
      WHILE j >= 0 AND temp < arr[j]
          arr[j + 1] <-- arr[j]
           j <-- j - 1
      arr[j + 1] <-- temp

### Trace
Sample Array: [8,4,23,42,16,15]




Initial Array :   [ 8 , 4 , 23 , 42 , 16 , 15]


## Efficency

###	Time: O(n^2)

•	The basic operation of this algorithm is comparison. This will happen 

n * (n-1)/2 number of times…concluding the algorithm to be n squared.

### Space: O(1)

•	No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).

![Image](/assets/sort26.png)