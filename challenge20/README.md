
  

# Challenge 20

  

  

**[Challenge 20](https://adventjs.dev/challenges/20)**

  

  
  
  
  
  
  


In the Spanish class of the village of Lapland they have created a challenge when writing the letter to Santa Claus 🎅: the letter ✉️ has to contain all the letters of the alphabet.

From Santa's workshop 🎅 they have found out and want to write a function that tells them if really the text string that arrives to them has, indeed, all the letters of the Spanish alphabet 🔎.

You have to take into account the uppercase letters and that letters with accent and umlauts are considered equal. For example the á and the ä count as an a.

Let's see some examples of sentences:}

```
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
```