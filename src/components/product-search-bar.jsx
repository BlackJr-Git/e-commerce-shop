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

  return (
    <form onSubmit={handleSubmit(searchProduct)} className="flex flex-col gap-2 w-80">
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
        className="w-80 hover:bg-primary/70 font-semibold"
      >
        Rechercher
      </Button>
    </form>
  );
}

export default ProductSearchBar;
