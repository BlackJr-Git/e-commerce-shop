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
import { useToast } from "@/components/ui/use-toast"



function Pcard({ productData }) {
  const { productsAddedToCart , updateCart } = useStore();
  const { toast } = useToast() 
  function addToCart() {
    const newCart = [...productsAddedToCart, productData ]
    updateCart(newCart) 
    toast({
      title: "Produit ajouté au panier avec succes",
      description: productData.name ,
    })
  }

  return (
    <Card className="w-72">
      <CardContent>
        <Link to={`/produits/${productData.UGS}`}>
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