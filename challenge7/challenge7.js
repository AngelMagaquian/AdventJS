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
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

contains(almacen, 'camiseta')

function contains(store, product) {
  	let almacen = JSON.parse(JSON.stringify(store))
    let find = false
    let items = Object.keys(almacen)
    for( let i = 0; i < items.length; i++){
      if(typeof almacen[items[i]] === 'object'){
        find =contains(almacen[items[i]], product)
      }else{
        if(almacen[items[i]] === product){
              find = true
        }
      
      }
    }
    return find
}