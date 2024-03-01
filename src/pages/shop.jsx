import { ShopHeader, ProductFilter, Products } from "../components";
import { productsData } from "@/data";
import { AnimatedPages } from "../components";

function Shop() {
  return (
    <AnimatedPages>
      <main className="max-w-7xl m-auto md:flex items-start gap-6 mb-20 mt-7 relative">
        <div className="bg-slate-200 w-1/6 h-screen rounded-2xl hidden md:block ">
          <ProductFilter />
        </div>
        <div className="md:w-5/6 m-auto w-full mx-1">
          <ShopHeader></ShopHeader>

          <Products productData={productsData} />
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Shop;
