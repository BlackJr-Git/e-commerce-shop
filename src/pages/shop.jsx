import { ShopHeader, ProductFilter, Products } from "../components";
import { productsData } from "@/data";

function Shop() {
  return (
    <main className="max-w-7xl m-auto flex items-start gap-6 mb-20 mt-7 relative">
      <div className="bg-slate-200 w-1/6 h-screen rounded-2xl sticky ">
        <ProductFilter />
      </div>
        <div className="w-5/6">
          <ShopHeader></ShopHeader>

          <Products productData={productsData} />
        </div>
    </main>
  );
}

export default Shop ;
  