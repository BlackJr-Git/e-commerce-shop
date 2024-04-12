import SingleProductCard from "@/components/shop/single-product-card";
import { Products, SingleProductInfo,Loading } from "@/components";
import { useParams } from "react-router-dom";
import { AnimatedPages } from "@/components";
import { fetchData } from "@/utils/fetch-data";
import { useState, useEffect } from "react";
// import productsData from "@/data"; 

function SingleProduct() {
  const { ID } = useParams();  
  // const [productsData, setProductData] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const productsDataURI = `http://localhost:3000/api/products/${ID}`;

  useEffect(() => {
    const loadProductsData = async () => {
      try {
        const data = await fetchData(productsDataURI);
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // setError(true);
      }
    };

    loadProductsData();
  }, [productsDataURI]);

  // useEffect(() => {
  //   console.log(product);
  // }, [product]);

  return (
    <AnimatedPages>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="">
        <div className="bg-slate-100">
          <SingleProductCard product={product} />
        </div>

        <div>
          <SingleProductInfo product={product} />
        </div>

        <Products
          productData={[]}
          title={"Produits similaires"}
        />
      </main>
      )}
    </AnimatedPages>
  );
}

export default SingleProduct;
