canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true
canCarry(1, [[2, 3, 8]]) // false 
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false

function canCarry(capacity, trip) {
	const deliveries ={}
  for ( const path of trip){
    const [gifts, gift_point, delivery_point] = path
    
    for(let i = gift_point; i < delivery_point; i++){
      deliveries[i] ??=0;
      deliveries[i] += gifts
      if(deliveries[i] > capacity){ return false}
    }
  }
  return true
}