
  

# Challenge 25

  

  

**[Challenge 25](https://adventjs.dev/challenges/25)**

  

  
  
  
  
  
  


Yesterday, on Christmas nigth, a family had dinner in style.... With so many drinks 🍾 on top they still haven't taken away the dishes and the food from yesterday...

A little mouse called midurat 🐭, who saw yesterday's feast in hiding, is licking his whiskers at the sight of all the delicacies in the dining room.

Mind you, you have to be careful 😶 and only make the right moves to eat something. That's why the mouse, who has watched midudev's videos, is going to create a function to know if your next move is correct or not ✅.

The mouse can move in 4 directions: up, down, left, right and the eater is a matrix (an array of arrays) where each position can be:

An empty space is that there is nothing.
An m is the mouse
A * is the food
Let's see some examples:

```
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
```
Keep in mind that the mouse wants to forage in different rooms and that each room may have different dimensions!