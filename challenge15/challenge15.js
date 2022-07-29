checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2]) // false: sube y baja y sube... ¡no vale!

function checkSledJump(heights) {
  let index = heights.indexOf(Math.max(...heights))
  let decreases = true 
  for(let i= index +1; i < heights.length -1; i++){
  	heights[i] >= heights[i+ 1] ? decreases = true : decreases = false;
    if(!decreases){break}
	}
  return heights[index+1] >= heights[index-1] && decreases ? true : false
}