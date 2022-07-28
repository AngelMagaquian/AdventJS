getMinJump([5, 3, 6, 7, 9]) // -> 4

getMinJump([2, 4, 6, 8, 10]) // --> 7

getMinJump([1, 2, 3, 5]) // --> 4

getMinJump([3, 7, 5]) // --> 2

function getMinJump(obstacles){
  let jumps = 1
  let i = 0
  while(i <= Math.max(...obstacles)){
    if(obstacles.includes(i)){
      i = 0
      jumps += 1
    }
    i += jumps
  }
  return jumps
}