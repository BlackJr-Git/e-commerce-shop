// import { title } from "process";
import { ProductCard } from ".";
// import { productsData } from "@/data";
// import { fetchData } from '../utils/fetch-data'

// const data = await fetchData()

// let productsData = data.filter((product) => product.price != "" ) ;

function Products({ title , productData }) {
  return (
    <section className="max-w-7xl m-auto my-24 ">
      <h2 className="text-4xl font-bold mb-24 text-center"> {title} </h2>
      <div className="flex justify-center items-center">
        <div className="flex gap-7 justify-start flex-wrap max-w-6xl">
          {productData.map((product) => (
            <ProductCard productData={product} key={product.ID} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
