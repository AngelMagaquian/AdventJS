canReconfigure('BAL', 'LIB') // true
canReconfigure('CON', 'JUU') // false
canReconfigure('XBOX', 'XXBO') // false
canReconfigure('XBOX', 'XOBX') // true
canReconfigure('MMM', 'MID') // false
canReconfigure('AA', 'MID') // false

function canReconfigure(from, to) {
  if(from.length != to.length){return false}
	const check={}
  check[from.at(0)] = to.at(0)
  let trans = to.at(0)
  
  for(let i= 0; i < from.length; i++){
  	if(check[from.at(i)] !== undefined && to.at(i) !== check[from.at(i)]){ return false}
    if(check[from.at(i)] === undefined && trans.includes(to.at(i))){return false}
    check[from.at(i)] = to.at(i)
    trans+=to.at(i)
	}
  return true
}