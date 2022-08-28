
  

# Challenge 23

  

  

**[Challenge 23](https://adventjs.dev/challenges/23)**

  

  
  
  
  
  
  


We're in Santa's factory 🎅 creating gifts like there's no tomorrow.

We thought we weren't going to make it but Jelf Bezos has come up with a genius idea to take advantage of the machines and optimize gift creation to the max. 🎁

The configuration of the machines is a string. We can reconfigure it to make another gift, and to do that we can change each character to another character.

But it has limitations 🥲: when replacing the character the order must be maintained, the same character cannot be assigned to two different letters (but itself) and, of course, the length of the string must be the same.

We need a function that tells us if we can reconfigure a machine so that it can go from one gift to another according to the above rules. The best thing to do is to see an example:

```
const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
/* the transformation would be like this:
B -> L
A -> I
L -> B
*/

const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
/* the transformation can't be made:
C -> J
O -> U
N -> FAIL
*/

const from = 'XBOX'
const to   = 'XXBO'
const canReconfigure(from, to) // false
/* the transformation can't be made:
X -> X
B -> X (FAIL, does not hold the transformation order and B can't be assigned to X that has already been assigned to another one) 
O -> B
X -> O (FAIL, la X no puede asignarse a la O que ya se asignó a la X)
*/

const from = 'XBOX'
const to   = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false
/* the transformation can't be made:
M -> M (OK, assigns the same character in itself)
M -> I (FAIL, assigns the same character in two different letters)
M -> D (FAIL, assigns the same character in two different letters)
*/

const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> don't have the same length
```