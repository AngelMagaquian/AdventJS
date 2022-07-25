# Challenge 2

 **[Challenge 2](https://adventjs.dev/challenges/02)** 
 

You have received a letter ✉️ with all the gifts you have to prepare. The thing is that it is a text string and it is very difficult to read 😱. Thank godsh they have put each gift separated by space! (although be careful, because are children, maybe they have write more blank spaces than necessary).

On top of that we noticed that some words come with a `_` in front of the word, for example `_playstation`, which means it's crossed out and doesn't have to be counted.

Transform the text to an object containing the name of each gift and the times it appears. For example, if we have the text:

```
const carta = 'bici coche balón _playstation bici coche peluche'
```

When the method is executed it should return the following:

```
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Please note that the tests may be more comprehensive.... 😝 Be careful with counting blanks!