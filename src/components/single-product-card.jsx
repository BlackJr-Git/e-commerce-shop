import { useState } from "react";
import { Button } from "./ui/button";
import { useStore } from "@/appStore";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { Link } from "react-router-dom";

function SingleProductCard({ product }) {
  const { productsAddedToCart, updateCart } = useStore();
  const { toast } = useToast();

  function addToCart() {
    const newCart = [...productsAddedToCart, product];
    updateCart(newCart);
    toast({
      title: "Produit ajouté au panier avec succes",
      description: product.name,
      action: <ToastAction altText="See Cart"><Link to={"./cart"}>Voir le Panier</Link></ToastAction>
    });
  }
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  function addNumberOfProduct(e) {
    e.preventDefault();
    setNumberOfProduct(numberOfProduct + 1);
    setTotalPrice(totalPrice + product.price);
  }
  function removeNumberOfProduct(e) {
    if (numberOfProduct !== 1) {
      e.preventDefault();
      setNumberOfProduct(numberOfProduct - 1);
      setTotalPrice(totalPrice - product.price);
    }
  }

  const [totalPrice, setTotalPrice] = useState(product.price);

  return (
    <div className="md:flex-row flex-col flex justify-center gap-6 py-12 max-w-7xl m-auto">
      <div className=" w-10/12  md:w-4/12 m-auto">
        <img className="rounded-2xl" src={product.images} alt={product.name} />
      </div>
      <div className="w-10/12 md:w-4/12 m-auto">
        <div className="flex items-start flex-col justify-start gap-7 pb-12 border-b border-solid border-slate-700">
          <h3 className="text-3xl m-auto md:m-0"> {product.name} </h3>
          <p className="flex items-center justify-start gap-6 m-auto md:m-0">
            {" "}
            <span className="text-3xl font-bold">$ {totalPrice}</span> +
            Livraison gratuite{" "}
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-start gap-6 py-6 mb-6 border-b border-solid border-slate-700">
          <div className="flex justify-start items-center border border-solid border-slate-700 w-fit">
            <button
              className="bg-slate-200 border-r border-solid border-slate-700 px-3"
              onClick={removeNumberOfProduct}
            >
              -
            </button>
            <p className="bg-white px-4"> {numberOfProduct} </p>
            <button
              className="bg-slate-200 border-l border-solid border-slate-700 px-3"
              onClick={addNumberOfProduct}
            >
              +
            </button>
          </div>
          <div>
            <Button
              className="w-50 font-bold text-lg px-10"
              onClick={addToCart}
            >
              Ajouter au panier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard;
