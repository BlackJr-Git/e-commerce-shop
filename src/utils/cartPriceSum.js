
function cartPriceSum(listOfOrders) {
  let totalPrice = 0;
  listOfOrders.forEach((order) => {
    totalPrice = totalPrice + (order.price * order.quantity);
  });
  return totalPrice
}

export default cartPriceSum; 
