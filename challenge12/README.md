# Challenge 12

  

**[Challenge 12](https://adventjs.dev/challenges/12)**

  
  
  
  
  
  
  
  




In Santa's workshop 🎅 the electric motor sleds are being prepared in order to make the perfect route for dropping off presents.

The route starts at point 0 and from there it goes to the right in a straight line.

The Keanu Relfes 🧝 has prepared us a list of obstacles to avoid. The problem is that he has given us the list of obstacle positions out of order.... 😅 although at least never position 0 can have an obstacle.

On top of that, the sled can only be set to jump a fixed number of positions.... 😱

We need a function that tells us the minimum length of the sled jump to avoid all the obstacles on the route.

  

```
const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
```

The difficulty of the challenge is to think that we can only set the sled jump once and that we are looking for the minimum jump that would allow us to avoid all the obstacles.