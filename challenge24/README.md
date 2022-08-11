
  

# Challenge 24

  

  

**[Challenge 24](https://adventjs.dev/challenges/24)**

  

  
  
  
  
  
  


Grandpa 👴 says he sees all Christmas trees the same? Grandma 👵, on the other hand, thinks not. That all Christmas trees are different....

Let's make a function that tells us if two Christmas trees are the same. To do this, we are going to compare the trees we already created in challenge 22.

We need to see if both trees have the same structure and the same values in all branches. Here are some examples:

```
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
```
Brother-in-law 🦹, who knows them all, told me to be careful because the JSON.stringify trick may not work... since the trees may be the same but the order of representation of the left and right branches may be reversed....