/* eslint-disable react/prop-types */
/**
 * Renders the top selling products component.
 *
 * @return {JSX.Element} The top selling products component
 */

import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "..";
function TopSellingProducts() {
  const [topSellingProducts, setTopSellingProducts] = useState([]);

  useEffect(() => {
    try {
      const TOP_SELLING_PRODUCTS_URI =
        "http://localhost:3000/api/products?number=4";
      const loadProductsData = async () => {
        try {
          const data = await axios.get(TOP_SELLING_PRODUCTS_URI);
          setTopSellingProducts(data.data.products);
        } catch (error) {
          console.error("Une erreur s'est produite:", error);
        }
      };

      loadProductsData();
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
    }
  }, []);

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
        {topSellingProducts ? (
          <>
            {topSellingProducts.map((product) => (
              <TopSellingProduct key={product.ID} product={product} />
            ))}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default TopSellingProducts;

function TopSellingProduct({ product }) {
  return (
    <div className="flex items-center justify-between h-10 bg-slate-300 rounded-xl px-3">
      <div className="flex items-center gap-3">
        <div className="w-16">
          <img
            className="w-8 max-w-full rounded-lg"
            src={product.Images}
            alt=""
          />
        </div>
        <p>{product.name}</p>
        {/* <p>{product.price}</p> */}
      </div>
    </div>
  );
}
