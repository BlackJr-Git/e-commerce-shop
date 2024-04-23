import { ProductsList, UpdateProducts, AddProduct } from "..";
import { DashboardHeader, PopUp } from "../..";
import { useState } from "react";
// import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
// import ImageUpload from "@/utils/image-upload";

function ProductsDashboard() {
  const [productData, setProducts] = useState({});

  return (
    <div className="h-full w-full ">
      <DashboardHeader title={"Products"} />
      <div className="w-full h-24 bg-slate-50 mb-3 rounded-xl p-3 flex items-center gap-3 justify-center">
        <Input placeholder="Rechercher un produit" className="w-64" />{" "}
        <AddProduct text={"Ajouter un nouveau produit +"} />
      </div>
      <div className="h-full w-full flex gap-3">
        <ProductsList setProduct={setProducts} />
        <div className="h-[78%] w-[30%] bg-slate-50 rounded-2xl p-3 flex flex-col gap-3">
          <div className="w-full bg-red-500 rounded-xl">
            <img className="rounded-xl" src={productData.Images} alt="" />
          </div>
          <UpdateProducts productsData={productData} />
        </div>
      </div>
    </div>
  );
}

export default ProductsDashboard;
