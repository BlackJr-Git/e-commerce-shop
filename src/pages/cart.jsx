/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { useStore } from "@/appStore";
import { useState } from "react";

function Cart() {
  return (
    <main className="bg-slate-100">
      <div className="max-w-7xl m-auto ">
        <h1 className="text-4xl text-center font-bold py-12">Panier</h1>
        <CartTable />
        <div className="w-full flex items-center justify-center max-w-6xl m-auto">
          <div className="w-2/4"></div>
          <div className="w-2/4">
            <TotalCart />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;

function CartTable() {
  const { productsAddedToCart } = useStore();
  return (
    <div className="py-12">
      <table className="max-w-6xl w-full m-auto ">
        <thead className="border border-slate-200 bg-slate-50">
          <tr className="border border-slate-200 text-left ">
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
          <tr className="border border-slate-200 text-left ">
            
            <td colSpan={"2"} className="p-2 flex items-center gap-3">
              <input
                className="border border-slate-200 p-2 rounded-lg"
                placeholder="code promo"
                type="text"
              />
              <Button className="font-semibold">APPLIQUER UN CODE PROMO</Button>
            </td>
            <td colSpan={"2"} className="p-2 text-right">
              <Button className="font-semibold">METTRE A JOUR LE PANIER</Button>{" "}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function CartProduct({ product }) {
  return (
    <tr className="border border-slate-200 text-left ">
      <td className="p-2 flex items-center gap-4 text-2xl text-slate-400">
        {" "}
        <ion-icon name="close-circle-outline"></ion-icon>
        <img className="w-24" src={product.images} alt="" />{" "}
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
  let totalPrice = 0 
  productsAddedToCart.forEach(product => {
    totalPrice = totalPrice + product.price
  });

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
          <td colSpan={"2"}><Button className="font-semibold w-full p-6">COMMANDER</Button></td>
        </tfoot>
      </table>
    </div>
  );
}
