/* eslint-disable react/prop-types */
import { ProductCard } from "..";

// let productsData = data.filter((product) => product.price != "" ) ;

function Products({ title, productData }) {
  return (
    <section className="max-w-7xl m-auto pb-24">
      {title && (
        <h2 className="text-4xl font-bold py-24 text-center"> {title} </h2>
      )}
      <div className="flex justify-center items-center mx-1">
        <div className="flex gap-2 md:gap-6 justify-center mx-2 flex-wrap max-w-7xl ">
          {productData.map((product) => (
            <ProductCard productData={product} key={product.ID} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
