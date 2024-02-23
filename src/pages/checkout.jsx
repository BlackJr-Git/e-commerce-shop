/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckoutForm, CheckoutDetails } from "@/components";
import { useStore } from "@/appStore";
import { Button } from "@/components/ui/button";

function Checkout() {
  const { currentUser, productsAddedToCart } = useStore();
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    country: "",
    adress: "",
    adress2: "",
    city: "",
    township: "",
    phone: "",
    email: "",
    notes: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    console.log("data :", data);
  };
  return (
    <main className="bg-slate-100">
      <div className="max-w-6xl m-auto">
        <h1 className="text-4xl text-center font-bold py-12">
          Confirmation de la commande
        </h1>
        <div className="flex items-center gap-3 p-6 border-t-4 border-slate-600">
          {currentUser.name ? (
            <></>
          ) : (
            <>
              <ion-icon name="person"></ion-icon>
              <p>Déjà client ?</p>{" "}
              <Link className="font-medium" to={"./"}>
                Cliquez ici pour vous connecter
              </Link>
            </>
          )}
        </div>

        {productsAddedToCart[0] ? <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-between justify-center"
        >
          <div className="w-3/5 p-6">
            <h2 className="text-xl font-bold py-6">Details de facturation</h2>
            {currentUser.name ? (
              <CheckoutUserInfo />
            ) : (
              <CheckoutForm registerFunction={register}></CheckoutForm>
            )}
          </div>
          <CheckoutDetails registerFunction={register}></CheckoutDetails>
        </form> : <EmptyCartMessage></EmptyCartMessage> }
      </div>
    </main>
  );
}

export default Checkout;

function CheckoutUserInfo() {
  const { currentUser } = useStore();
  return (
    <div className="border-2 border-slate-300 p-6">
      <table className="w-full">
        <tbody>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Nom Complet : </td>
            <td className="text-right">
              {currentUser.firstName} {currentUser.name}{" "}
            </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Telephone : </td>
            <td className="text-right"> (0) {currentUser.phone} </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Email :</td>
            <td className="text-right"> {currentUser.email} </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Ville :</td>
            <td className="text-right"> {currentUser.city} </td>
          </tr>
          <tr className="py-6 border-b border-slate-300">
            <td className="py-3 font-semibold">Commune :</td>
            <td className="text-right"> {currentUser.township} </td>
          </tr>
          <tr className="py-6">
            <td className="py-3 font-semibold">Adresse Complete : </td>
            <td className="text-right"> {currentUser.adress} </td>
          </tr>
          <tr className="py-6">
            <td></td>
            <td className="text-right"> {currentUser.adress2} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function EmptyCartMessage() {
  return (
    <div className="flex items-center justify-center gap-6 pb-24">
      <p className="text-2xl">Votre panier est vide</p>
      <Button className="max-w-96">
        {" "}
        <Link to={"/boutique"}>Continuer vos achats</Link>{" "}
      </Button>
    </div>
  );
}
