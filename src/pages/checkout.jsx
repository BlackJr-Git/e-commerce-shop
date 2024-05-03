/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckoutDetails } from "@/components";
import { useStore } from "@/appStore";
import { Button } from "@/components/ui/button";
import { AnimatedPages } from "@/components";
import { cartPriceSum } from "@/utils";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function Checkout() {
  const {
    currentUser,
    productsAddedToCart,
    orderItems,
    updateCart,
    updateOrder,
  } = useStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: currentUser });

  const onSubmit = async () => {
    const order = {
      userId: currentUser.id,
      total: cartPriceSum(orderItems),
      orderItems: orderItems,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/api/orders/add`,
        order,
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        updateCart([]);
        updateOrder([]);
        sessionStorage.setItem("cart", JSON.stringify([]));
        sessionStorage.setItem("order", JSON.stringify([]));
        setIsSubmitted(true);
      }
      toast({
        title: "la commande a été faite avec succes",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Une erreur s'est produite lors de l'envoi des données",
        description: error.response.data,
      });
    }
  };

  if (isSubmitted) {
    return <Navigate to="/checkout-sucess" />;
  }

  if (!currentUser.id) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AnimatedPages>
      <main className="bg-slate-100 pt-24">
        <div className="max-w-6xl m-auto">
          <h1 className="text-4xl text-center font-bold py-12">
            Confirmation de la commande
          </h1>

          {productsAddedToCart[0] ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row gap-6 items-start justify-start m-auto"
            >
              <div className="md:w-3/5 px-6 w-full ">
                <h2 className="text-xl font-bold py-6">
                  Details de facturation
                </h2>
                <CheckoutUserInfo />
              </div>
              <CheckoutDetails registerFunction={register}></CheckoutDetails>
            </form>
          ) : (
            <EmptyCartMessage></EmptyCartMessage>
          )}
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Checkout;

function CheckoutUserInfo() {
  const { currentUser } = useStore();
  return (
    <div className="border-2 border-slate-300 p-6 rounded-2xl">
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
            <td className="text-right"> {currentUser.address} </td>
          </tr>
          <tr className="py-6">
            <td></td>
            <td className="text-right"> {currentUser.address2} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function EmptyCartMessage() {
  return (
    <div className="flex items-center justify-center gap-6 pb-24 h-[45vh]">
      <p className="text-2xl">Votre panier est vide</p>
      <Button className="max-w-96">
        {" "}
        <Link to={"/boutique"}>Continuer vos achats</Link>{" "}
      </Button>
    </div>
  );
}
