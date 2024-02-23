import {ProductSearchBar} from "../"

function ShopHeader() {
  return (
    <section className='bg-black h-40 rounded-2xl w-full shop-header flex  items-center justify-center gap-6 mb-12'>
      {/* <h1 className="text-4xl font-bold ">Boutique</h1> */}
      <ProductSearchBar />
    </section>
  )
}

export default ShopHeader ;
