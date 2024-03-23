import {
  ShopHeader,
  ProductFilter,
  Products,
  AnimatedPages,
} from "../components";
import { productsData } from "@/data";
import { useState } from "react";

function Shop() {
  const [products, setProducts] = useState(productsData);
  function searchProduct(data) {
    console.log(data.search);
    setProducts(
      productsData.filter((product) =>
        product.name.toLowerCase().includes(data.search.toLowerCase())
      )
    );
  }
  return (
    <AnimatedPages>
      <main className="max-w-7xl xl:max-w-screen-2xl m-auto md:flex items-start gap-6 mb-20 mt-7 relative">
        <div className="bg-slate-200 w-1/6 h-screen rounded-2xl hidden md:block ">
          <ProductFilter />
        </div>
        <div className="md:w-5/6 m-auto w-full mx-1">
          <ShopHeader searchProduct={searchProduct}></ShopHeader>

          <Products productData={products} />
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Shop;
