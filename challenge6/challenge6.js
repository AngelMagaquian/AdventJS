sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

function sumPairs(numbers, result){
  let res = []
	for(let i = 0; i < numbers.length; i++ ){
    let second = numbers.findIndex(x => numbers[i] + x === result, i+1)
    if(second != -1 && i != second){
       res.push(numbers[i], numbers[second])
      break
    }
  }
  return res.length > 0 ? res : null
}