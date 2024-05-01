/* eslint-disable react/prop-types */
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PopUp } from "..";
import { useForm } from "react-hook-form";
import postData from "@/utils/post-data";
import deleteData from "@/utils/delete-product";
import { Checkbox } from "@/components/ui/checkbox";
// import Cookies from "js-cookie";

function UpdateProducts({ productsData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const postUrl = `http://localhost:3000/api/products/update/${productsData.ID}`;
  const deleteUrl = `http://localhost:3000/api/products/delete/${productsData.ID}`;

  const handleClick = (formData, e) => {
    try {
      e.preventDefault();
      formData.price = parseInt(formData.price);
      postData(formData, postUrl);
      // location.reload();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = () => {
    try {
      console.log(deleteUrl);
      deleteData(deleteUrl);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleClick)}
      >
        <div className="flex items-center gap-3">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            className="bg-slate-100"
            defaultValue={productsData.name}
            // value={productsData.name}
            {...register("name", {
              required: "le nom du produit doit etre vide",
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /\S/,
                message: "Ajouter un nom a votre produit",
              },
            })}
          />
        </div>

        <div className="flex items-center gap-3">
          <label type="text" htmlFor="price">
            Price
          </label>
          <Input
            className="bg-slate-100"
            defaultValue={productsData.price}
            // value={productsData.price}
            {...register("price", {
              required: "le prix de votre produit ne peut pas etre vide",
              maxLength: 180,
              minLenght: 1,
              pattern: {
                value: /\S/,
                message: "Ajouter un un prix a votre produit",
              },
            })}
          />
        </div>

        <div className="flex items-center gap-3">
          <label type="text" htmlFor="price">
            Categories
          </label>
          <Input
            className="bg-slate-100"
            defaultValue={productsData.Categories}
            // value={productsData.price}
            {...register("Categories", {
              required: "la categorie de votre produit ne peut pas etre vide",
              maxLength: 180,
              minLenght: 1,
            })}
          />
        </div>

        <div className="flex items-center gap-3">
          <Checkbox
            id="isHighlighted"
            {...register("isHighlighted")}
            defaultChecked={productsData.isHighlighted}
          />

          <label
            htmlFor="isHighlighted"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            produit mis en avent ?
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            id="isVisible"
            {...register("isVisible")}
            defaultChecked={productsData.isVisible}
          />

          <label
            htmlFor="isVisible"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            produit visible ?
          </label>
        </div>

        <Button>Mettre a jour</Button>
      </form>
      {/* <Button variant="destructive" onClick={deleteProduct} >Supprimer</Button>  */}
      <PopUp
        handleClick={deleteProduct}
        text={"Supprimer le produit"}
        button_variant={"destructive"}
      />
    </>
  );
}

export default UpdateProducts;
