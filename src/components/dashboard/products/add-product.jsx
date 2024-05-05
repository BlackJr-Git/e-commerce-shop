import axios from "axios";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { AddProductForm } from "..";
import { useState } from "react";

function AddProduct() {
  const [open, setOpen] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addProduct = async (formData, e) => {
    e.preventDefault();

    formData.price = parseInt(formData.price);
    formData.discountPrice = parseInt(formData.discountPrice);
    formData.weigth = parseInt(formData.weigth);
    formData.width = parseInt(formData.width);
    formData.height = parseInt(formData.height);
    formData.length = parseInt(formData.length);
    formData.Images = productImageUrl;

    if (formData.isHighlighted === "on") {
      formData.isHighlighted = true;
    } else {
      formData.isHighlighted = false;
    }

    if (formData.isVisible === "on") {
      formData.isVisible = true;
    } else {
      formData.isVisible = false;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/api/products/add`,
        formData
      );
      console.log(response);
      alert("le produit a été ajoutée");
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      alert("Une erreur s'est produite lors de l'envoi des données");
    }

    reset();
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button className="w-60" onClick={handleClickOpen}>Ajouter un produit</Button>
      {open ? (
        <div className="absolute bg-black/70 z-80 w-screen  h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <form
            className="absolute bg-slate-50 z-99 p-12 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-2xl"
            onSubmit={handleSubmit(addProduct)}
            encType="multipart/form-data"
          >
            <AddProductForm
              registerFunction={register}
              setImageUrl={setProductImageUrl}
              imageUrl={productImageUrl}
            />
            <div className="w-full flex gap-3 items-center justify-end">
              <Button type="button" variant={"outline"} onClick={handleClickOpen}>
                Cancel
              </Button>
              <Button className="w-48" type="submit">
                Ajouter
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default AddProduct;
