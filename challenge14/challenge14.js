missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
missingReindeer([1]) // -> 0 (¡es el último el que falta!)

function missingReindeer(ids) {
  let missingId = 0;
  if(ids.length === 1 && ids[0] === 1){return 0}
  while(missingId <= Math.max(...ids)){
    if(!ids.includes(missingId)){
      break;
    }
    missingId+= 1
  }
  
  return missingId 
}