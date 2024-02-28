/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
// import { title } from "process";

function ServiceCard({serviceTitle,description,icon}) {
  return (
    <Card className="md:w-80 w-72 flex flex-col justify-between">
      <CardContent className="mt-6">
        <p className="text-6xl font-extrabold text-center ">
          <ion-icon name={icon}></ion-icon>
        </p>
      </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-3xl text-center">{serviceTitle}</CardTitle>
        <CardDescription className="text-lg font-semibold text-center"> {description} </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-center">
        <Button className='font-bold'>En Savoir Plus</Button>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard ; 
