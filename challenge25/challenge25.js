const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false

const room3 = [['*', 'm']]
canMouseEat('up', room3)  //false

function canMouseEat(direction, game) {
  let mouse = []
  game.map((e, x)=> {
    let i = e.findIndex(i => i === 'm')
    if( i != -1){mouse = [x,i]}
  })
  
  const directions ={
    'up': game.length -1 != 0 ? game.at(mouse[0]-1).at(mouse[1]) : false,
    'down': game.length -1 != 0 ? game.at(mouse[0]+1).at(mouse[1]) : false,
    'left': game.at(mouse[0]).at(mouse[1]-1),
    'right':  game.at(mouse[0]).at(mouse[1]+1) 
  }
  return  directions[direction] && directions[direction] === '*' ? true : false
}

