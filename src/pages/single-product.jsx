import SingleProductCard from "@/components/single-product-card" ;
import { productsData } from "@/data";
import { Products , SingleProductInfo } from "@/components";
import { useParams } from "react-router-dom";
// import productsData from "@/data";



function SingleProduct() {
const { name } = useParams() ;

let product = productsData.find((product) => product.name === name) ; 

  return (
    <main className="">
      <div className="bg-slate-200">
        <SingleProductCard product={product} />
      </div>

      <div>
      <SingleProductInfo product={product} />  
      </div>

      <Products productData={productsData.slice(1,5)} title={"Produits similaires"} />
    </main>
  )
}

export default SingleProduct ;
