/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "../ui/toast";

function Pcard({ productData }) {
  const { productsAddedToCart, updateCart } = useStore();
  const { toast } = useToast();
  function addToCart() {
    const newCart = [...productsAddedToCart, productData];
    updateCart(newCart);
    toast({
      title: "Produit ajouté au panier avec succes",
      description: productData.name,
      action: (
        <ToastAction altText="See Cart">
          <Link to={"./cart"}>Voir le Panier</Link>
        </ToastAction>
      ),
    });
  }

  return (
    <Card className="md:w-72 w-44 flex flex-col justify-between items-center">
      <CardContent className='w-full'>
        <Link to={`/produits/${productData.UGS}`}>
          <img
            className="rounded-2xl"
            src={productData.images}
            alt={productData.name}
          />
        </Link>
      </CardContent>
      <CardHeader className='w-full'>
        <CardTitle className="font-bold text-sm md:text-xl">
          {" "}
          {productData.name}{" "}
        </CardTitle>
        <CardDescription className="text-lg font-semibold w-full">
          {" "}
          {`$ ${productData.price}`}{" "}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-center w-full">
        <Button className="font-bold text-xs md:text-base w-full" onClick={addToCart}>
          Ajouter au Panier
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Pcard;
