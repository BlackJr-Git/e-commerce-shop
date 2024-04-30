/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function DashboardProductCard({ productData, setProduct }) {
  // console.log(productData.id);
  function displayProductsDetails() {
    setProduct(productData);
  }
  return (
    <Card
      className="flex flex-1  min-w-48 max-w-48 max-h-72 flex-col justify-between items-center p-1"
      onClick={displayProductsDetails}
    >
      <CardContent className="w-full p-0">
        <img
          className="rounded-2xl"
          src={productData.Images}
          alt={productData.name}
        />
      </CardContent>
      <CardHeader className="w-full p-0">
        <CardTitle className="font-bold text-center text-sm md:text-base px-2">
          {productData.name}{" "}
        </CardTitle>
        <CardDescription className="text-center text-base font-semibold w-full px-2 py-3">
          {`$ ${productData.price}`}{" "}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-center w-full p-1"></CardFooter>
    </Card>
  );
}

export default DashboardProductCard;
