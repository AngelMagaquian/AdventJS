
  

  

# Challenge 18

  

  

  

**[Challenge 18](https://adventjs.dev/challenges/18)**

  

  

  

Evelyn Belefzin 👩💻 is working on an OS to be used in Santa's workshop 🎅.

He has noticed that in the workshop nobody pays attention to file names and sometimes they try to save the same file more than once... so it is important that we manage duplicate names well.

We have to create a function that when passing us an array of filenames we return an array with the same number of elements but where the names that were repeated are appended at the end `(k)` where k would be the number of times it was found repeated.

The best thing to do is to see an example:



```
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// beware that the elves already had files with (1).... and they may be repeated!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
```
