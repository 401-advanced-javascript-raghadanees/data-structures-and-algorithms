# Merge Sort

 is a kind of Divide and Conquer algorithm in computer programming. It is one of the most popular sorting algorithms and a great way to develop confidence in building recursive algorithms.

 Divide and Conquer Strategy
Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.
Suppose we had to sort an array A. A subproblem would be to sort a sub-section of this array starting at index left:l and ending at index right:r, denoted as A[l..r].
Divide
If mid:m is the half-way point between l and r, then we can split the subarray A[l..r] into two arrays A[l..m] and A[m+1, r].
Conquer
In the conquer step, we try to sort both the subarrays A[l..m] and A[m+1, r]. If we haven't yet reached the base case, we again divide both these subarrays and try to sort them.
Combine
When the conquer step reaches the base step and we get two sorted subarrays A[l..m] and A[m+1, r] for array A[l..r], we combine the results by creating a sorted array A[l..r] from two sorted subarrays A[l..m] and A[m+1, r].

## Pseudocode
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid+1...n-1]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
// merge the sorted left and right sides together
      Merge(left, right, arr)
ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0
    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
        k <-- k + 1
    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

Trace
Sample Array: [8,4,23,42,16,15]


## Merge Sort Complexity
Time Complexity
 O(n*log n)

Space Complexity
The space complexity of merge sort is O(n).

![Image](/assets/ccSort.png)