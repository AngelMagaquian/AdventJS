
  

# Challenge 22

  

  

**[Challenge 22](https://adventjs.dev/challenges/22)**

  

  
  
  
  
  
  


Christmas is coming and we haven't decorated the tree yet. 🎄😱

We need a function that passing a binary tree tells us the number of decorations we need. For this we have an object that would be the representation of the tree and that tells us at each level the number of branches to decorate.

The best thing to do is to see an example:

```
// We have the tree as an object 
const tree = {
  value: 1, // the root node is always one, because it is the star ⭐.
  left: {
    value: 2, // the left node need two decorations
    left: null, // don't have more nodes
    right: null // don't have more nodes
  },
  right: {
    value: 3, // the right node need three decorations
    left: null, // don't have more nodes
    right: null // don't have more nodes
  }
}

/* Graphically it would look like this:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

countDecorations(tree) // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

countDecorations(bigTree) // 28
```