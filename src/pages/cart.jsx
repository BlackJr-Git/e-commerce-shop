import { Button } from "@/components/ui/button";
import { useState } from "react";

function Cart() {
  return (
    <main className="bg-slate-100">
      <div className="max-w-7xl m-auto ">
        <h1 className="text-4xl text-center font-bold py-12">Panier</h1>
        <CartTable />
      </div>
    </main>
  );
}

export default Cart;

function CartTable() {
  // const [numberOfProduct, setNumberOfProduct] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(100)

  // function addNumberOfProduct(e) {
  //   e.preventDefault()
  //   setNumberOfProduct(numberOfProduct + 1)
  //   setTotalPrice(totalPrice + product.price )
  // }
  // function removeNumberOfProduct(e) {
  //   if (numberOfProduct !== 1) {
  //     e.preventDefault()
  //     setNumberOfProduct(numberOfProduct - 1)
  //     setTotalPrice(totalPrice - product.price )
  //   }
  // }
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
          <CartProduct />
        </tbody>
        <tfoot>
          <tr className="border border-slate-200 text-left ">
            <td></td>
            <td className="p-2 flex">
              <input type="text" /> <Button>APPLIQUER UN CODE PROMO</Button>
            </td>
            <td></td>
            <td className="p-2 text-right">
              <Button>METTRE A JOUR LE PANIER</Button>{" "}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function CartProduct(params) {
  return(
    <tr className="border border-slate-200 text-left ">
            <td className="p-2">Poids</td>
            <td className="p-2"> Iphone 11 pro </td>
            <td className="p-2">$ 450</td>
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
            <td className="p-2">$ 450</td>
    </tr>
  )
}