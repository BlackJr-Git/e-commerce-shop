function cartPriceSum(listOfProducts) {
  let totalPrice = 0;
  listOfProducts.forEach((product) => {
    totalPrice = totalPrice + product.price;
  });
  return totalPrice
}

export default cartPriceSum;
