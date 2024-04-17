import axios from "axios";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { AddProductForm } from "..";
import { useState } from "react";

function AddProduct() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addProduct = async (formData, e) => {
    e.preventDefault();
    // console.log(formData); 
    formData.Images = formData.Images[0];
    // console.log(formData); 

    try {
      const response = await axios.post(
        "http://localhost:3000/api/products/add",
        formData,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      alert("le produit a été ajoutée");
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
      alert("Une erreur s'est produite lors de l'envoi des données");
    }
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Ajouter un produit</Button>
      {open ? (
        <div className="absolute bg-black/70 w-screen h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <form
            className="absolute bg-slate-50 p-12 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  shadow-2xl"
            onSubmit={handleSubmit(addProduct)}
          >
            <AddProductForm registerFunction={register} />
            <div className="w-full flex gap-3 items-center justify-end">
              <Button variant={"outline"} onClick={handleClickOpen}>
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
