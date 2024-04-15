import { ProductsList, UpdateProducts } from "..";
import { DashboardHeader } from "../..";
import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import ImageUpload from "@/utils/image-upload";

function ProductsDashboard() {
  const [productData, setProducts] = useState({});

  return (
    <div className="h-full w-full overflow-hidden">
      <DashboardHeader title={"Products"} />
      <div className="h-full w-full flex gap-3">
        <ProductsList setProduct={setProducts} />
        <div className="h-[90%] w-[30%] bg-slate-50 rounded-2xl p-3 flex flex-col gap-3">
          <div className="w-full bg-red-500 rounded-xl">
            <img className="rounded-xl" src={productData.Images} alt="" />
            {/* <input type="file" className="rounded-xl w-full"  src={productsData.Images}/> */}
            {/* <ImageUpload /> */}
          </div>
          <UpdateProducts productsData={productData} />
        </div>
      </div>
    </div>
  );
}

export default ProductsDashboard;
