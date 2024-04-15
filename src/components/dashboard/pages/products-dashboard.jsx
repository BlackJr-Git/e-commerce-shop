import { ProductsList, UpdateProducts } from "..";
import { DashboardHeader } from "../..";
// import { Input } from "@/components/ui/input";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import ImageUpload from "@/utils/image-upload";

const productsData = {
  ID: 51,
  type: "variable",
  UGS: "",
  name: "IPhone 11",
  isPublished: 1,
  isHighlighted: 1,
  isVisible: "visible",
  shortDescription: "",
  description:
    "l'<b>iPhone 11</b>\u00a0se distingue de son pr\u00e9d\u00e9cesseur par l'utilisation d'un double module cam\u00e9ra. On trouve \u00e0 son dos un ultra grand angle en\u00a0compl\u00e9ment de l'objectif principal, chacun d'eux \u00e9tant associ\u00e9 \u00e0 un capteur de 12 Mpix. L'iPhone 11 est \u00e9galement \u00e9quip\u00e9 du nouveau processeur Apple A13 Bionic et utilise un capteur Face ID am\u00e9lior\u00e9. Il est propos\u00e9 en plusieurs couleurs originales.",
  isAvailable: 1,
  weigth: 194,
  length: 150.9,
  width: 75.7,
  height: 8.3,
  price: 430,
  Categories: "Apple, Apple > Iphone, Smartphone",
  tag: "Iphone 11",
  Images:
    "https://res.cloudinary.com/devhqdrwl/image/upload/v1711294902/Nawtech%20products/Iphones/iphone-11-nawtech_arc4ul.jpg",
  Parent: "",
  Groups: "",
  suggestedProducts: [],
};

function ProductsDashboard() {
  return (
    <div className="h-full w-full overflow-hidden">
      <DashboardHeader title={"Products"} />
      <div className="h-full w-full flex gap-3">
        <ProductsList />
        <div className="h-[90%] w-[30%] bg-slate-50 rounded-2xl p-3 flex flex-col gap-3">
          <div className="w-full bg-red-500 rounded-xl">
            <img className="rounded-xl" src={productsData.Images} alt="" />
            {/* <input type="file" className="rounded-xl w-full"  src={productsData.Images}/> */}
            {/* <ImageUpload /> */}
          </div>
          <UpdateProducts productsData={productsData} />
        </div>
      </div>
    </div>
  );
}

export default ProductsDashboard;
