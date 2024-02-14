import { Button } from "./ui/button";

function SideCart() {
  return (
    <div className="h-screen w-72 bg-slate-200 fixed top-0 right-0 flex flex-col justify-between pb-6">
      <div className="p-4 flex items-center justify-between border-b border-slate-500">
        <h3 className="font-semibold text-xl ">Panier</h3>
        <button className="flex items-center justify-center text-2xl px-3"><ion-icon name="close-outline"></ion-icon></button>
      </div>

      <div>

      </div>

      <div>
        <Button>COMMANDER</Button>
      </div>
    </div>
  )
}

export default SideCart ;
