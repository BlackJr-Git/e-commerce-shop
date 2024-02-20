/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { useStore } from "@/appStore";
import { Link } from "react-router-dom";

function SideCart({ className, handleClick }) {
  const { productsAddedToCart } = useStore();  
  // console.log(productsAddedToCart);  
  let totalPrice = 0 
  productsAddedToCart.forEach(product => {
    totalPrice = totalPrice + product.price
  });
  return (
    <div className={className}>
      {productsAddedToCart != [] ? (
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
            <p className="font-semibold">Sous-total : </p> <p>$ {totalPrice} </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 border-t border-slate-200 py-3">
            <Button variant="outline" className="w-11/12 font-medium">
              <Link to={"/cart"}>Voir le panier</Link> 
            </Button>
            <Button className="w-11/12 font-bold"> <Link to={"/cart"}>COMMANDER</Link> </Button>
          </div>
        </>
      ) : (
        <div>
          <h2>Votre Panier est vide</h2>
        </div>
      )}
    </div>
  );
}

export default SideCart;

function SideCartProduct({ product }) {
  return (
    <div className=" mx-3 flex items-center gap-4 border-b border-slate-200 p-2 w-full">
      <div>
        <img className="w-16" src={product.images} alt="" />
      </div>
      <div>
        <p className="font-semibold">{product.name}</p>
        <p>Couleur : rouge</p>
        <p className="">$ {product.price} </p>
      </div>
    </div>
  );
}
