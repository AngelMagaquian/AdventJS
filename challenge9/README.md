# Challenge 9

 **[Challenge 9](https://adventjs.dev/challenges/09)** 
 








At Santa's factory 🎅 the special day is comming... and we still have a lot of things to count. 😅

Luckily Mark Zucktheelf 🧝 has come up with a function that allows us to group an array, which can be of values or objects, through a function or a property.

He brings us a bunch of examples:

```
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
```


As you can see, the groupBy function receives a collection (array) and a function or a property, and returns an object with keys that are the values of the executed function passing as argument each element or of the property for each element. Then the values are an array of the values that have the same key.

The difficulty of the challenge is more in understanding the function than in the implementation. Good luck.