const numbers = [
 3
]

function createXmasTree(height) {
  let max = height + height -1
  let blank_space = Math.trunc(max/2)
  let asterisk = -1
  let tree = ''
  while(height > 0){
    asterisk += 2
    tree += ('_').repeat(blank_space)+('*').repeat(asterisk)+('_').repeat(blank_space)+'\n'
    height -= 1
    blank_space -= 1
  }
  let base = 2
  while(base > 0 ){
    
    tree += ('_').repeat(Math.trunc(max/2)) +('#').repeat(1) + ('_').repeat(Math.trunc(max/2))+'\n'
  	base -= 1      
  }
  console.log(tree)
}

numbers.forEach(e => console.log(createXmasTree(e)))
