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
        "http://localhost:3000/api/sales/best-sellers?number=4";
      const loadProductsData = async () => {
        try {
          const data = await axios.get(TOP_SELLING_PRODUCTS_URI, {
            withCredentials: true,
          });
          setTopSellingProducts(data.data.sales);
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
    <div className="h-[35%] bg-slate-50 rounded-2xl p-3 drop-shadow-md">
      <div className="flex items-center justify-between h-12 mb-3">
        <h2 className="font-bold">Top Selling Products</h2>
      </div>
      <div className="flex flex-col gap-3">
        {topSellingProducts ? (
          <>
            {topSellingProducts.map((product) => (
              <TopSellingProduct
                key={product.ID}
                productData={product}
                quantity={product.itemCount}
              />
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

function TopSellingProduct({ productData, quantity }) {
  const [product, setProduct] = useState({});
  // console.log(productData);

  useEffect(() => {
    async function loadProductsData() {
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_API_URI}/api/products/${productData.ID}`,
          {
            withCredentials: true,
          }
        );
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProductsData();
  }, [productData.ID]);

  return (
    <div className="flex items-center justify-between h-10 bg-slate-100  drop-shadow-md  rounded-xl px-1">
      <div className="flex items-center gap-3 justify-between  w-full pr-3">
        <div className="w-16">
          <img
            className="w-8 max-w-full rounded-lg"
            src={product.Images}
            alt=""
          />
        </div>
        <p>{product.name}</p>
        <p>$ {product.price}</p>
        <p>{quantity}</p>
      </div>
    </div>
  );
}
