getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos


function getCoins(change){
  const coins = [1,2,5,10,20,50]
  let res = [0,0,0,0,0,0]
  while(change > 0){
    let index = coins.findLastIndex(x => x <= change)
    res[index] +=1
    change -= coins[index]
  }
  return res
}