

function ProductSearchBar() {
  return (
    <form className="flex flex-col gap-2">
        <input className='w-60 rounded-lg h-8 p-2' placeholder="Rechercher un produit" type="search" />
        <button className="bg-primary text-primary-foreground shadow w-60 hover:bg-primary/70 rounded-lg font-semibold" >Rechercher</button>
    </form>
  )
}

export default ProductSearchBar ;
