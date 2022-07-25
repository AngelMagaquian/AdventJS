const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge)  // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda)

function maxProfit(prices) {
  let min = prices.indexOf(Math.min(...prices.slice(0,-1)))
 	let max = prices.indexOf(Math.max(...prices.slice(min)))
  let res = prices[max] - prices[min]
  return res > 0 ? res : -1
}