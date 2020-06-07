var prices = $(".a-price-whole")
var fracs = $(".a-price-fraction")
var symbs = $(".a-price-symbol")
prices.each((idx, price) => {
    var newPrice = parseInt(price.textContent) / 4
    newPrice += " Milkshakes"
    price.textContent = newPrice
})
fracs.each((idx, frac) => frac.textContent = "");
symbs.each((idx, symb) => symb.textContent = "");
