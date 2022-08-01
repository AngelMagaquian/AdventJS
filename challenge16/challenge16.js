decodeNumbers('...') // 3
decodeNumbers('.,') // 4
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(';.W') // NaN
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50 

function decodeNumbers(symbols) {
	const meaning = {'.' : 1,',' : 5,':' : 10,';' : 50,'!' : 100}
  let res = 0
  for(let i= 0; i < symbols.length; i++){
  	if(!meaning[symbols[i]]){return NaN}
    let aux = meaning[symbols[i]] < meaning[symbols[i+1]] ? meaning[symbols[i]] * -1 : meaning[symbols[i]]
    res += aux
	}
  return res
}