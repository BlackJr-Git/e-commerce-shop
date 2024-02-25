/* eslint-disable react/prop-types */
// import { Card } from "./ui/card"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function ServiceCard({icon, serviceTitle, description}) {
  return (
    <Card className="w-1/4">
      <CardContent className="mt-6 text-left">
        <p className="text-6xl font-extrabold text-left ">
          <ion-icon name="cart-outline"></ion-icon>
        </p>
      </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-3xl text-center">Produits</CardTitle>
        <CardDescription className="text-lg font-semibold text-center"> Nous développons des produits sur les nouvelles technologie pour vous faciliter la vie. </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-center w-full">
        <Button variant="outline" className='w-full font-bold'> En Savoir Plus <ion-icon name="arrow-forward-outline"></ion-icon></Button>
      </CardFooter>
    </Card>
  )
}

export default ServiceCard ;
