import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { AddProductForm } from "..";
import { useState } from "react";

function AddProduct({ handleClick, text, button_variant }) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addProduct = (formData, e) => {
    // e.preventDefault();
    console.log(formData);
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
              <Button className="w-48" type="submit" >
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
