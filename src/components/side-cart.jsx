/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { useStore } from "@/appStore";
import { Link } from "react-router-dom";
import { cartPriceSum } from "@/utils";
import { useToast } from "./ui/use-toast";

function SideCart({ className, handleClick }) {
  const { productsAddedToCart, orderItems } = useStore();

  return (
    <div className={className}>
      {productsAddedToCart[0] ? (
        <>
          <div className="p-4 flex items-center justify-between border-b border-slate-200">
            <h3 className="font-semibold text-xl ">Panier</h3>
            <button
              className="flex items-center justify-center text-2xl px-3"
              onClick={handleClick}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <div className="h-full overflow-y-scroll overflow-x-hidden">
            {productsAddedToCart.map((product) => (
              <SideCartProduct product={product} key={product.ID} />
            ))}
          </div>

          <div className="h-14 border-t border-slate-200 px-3 flex items-center justify-between">
            <p className="font-semibold">Sous-total : </p>{" "}
            <p className="font-semibold">$ {cartPriceSum(orderItems)} </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 border-t border-slate-200 py-3">
            <button className="w-11/12 font-medium border border-slate-100 rounded-xl p-1 shadow-md">
              {" "}
              <Link className="w-full" onClick={handleClick} to={"/cart"}>
                {" "}
                Voir le panier{" "}
              </Link>
            </button>
            <button
              className="w-11/12 font-bold bg-primary p-2 rounded-xl shadow-lg"
              onClick={handleClick}
            >
              <Link className="w-full" onClick={handleClick} to={"/checkout"}>
                COMMANDER
              </Link>
            </button>
          </div>
        </>
      ) : (
        <EmptyCart handleClick={handleClick} />
      )}
    </div>
  );
}

export default SideCart;

function SideCartProduct({ product }) {
  const { productsAddedToCart, updateCart, orderItems, updateOrder } =
    useStore();
  const { toast } = useToast();

  function deleteProductFromCart() {
    const newCart = productsAddedToCart.filter(
      (item) => item.ID !== product.ID
    );
    const newOrder = orderItems.filter((item) => item.productId !== product.ID);

    updateOrder(newOrder);
    updateCart(newCart);

    // console.log(newCart);
    // console.log(newOrder);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    sessionStorage.setItem("order", JSON.stringify(newOrder));

    toast({
      variant: "destructive",
      title: "Produit supprimé du panier",
      description: product.name,
    });
  }

  const quantity =
    orderItems.find((item) => item.productId === product.ID)?.quantity || 0;

  return (
    <div className=" mx-3 flex items-center justify-between gap-4 border-b border-slate-200 p-2 w-full">
      <div className="flex gap-4">
        <div>
          <img className="w-16" src={product.Images} alt="" />
        </div>
        <div>
          <p className="font-semibold">{product.name}</p>
          <p className="">$ {product.price} </p>
          <p>Quantité : {quantity}</p>
        </div>
      </div>
      <button
        onClick={deleteProductFromCart}
        className="flex items-center justify-center mr-6 cursor-pointer w-5 h-full text-xl"
      >
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
}

function EmptyCart({ handleClick }) {
  return (
    <>
      <div className="p-4 flex items-center justify-between border-b border-slate-200">
        <h3 className="font-semibold text-xl ">Panier</h3>
        <button
          className="flex items-center justify-center text-2xl px-3"
          onClick={handleClick}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <div className="h-full overflow-y-scroll overflow-x-hidden flex items-center justify-center ">
        <h2 className="text-2xl">Votre panier est vide</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 border-t border-slate-200 py-3">
        <Button className="w-11/12 font-bold">
          {" "}
          <Link to={"/boutique"}>Continuer vos achats</Link>{" "}
        </Button>
      </div>
    </>
  );
}
