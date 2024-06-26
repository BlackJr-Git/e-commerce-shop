/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { useStore } from "@/appStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cartPriceSum } from "@/utils";
import { AnimatedPages } from "@/components";
import { useToast } from "@/components/ui/use-toast";
import { TrashIcon } from "@heroicons/react/24/outline";

function Cart() {
  const { productsAddedToCart } = useStore();
  return (
    <AnimatedPages>
      <main className="bg-slate-100">
        <h1 className="text-4xl text-center font-bold pt-32 ">Panier</h1>

        <div className="max-w-7xl m-auto md:flex justify-center gap-6 py-12 ">
          {productsAddedToCart[0] ? <CartTable /> : <EmptyCartMessage />}
          {productsAddedToCart[0] ? <TotalCart /> : <></>}
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Cart;

function CartTable() {
  const { productsAddedToCart } = useStore();
  return (
    <div className="rounded-2xl md:w-[80%] w-[90%] m-auto">
      <div className="max-w-6xl w-full m-auto ">
        <div className="mx-3 w-full ">
          <div className="border rounded-xl border-slate-200 items-center flex justify-center flex-col md:flex-row">
            <p className="md:w-[30%] p-3">Produit</p>
            <p className="md:w-[20%] p-3">Prix</p>
            <p className="md:w-[20%] p-3">Quantité</p>
            <p className="md:w-[20%] p-3">Sous-Total</p>
            <p className="md:w-[10%] p-3"></p>
          </div>
        </div>
        <div className="max-w-6xl w-full m-auto flex flex-col gap-3 my-3 mx-3">
          {productsAddedToCart.map((product) => (
            <CartProduct product={product} key={product.ID} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CartProduct({ product }) {
  const { productsAddedToCart, updateCart, orderItems, updateOrder } =
    useStore();
  const { toast } = useToast();
  const quantity =
    orderItems.find((item) => item.productId === product.ID)?.quantity || 0;
  const [subTotal, setSubTotal] = useState(product.price * quantity);

  function deleteProductFromCart() {
    updateOrder(orderItems.filter((item) => item.productId !== product.ID));
    updateCart(productsAddedToCart.filter((item) => item.ID !== product.ID));
    toast({
      variant: "destructive",
      title: "Produits supprimer du panier",
      description: product.name,
    });
  }

  // useEffect(() => {
  //   setQuantity(1);
  //   setSubTotal(product.price);
  // })

  function addQuantity() {
    const newOrder = orderItems.find((item) => item.productId === product.ID);
    newOrder.quantity++;
    setSubTotal(newOrder.price * newOrder.quantity);
  }
  function removeNumberOfProduct() {
    if (quantity > 1) {
      const newOrder = orderItems.find((item) => item.productId === product.ID);
      newOrder.quantity--;
      setSubTotal(newOrder.price * newOrder.quantity);
    }
  }
  return (
    <div className=" flex border border-slate-300 text-left  items-center  w-full rounded-xl ">
      <div className="flex items-center gap-3 h-full p-3  md:w-[30%] ">
        <div className="flex items-center justify-left h-full">
          <img
            className=" md:w-20 w-40 rounded-xl"
            src={product.Images}
            alt=""
          />
        </div>
        <div>
          <p className="font-semibold">{product.name}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-[70%] items-center">
        <div className="md:w-[30%]  h-full flex items-center p-3">
          <p className="font-semibold">{product.price}</p>
        </div>

        <div className="md:w-[30%]  h-full flex items-center p-3">
          <div className="flex justify-start items-center border border-solid border-slate-700 w-fit rounded-xl">
            <button
              className="bg-slate-200 border-r border-solid border-slate-700 px-3 rounded-xl"
              onClick={removeNumberOfProduct}
            >
              -
            </button>
            <p className="bg-white px-4 rounded-xl"> {quantity} </p>
            <button
              className="bg-slate-200 border-l border-solid border-slate-700 px-3 rounded-xl"
              onClick={addQuantity}
            >
              +
            </button>
          </div>
        </div>

        <div className="md:w-[30%]  h-full flex items-center p-3">
          <p className="font-semibold">{subTotal}</p>
        </div>

        <div className="md:w-[10%] h-full flex items-center justify-center">
          <TrashIcon
            className="w-8 h-8 cursor-pointer"
            onClick={deleteProductFromCart}
          />
        </div>
      </div>
    </div>
  );
}

function TotalCart() {
  const { orderItems } = useStore();

  return (
    <div className="max-w-6xl p-7 border border-slate-200 rounded-2xl mx-3 pt-24">
      <table className="w-full h-96">
        <thead className="w-full text-2xl font-bold border-b border-slate-200">
          <tr><td colSpan={"2"}>Panier Total</td></tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-200 ">
            <td className="w-40">Sous-Total</td>
            <td className="">$ {cartPriceSum(orderItems)} </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td>Expedition</td>
            <td className="">
              <div className="font-semibold">Kinshasa</div>
              <div>Livraison Gratuite</div>
            </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td>TOTAL</td>
            <td>$ {cartPriceSum(orderItems)}</td>
          </tr>
        </tbody>
        <tfoot className="w-full py-3">
          <tr colSpan={"2"} className="w-full mt-3">
            <td className="w-full" colSpan={"2"}>
              <Button className="font-semibold w-full p-6">
                <Link to={"/checkout"}>COMMANDER</Link>
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function EmptyCartMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pb-24 h-[45vh] pt-32">
      <p className="text-2xl">Votre panier est vide</p>
      <Button className="max-w-96">
        {" "}
        <Link to={"/boutique"}>Continuer vos achats</Link>{" "}
      </Button>
    </div>
  );
}
