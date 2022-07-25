
const letter = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter){
  let obj = {}
  letter = letter.trim().split(' ').filter( gift => !gift.includes('_')).map(e => obj[e] ? obj[e] += 1 : obj[e] = 1)
  return obj
}

listGifts(letter)
