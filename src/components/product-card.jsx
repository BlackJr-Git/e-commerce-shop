/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="border-2 divide-slate-900 w-60 h-96 rounded-2xl flex flex-col justify-between">
      <div>
        <img
          className="rounded-2xl"
          src="src\assets\images\products\Samsung\14.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-10 items-center p-4">
        <div className="flex flex-col ">
          <h4 className="font-bold text-xl">Samsung S23</h4>
          <p className=" text-lg font-semibold">450 $</p>
        </div>
        <Button>
          Ajouter au panier <ion-icon name="bag-add-outline"></ion-icon>
        </Button>
      </div>
    </div>
  );
}

export default Pcard;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Pcard({ productData }) {
  return (
    <Card className="w-64">
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
      <CardFooter className="flex items-center justify-center">
        <Button className="font-bold">Ajouter au Panier</Button>
      </CardFooter>
    </Card>
  );
}
