
  

# Challenge 21

  

  

**[Challenge 21](https://adventjs.dev/challenges/21)**

  

  
  
  
  
  
  


The routes for Santa's sleigh are being prepared 🎅. We have warehouses all over the world so Santa can pick up the gifts and deliver them to the final destination. 🎁

We need to know if the routes we are creating make sense or if Santa is going to have to drop presents along the way. 🥺

For that we are going to create a function that receives two parameters:

A number with the maximum capacity of presents in the sleigh.
The trip which is an array of arrays. Each subarray contains three numbers representing:

 - trip[0] = number of gifts to be transported.
 - trip[1] = pickup point of the gifts
 - trip[2] = drop-off point of the presents

The route always goes from left to right (Santa will never go backwards), but... keep in mind that in the middle of the route he may have to pick up presents when he already has some on him!

The best thing to do is to see an example:

```
canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true
canCarry(1, [[2, 3, 8]]) // false 
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false
```
What is difficult, and important, is that you understand that Santa Claus is delivering and collecting gifts and that sometimes that can cause him to exceed the maximum load.