import { DashboardProductCard } from "..";
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";
import { Loading } from "@/components";

//

function ProductsList({ setProduct }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const productsDataURI = `http://localhost:3000/api/products?number=12&pages=${pages}`;

  useEffect(() => {
    const loadProductsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(productsDataURI);
        setProducts(data.products);
        // console.log("products :", data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductsData();
  }, [productsDataURI]);

  return (
    <div className="bg-slate-50 h-[90%] w-[70%] rounded-2xl p-3 flex gap-3 flex-wrap overflow-y-scroll">
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
    </div>
  );
}

export default ProductsList;
