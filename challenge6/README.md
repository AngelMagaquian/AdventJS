# Challenge 6

 **[Challenge 6](https://adventjs.dev/challenges/06)** 
 





Before we can enjoy Christmas... it's our turn to finish off our final exams. And it's time for a little math! 😱

A function is passed two parameters: an Array with numbers and the expected result.

The function must return the two values from the Array that add up to the expected result. Since there can sometimes be more than two values that add up, the first one starting from the left that finds another pair will be returned, no matter how far to the right.

If it is not found, `null` is returned.

Let's see some examples:
```
sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
```

The result has to be an array with two numbers.

Once you have the result... how could you make it as optimal as possible so that you don't have to run through the same situations twice 🤔?