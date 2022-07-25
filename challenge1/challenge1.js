const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas){
  let filterSheep = ovejas.filter(s => s.name.toLowerCase().includes('a') && s.name.toLowerCase().includes('n') && s.color === 'rojo')
  return filterSheep
}

contarOvejas(ovejas)

