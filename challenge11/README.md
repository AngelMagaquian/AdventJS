
# Challenge 11

  

**[Challenge 11](https://adventjs.dev/challenges/11)**

  
  
  
  
  
  
  
  



This December there are super interesting movies at the cinema... and I have to optimize how I spend my money.

My favorite movie theater has two possibilities:

- Single ticket: It costs $12 for each movie.

- Fidelitycard: It costs $250 but each time you go ***you pay only 75% of the ticket price***. The best part is that it accumulates! And each time you go, you pay 75% of the ticket price you paid last time.
Example of each when you buy 3 tickets and the price you would pay in total:

  
```
// Single ticket: 12$ * 3 = 36$
// Fidelitycard: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
```
I need a function that, when I tell it how many times I go to the movies, it will tell me if it is worth buying the loyalty card or not.

```
shouldBuyFidelity(1) // false -> Better to buy single ticket
shouldBuyFidelity(100) // true -> Better to buy Fidelity card
```
The difficulty of the challenge lies in finding a simple formula that tells us the cumulative discounted price for the Fidelitycard. 😜
