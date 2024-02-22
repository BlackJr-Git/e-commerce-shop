import { useState } from "react";
import { useForm } from "react-hook-form";
import { productsData } from "@/data";

function ProductSearchBar() {
  const [searchValue, setSearchValue] = useState({
    search: "",
  });

  const { register, handleSubmit } = useForm({ defaultValues: searchValue });

  const onSubmit = (data) => {
    console.log("data :", data.search);
    console.log(productsData);
    let arrayToDisplay = productsData.filter((product) => product.name.includes(data.search));
    console.log(arrayToDisplay);             
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        {...register("search", {
          required: "Ce champ est obligatoire",
        })}
        className="w-60 rounded-lg h-8 p-2"
        placeholder="Rechercher un produit"
        type="search"
        name="search"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground shadow w-60 hover:bg-primary/70 rounded-lg font-semibold"
      >
        Rechercher
      </button>
    </form>
  );
}

export default ProductSearchBar;
