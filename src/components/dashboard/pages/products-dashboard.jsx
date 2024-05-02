import { ProductsList, UpdateProducts, AddProduct } from "..";
import { DashboardHeader, PopUp } from "../..";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";
import { useForm } from "react-hook-form";

function ProductsDashboard() {
  const [productData, setProducts] = useState({});
  // const [searchValue, setSearchValue] = useState({
  //   search: "",
  // });
  const [search, setSearch] = useState("");
  const { register, handleSubmit } = useForm();

  const firstProductsUrl = `http://localhost:3000/api/products?number=1`;
  useEffect(() => {
    const loadProductsData = async () => {
      try {
        const data = await fetchData(firstProductsUrl);
        setProducts(data.products[0]);
      } catch (error) {
        console.log(error);
      }
    };
    loadProductsData();
  }, [firstProductsUrl]);

  function searchProduct(data) {
    setSearch(data.search);
  }

  return (
    <div className="h-full w-full ">
      <DashboardHeader title={"Products"} />
      <div className="w-full h-24 bg-slate-50 mb-3 rounded-xl p-6 flex items-center gap-3 justify-between">
        <form
          action=""
          onSubmit={handleSubmit(searchProduct)}
          className="flex gap-3"
        >
          <Input
            {...register("search", {
              required: "Ce champ est obligatoire",
            })}
            placeholder="Rechercher un produit"
            className="w-64"
          />{" "}
          <Button>Rechercher</Button>
        </form>
        <AddProduct text={"Ajouter un nouveau produit +"} />
      </div>
      <div className="h-full w-full flex gap-3">
        <ProductsList setProduct={setProducts} search={search} />
        <div className="h-[75%] w-[30%] bg-slate-50 rounded-2xl p-3 flex flex-col gap-3">
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
