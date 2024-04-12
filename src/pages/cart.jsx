/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { useStore } from "@/appStore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cartPriceSum } from "@/utils";
import { AnimatedPages } from "@/components";
import { useToast } from "@/components/ui/use-toast";

function Cart() {
  const { productsAddedToCart } = useStore();
  return (
    <AnimatedPages>
      <main className="bg-slate-100">
        <div className="max-w-7xl m-auto ">
          <h1 className="text-4xl text-center font-bold py-12">Panier</h1>
          {productsAddedToCart[0] ? <CartTable /> : <EmptyCartMessage />}
          <div className="w-full flex md:flex-row flex-col items-center justify-center max-w-6xl m-auto">
            <div className="md:w-2/4"></div>
            <div className="md:w-2/4 w-4/5">
              {productsAddedToCart[0] ? <TotalCart /> : <></>}
            </div>
          </div>
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Cart;

function CartTable() {
  const { productsAddedToCart } = useStore();
  return (
    <div className="py-12">
      <table className="max-w-6xl w-full m-auto ">
        <thead className="border border-slate-200 bg-slate-50">
          <tr className="border border-slate-200 text-left flex flex-col md:block items-center">
            <th className="p-2"></th>
            <th className="p-2">Produit</th>
            <th className="p-2">Prix</th>
            <th className="p-2">Quantité</th>
            <th className="p-2">Sous-Total</th>
          </tr>
        </thead>
        <tbody className="border border-slate-200 ">
          {productsAddedToCart.map((product) => (
            <CartProduct product={product} key={product.ID} />
          ))}
        </tbody>
        <tfoot>
          <tr className="border border-slate-200 text-left flex flex-col md:block items-center">
            <td
              colSpan={"2"}
              className="p-2 flex items-center gap-3  flex-col md:block "
            >
              <input
                className="border border-slate-200 p-2 rounded-lg w-full"
                placeholder="code promo"
                type="text"
              />
              <Button className="font-semibold w-full">APPLIQUER UN CODE PROMO</Button>
            </td>
            <td colSpan={"2"} className="p-2 text-right w-full">
              <Button className="font-semibold w-full">METTRE A JOUR LE PANIER</Button>{" "}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function CartProduct({ product }) {
  const { productsAddedToCart, updateCart } = useStore();
  const { toast } = useToast();

  function deleteProductFromCart() {
    let newCart = productsAddedToCart.filter(
      (element) => element.ID !== product.ID
    );
    updateCart(newCart);
    toast({
      variant: "destructive",
      title: "Produits supprimer du panier",
      description: product.name,
    });
  }
  return (
    <tr className="border border-slate-200 text-left flex flex-col md:block items-center ">
      <td className="p-2 flex items-center gap-4 text-2xl text-slate-400">
        {" "}
        <button onClick={deleteProductFromCart}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
        <img className="w-24" src={product.Images} alt="" />{" "}
      </td>
      <td className="p-2"> {product.name} </td>
      <td className="p-2">$ {product.price} </td>
      <td className="p-2">
        <div className="flex justify-start items-center border border-solid border-slate-700 w-fit">
          <button
            className="bg-slate-200 border-r border-solid border-slate-700 px-3"
            // onClick={removeNumberOfProduct}
          >
            -
          </button>
          <p className="bg-white px-4"> 1 </p>
          <button
            className="bg-slate-200 border-l border-solid border-slate-700 px-3"
            // onClick={addNumberOfProduct}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-2">$ {product.price}</td>
    </tr>
  );
}

function TotalCart() {
  const { productsAddedToCart } = useStore();
  // const [totalPrice , setTotalPrice ] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(cartPriceSum(productsAddedToCart));
  }, [productsAddedToCart]);

  return (
    <div className="max-w-6xl m-auto p-7 border border-slate-200 mb-6">
      <table className="w-full h-96">
        <thead className="w-full text-2xl font-bold border-b border-slate-200">
          <td colSpan={"2"}>Panier Total</td>
        </thead>
        <tbody>
          <tr className="border-b border-slate-200 ">
            <td className="w-40">Sous-Total</td>
            <td className="">$ {totalPrice} </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td>Expedition</td>
            <td className="">
              <tr className="font-semibold">Kinshasa</tr>
              <tr>Livraison Gratuite</tr>
            </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td>TOTAL</td>
            <td>$ {totalPrice}</td>
          </tr>
        </tbody>
        <tfoot>
          <td colSpan={"2"}>
            <Button className="font-semibold w-full p-6">
              <Link to={"/checkout"}>COMMANDER</Link>
            </Button>
          </td>
        </tfoot>
      </table>
    </div>
  );
}

function EmptyCartMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pb-24">
      <p className="text-2xl">Votre panier est vide</p>
      <Button className="max-w-96">
        {" "}
        <Link to={"/boutique"}>Continuer vos achats</Link>{" "}
      </Button>
    </div>
  );
}
