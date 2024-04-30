/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
// import { title } from "process";

function ServiceCard({ serviceTitle, description, icon, link }) {
  return (
    <Card className="md:w-80 w-72 flex flex-1 flex-col justify-between">
      <CardContent className="mt-6">
        <p className="text-6xl font-extrabold text-center ">
          <ion-icon name={icon}></ion-icon>
        </p>
      </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-3xl text-center">
          {serviceTitle}
        </CardTitle>
        <CardDescription className="text-lg font-semibold text-center">
          {" "}
          {description}{" "}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-center">
        <Link to={link} className="w-full">
          <Button className="font-bold w-full">En Savoir Plus</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
