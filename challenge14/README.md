
# Challenge 14

  

**[Challenge 14](https://adventjs.dev/challenges/14)**

  
  
  
  
  
  
  
  






We've lost a reindeer and Christmas is just over a week away! 😱

The worst thing is that there are so many that we don't know which one we're missing..... What a mess! Let's see, Elfon Musk has taken inventory and passes us an array with the ids of each reindeer.

👍 The good thing: the ids are numbers that can go from 0 to 100, they are not repeated and only one reindeer is missing.

👎 The bad: the list is out of order and could be missing the last one....

We need a function that when we pass it the list of reindeer ids tells us immediately which one is missing:

  
```
missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡the last one is missing!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡the last one is missing!)
```