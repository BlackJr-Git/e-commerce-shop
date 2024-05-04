import {
  ShopHeader,
  ProductFilter,
  Products,
  AnimatedPages,
  Loading,
  PaginationComponent,
} from "../components";
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const baseURL = `${
    import.meta.env.VITE_API_URI
  }/api/products?number=12&pages=${pages}`;
  const productsDataURI = search
    ? `${
        import.meta.env.VITE_API_URI
      }/api/products?number=12&pages=${pages}&name=${search}`
    : baseURL;

  useEffect(() => {
    const loadProductsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(productsDataURI);
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductsData();
  }, [productsDataURI]);

  function searchProduct(data) {
    setSearch(data.search);
  }

  return (
    <AnimatedPages>
      <main className="max-w-7xl xl:max-w-screen-2xl m-auto md:flex  items-start gap-6 mb-20 relative pt-32">
        <div className="bg-slate-200 w-1/6 h-screen rounded-2xl hidden md:block py-12">
          <ShopHeader searchProduct={searchProduct}></ShopHeader>
          <ProductFilter />
        </div>
        <div className="md:w-5/6 mx-auto w-full h-full">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Products productData={products} />
              <PaginationComponent setPages={setPages} pages={pages} />
            </>
          )}
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Shop;
