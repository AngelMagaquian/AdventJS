# Challenge 1

 **[Challenge 1](https://adventjs.dev/challenges/01)** 
 
Consider a list/array of sheep. Each sheep has a name and a color. Make a function that returns a list of all sheep that are colored `red (rojo)` **and in addition** their name contains both the letters `n` AND `a`, regardless of order, capitalization, or spaces.

For example, if we have sheep:

```
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
```

When the method is executed it should return the following:
```
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

Remember. **It must contain both letters 'a' and 'n' in the name**. Do not count sheep that have only one of the letters, they must have both.