// import { title } from "process";
import { ProductCard } from ".";
// import { productsData } from "@/data";
// import { fetchData } from '../utils/fetch-data'

// const data = await fetchData()

// let productsData = data.filter((product) => product.price != "" ) ;

function Products({ title , productData }) {
  return (
    <section className="max-w-7xl m-auto pb-24">
      {title && <h2 className="text-4xl font-bold py-24 text-center"> {title} </h2>}
      <div className="flex justify-center items-center">
        <div className="flex gap-6 justify-center flex-wrap max-w-7xl">
          {productData.map((product) => (
            <ProductCard productData={product} key={product.ID} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
