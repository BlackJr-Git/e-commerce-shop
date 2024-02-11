import { ProductCard } from ".";
import { productsData } from "@/data";

function Products() {
  return (
    <section className="max-w-7xl m-auto my-24">
      <h2 className="text-4xl font-bold text-center mb-24">Nos Produits</h2>
      <div className="flex gap-6 justify-center flex-wrap m-auto">
        {productsData.map((product) => (
          <ProductCard productData={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default Products ; 
