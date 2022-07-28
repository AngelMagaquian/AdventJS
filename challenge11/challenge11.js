shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad

function shouldBuyFidelity(times){
  let withFidelity = 250
  let withoutFidelity = 12 * times
  let priceAcum = 0;
  let price = 12
  for(let i = 0; i < times; i++){
    priceAcum += price * 0.75
    price = price * 0.75
	}
	withFidelity += priceAcum
  
  return withoutFidelity > withFidelity ? true : false
}
