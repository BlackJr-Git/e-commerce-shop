/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useStore } from "@/appStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


function Pcard({ productData }) {
  const { productsAddedToCart , updateCart } = useStore();

  function addToCart() {
    const newCart = [...productsAddedToCart, productData ]
    updateCart(newCart) 
  }

  return (
    <Card className="w-60">
      <CardContent>
        <Link to={`/produits/${productData.name}`}>
          <img
            className="rounded-2xl"
            src={productData.images}
            alt={productData.name}
          />
        </Link>
      </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-xl ">
          {" "}
          {productData.name}{" "}
        </CardTitle>
        <CardDescription className="text-lg font-semibold">
          {" "}
          {`$ ${productData.price}`}{" "}
        </CardDescription>
      </CardHeader>
      <CardFooter  className="flex items-center justify-center">
        <Button className="font-bold" onClick={addToCart}  >Ajouter au Panier</Button>
      </CardFooter>
    </Card>
  );
}


export default Pcard;