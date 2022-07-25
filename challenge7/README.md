# Challenge 7

 **[Challenge 7](https://adventjs.dev/challenges/07)** 
 






My friend Dani is working in a store and with the arrival of Christmas he has the warehouse in a mess and he can't find anything.

We are going to create a `contains` function that receives two parameters: an object that defines the store and the product we are looking for.

The function must return a boolean that indicates if the string is found as a value at some level of the object. Let's see some examples:

```
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡It's here!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false
```


Keep in mind that the store is huge. It has different warehouses and, as you have seen in the examples, each one can have different organizations.the important thing is to look for that the product is in the warehouses.