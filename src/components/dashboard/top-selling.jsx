/* eslint-disable react/prop-types */
/**
 * Renders the top selling products component.
 *
 * @return {JSX.Element} The top selling products component
 */
function TopSellingProducts() {
  const topSellingProducts = [
    {
      id: 1,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      quantity: 3,
    },
    {
      id: 2,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      quantity: 1,
    },
    {
      id: 3,
      name: "Mens Cotton Jacket",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
      quantity: 2,
    },
  ];
  return (
    <div className="h-[35%] bg-slate-100 rounded-2xl p-3">
      <div className="flex items-center justify-between h-12 mb-3">
        <h2 className="font-bold">Top Selling Products</h2>
        <select name="" id="" className="p-1 px-3">
          <option value="week">This Week</option>
          <option value="month">This month</option>
          <option value="year">This year</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        {topSellingProducts.map((product) => (
          <TopSellingProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default TopSellingProducts;

function TopSellingProduct({ product }) {
  return (
    <div className="flex items-center justify-between h-12 ">
      <div className="flex items-center gap-3">
        <div className="w-16">
          <img className="w-8 max-w-full" src={product.image} alt="" />
        </div>
        <p>{product.name}</p>
      </div>
    </div>
  );
}
