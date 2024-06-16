function getShippingCost(country) {
  if (typeof country !== 'string') {
    return 'Please provide a valid country name';
  }
  let lowCountry = country.toLowerCase();
  let delChina = 100;
  let delChile = 250;
  let delAustralia = 170;
  let delJamaica = 120;
  switch (lowCountry) {
    case 'china':
      return `Shipping to ${country} will cost ${delChina} credits`;
    case 'chile':
      return `Shipping to ${country} will cost ${delChile} credits`;
    case 'australia':
      return `Shipping to ${country} will cost ${delAustralia} credits`;
    case 'jamaica':
      return `Shipping to ${country} will cost ${delJamaica} credits`;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost(4));
