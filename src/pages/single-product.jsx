import SingleProductCard from "@/components/shop/single-product-card";
import { productsData } from "@/data";
import { Products, SingleProductInfo } from "@/components";
import { useParams } from "react-router-dom";
import { AnimatedPages } from "@/components";
// import productsData from "@/data";

function SingleProduct() {
  const { UGS } = useParams();

  let product = productsData.find((product) => product.UGS === UGS);

  return (
    <AnimatedPages>
      <main className="">
        <div className="bg-slate-100">
          <SingleProductCard product={product} />
        </div>

        <div>
          <SingleProductInfo product={product} />
        </div>

        <Products
          productData={productsData.slice(1, 5)}
          title={"Produits similaires"}
        />
      </main>
    </AnimatedPages>
  );
}

export default SingleProduct;
