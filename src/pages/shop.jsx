import {
  ShopHeader,
  ProductFilter,
  Products,
  AnimatedPages,
  Loading,
} from "../components";
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch-data";

function Shop() {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const productsDataURI = `http://localhost:3000/api/products?number=12&pages=${pages}`;

  useEffect(() => {
    const loadProductsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(productsDataURI);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductsData();
  }, [productsDataURI]);
  function searchProduct(data) {
    console.log(data.search);
    setProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(data.search.toLowerCase())
      )
    );
  }

  return (
    <AnimatedPages>
      <main className="max-w-7xl xl:max-w-screen-2xl m-auto md:flex  items-start gap-6 mb-20 relative pt-32">
        <div className="bg-slate-200 w-1/6 h-screen rounded-2xl hidden md:block ">
          <ProductFilter />
        </div>
        <div className="md:w-5/6 mx-auto w-full h-full">
          <ShopHeader searchProduct={searchProduct}></ShopHeader>

          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Products productData={products.products} />
              <PaginationComponent setPages={setPages} pages={pages} />
            </>
          )}
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Shop;

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationComponent({ setPages, pages }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setPages(pages - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPages(1)}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPages(2)}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPages(3)}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => setPages(pages + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
