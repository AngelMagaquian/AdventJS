
# Challenge 13

  

**[Challenge 13](https://adventjs.dev/challenges/13)**

  
  
  
  
  
  
  
  





There are too many gifts 🎁 ! And wrapping them is crazy....

Let's create a function that by passing it an array of gifts, it will return another array but where all the gifts have been wrapped with asterisks both on the top and on the sides.

You just have to keep in mind a few little things ✌️:

 - If the array is empty, return an empty array. Gifts are emojis 🎁...
 
 - so keep that in mind when counting their length.... Luckily, each

   

 - position of the array always has the same length....

  
```
wrapGifts(["📷", "⚽️"])
/* Result:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Result:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Result:
[ '****',
  '*📷*',
  '****'
]
*/

*/
```