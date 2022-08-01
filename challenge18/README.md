
  

  

# Challenge 18

  

  

  

**[Challenge 18](https://adventjs.dev/challenges/18)**

  

  

  

Lara Eloft has found some elven remains in a cave, near the Arctic Circle, 8 km north of Rovaniemi.

  

  

Now she is deciphering some mysterious letters containing information about some numbers that can lead her to the next target.

  

  

Lara has a document that contains a series of numbers that can be used to decipher them:

  

  

```
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// beware that the elves already had files with (1).... and they may be repeated!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
```
