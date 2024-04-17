/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
import { useStore } from "@/appStore";
import { cartPriceSum } from "@/utils";
import { useState, useEffect } from "react";

function CheckoutDetails({ registerFunction }) {
  const { productsAddedToCart } = useStore();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(cartPriceSum(productsAddedToCart));
  }, [productsAddedToCart]);

  return (
    <div className="md:w-2/5 m-auto w-4/5 ">
      <div className="max-w-6xl m-auto p-7 mb-6 border-2 border-slate-300 rounded-2xl">
        <table className="w-full">
          <thead className="w-full font-bold border-b border-slate-200">
            <tr colSpan={"2"} className="py-6 text-xl">
              <td colSpan={"2"} className="py-6 text-xl">
                Votre commande{" "}
              </td>
            </tr>
            <tr>
              <td>Produits</td>
              <td className="text-right">Sous-Total</td>
            </tr>
          </thead>
          <tbody className="w-full border-b border-slate-200">
            {productsAddedToCart.map((product) => (
              <ProductCard product={product} key={product.ID} />
            ))}
          </tbody>
          <tfoot className="w-full">
            <tr className="border-b border-slate-200 ">
              <td className="w-40 py-6 font-medium">Sous-Total</td>
              <td className=" py-6 text-right">$ {totalPrice} </td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-medium">Expedition</td>
              <td className="py-6 text-right">Livraison Gratuite</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-6 font-bold">TOTAL</td>
              <td className="py-6 text-right">$ {totalPrice} </td>
            </tr>
          </tfoot>
        </table>
        <p className="py-3">Paiement a la livraison </p>
        <div className="before:content-[''] before:w-5 before:h-5 before:block before:mx-5 before:my-1 before:border-l-[16px] before:border-l-transparent before:border-b-[16px] before:border-b-slate-200 before:border-r-[16px] before:border-r-transparent">
          <p className="bg-slate-200 p-3 rounded-2xl">
            Payer en argent comptant à la livraison.
          </p>
        </div>

        <div className="flex items-start py-6 gap-3">
          <input
            {...registerFunction("newsletter")}
            className="my-1 w-3 h-3"
            type="checkbox"
            name="newsletter"
            id="newsletter"
          />
          <p className="font-semibold">
            Je voudrais recevoir des e-mails exclusifs avec des réductions et
            des informations sur le produit
          </p>
        </div>
        <p>
          Vos données personnelles seront utilisées pour le traitement de votre
          commande, vous accompagner au cours de votre visite du site web, et
          pour d’autres raisons décrites dans notre politique de
          confidentialité.
        </p>
        <Button className="font-semibold w-full p-6 my-6">COMMANDER</Button>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <tr className="">
      <td className="py-3"> {product.name} </td>
      <td className="py-3 text-right">$ {product.price} </td>
    </tr>
  );
}

export default CheckoutDetails;
