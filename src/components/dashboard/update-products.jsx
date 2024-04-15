/* eslint-disable react/prop-types */
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import postData from "@/utils/post-data";

function UpdateProducts({ productsData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postUrl = `http://localhost:3000/api/products/update/${productsData.ID}`

  const handleClick = (formData, e) => {
    e.preventDefault();
    formData.price = parseInt(formData.price)
    postData(formData,postUrl )
    console.log(formData);
    // reset({ tweetInput: "" });
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleClick)}>
      <label htmlFor="name">Name</label>
      <Input type="text" className="bg-slate-100" defaultValue={productsData.name} {...register("name", {
          required: "le nom du produit doit etre vide",
          maxLength: 180,
          minLenght : 1 ,
          pattern : {
            value : /\S/ ,
            message : "Ajouter un nom a votre produit"
          }
        })} />
      <label type="text" htmlFor="price">Price</label>
      <Input className="bg-slate-100" defaultValue={productsData.price} {...register("price", {
          required: "le prix de votre produit ne peut pas etre vide",
          maxLength: 180,
          minLenght : 1 ,
          pattern : {
            value : /\S/ ,
            message : "Ajouter un un prix a votre produit"
          }
        })} />
      <Button>Mettre a jour</Button>
    </form>
  );
}

export default UpdateProducts;
