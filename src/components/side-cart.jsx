import { Button } from "./ui/button";
import {iphone13} from '../assets'

function SideCart({className , handleClick}) {
  return (
    <div className={className}>
      <div className="p-4 flex items-center justify-between border-b border-slate-200">
        <h3 className="font-semibold text-xl ">Panier</h3>
        <button className="flex items-center justify-center text-2xl px-3" onClick={handleClick}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <div className="h-full overflow-y-scroll overflow-x-hidden">
        <SideCartProduct />
        <SideCartProduct />
      </div>

      <div className="h-14 border-t border-slate-200 px-3 flex items-center justify-between">
        <p className="font-semibold">Sous-total : </p> <p>$ 1239</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 border-t border-slate-200 py-3">
        <Button variant="outline" className="w-11/12 font-medium">Voir le panier</Button>
        <Button className="w-11/12 font-bold">COMMANDER</Button>
      </div>
    </div>
  );
}

export default SideCart ;


function SideCartProduct() {
  return (
    <div className=" mx-3 flex items-center gap-4 border-b border-slate-200 p-2 w-full">
      <div>
        <img className="w-16" src={iphone13} alt="" />
      </div>
      <div>
        <p className="font-semibold">Iphone 13</p>
        <p>Couleur : rouge</p>
        <p className="">$ 549</p>
      </div>
    </div>
  )
}
