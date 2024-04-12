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
    <Card className="flex flex-1 max-w-72 flex-col justify-between items-center md:p-6 p-1">
      <CardContent className='w-full p-0'>
        <Link to={`/produits/${productData.ID}`}>
          <img
            className="rounded-2xl"
            src={productData.Images}
            alt={productData.name}
          />
        </Link>
      </CardContent>
      <CardHeader className='w-full p-0'>
        <CardTitle className="font-bold text-sm md:text-xl px-2">
          {" "}
          {productData.name}{" "}
        </CardTitle>
        <CardDescription className="text-xl font-semibold w-full px-2 py-3">
          {" "}
          {`$ ${productData.price}`}{" "}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-center w-full p-1">
        <Button className="font-bold text-xs md:text-base w-full" onClick={addToCart}>
          Ajouter au Panier
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Pcard;
