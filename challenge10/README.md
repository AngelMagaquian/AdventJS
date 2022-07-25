# Challenge 10

  

**[Challenge 10](https://adventjs.dev/challenges/10)**

  
  
  
  
  
  
  
  


To improve the productivity of the store where we work, we are going to create a small machine that calculates the minimum number of coins we should use to give change for a cash purchase.

The coins for change that you can use are these:

  

```
coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
```
We have to create a function that receives the number of cents to be returned to the customer and the function gives us an array with the ***minimum combination of coins*** that we must use to get it.

```
getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```
The difficulty of the challenge lies in knowing how to correctly use a structure that allows you to know the coins you have available to create the array with the return, as you must ***always use as few coins as possible***. Good luck 👩💻👨💻!!!!