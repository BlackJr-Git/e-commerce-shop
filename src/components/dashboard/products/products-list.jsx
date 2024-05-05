import { DashboardProductCard } from "..";
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";
import { Loading } from "@/components";
import { PaginationComponent } from "@/components";

//

function ProductsList({ setProduct , search }) {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);

  const baseURL = `${import.meta.env.VITE_API_URI}/api/products?number=8&pages=${pages}`;
  const productURI = search
    ? `h${import.meta.env.VITE_API_URI}/api/products?number=8&pages=${pages}&name=${search}`
    : baseURL;

  useEffect(() => {
    const loadProductsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(productURI);
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductsData();
  }, [productURI]);

  return (
    <>
    <div className="bg-slate-50 h-[75%] w-[70%] rounded-2xl p-3 flex gap-3 flex-wrap overflow-y-scroll drop-shadow-md">
      {isLoading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <DashboardProductCard
            productData={product}
            key={product.ID}
            setProduct={setProduct}
          />
        )) 
      )}
      <PaginationComponent setPages={setPages} pages={pages} />
    </div>
    </>
  );
}

export default ProductsList;


