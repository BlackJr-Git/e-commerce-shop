/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import { productsData } from "@/data";

function ProductSearchBar({searchProduct}) {
  // eslint-disable-next-line no-unused-vars
  const [searchValue, setSearchValue] = useState({
    search: "",
  });

  const { register, handleSubmit } = useForm({ defaultValues: searchValue });

  // const onSubmit = (data) => {
  //   searchProduct(data)
  // };

  return (
    <form onSubmit={handleSubmit(searchProduct)} className="flex flex-col gap-2">
      <Input
        {...register("search", {
          required: "Ce champ est obligatoire",
        })}
        className="bg-slate-50"
        placeholder="Rechercher un produit"
        type="search"
        name="search"
      />
      <Button
        type="submit"
        className="w-60 hover:bg-primary/70 font-semibold"
      >
        Rechercher
      </Button>
    </form>
  );
}

export default ProductSearchBar;
