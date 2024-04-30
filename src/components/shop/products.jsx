/* eslint-disable react/prop-types */
import { ProductCard } from "..";

function Products({ title, productData }) {
  return (
    <section className="max-w-7xl m-auto pb-24">
      {title && (
        <h2 className="text-4xl font-bold py-24 text-center"> {title} </h2>
      )}
      <div className="flex  items-center mx-1">
        <div className="flex gap-2 md:gap-6  mx-2 flex-wrap max-w-7xl ">
          {productData &&
            productData.map((product) => (
              <ProductCard productData={product} key={product.ID} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
