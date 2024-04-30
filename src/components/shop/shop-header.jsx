/* eslint-disable react/prop-types */
import { ProductSearchBar } from "../";

function ShopHeader({ searchProduct }) {
  return (
    <section className="rounded-2xl w-full flex  items-center justify-center gap-6 px-3">
      <ProductSearchBar searchProduct={searchProduct} />
    </section>
  );
}

export default ShopHeader;
