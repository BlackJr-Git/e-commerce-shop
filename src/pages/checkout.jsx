import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Checkout() {
  return (
    <main className="bg-slate-100">
      <div className="max-w-6xl m-auto">
        <h1 className="text-4xl text-center font-bold py-12">
          Confirmation de la commande
        </h1>
        <div className="flex items-center gap-3 p-6 border-t-4 border-slate-600">
          <ion-icon name="person"></ion-icon>
          <p>Déjà client ?</p>{" "}
          <Link to={"./"}>Cliquez ici pour vous connecter</Link>
        </div>

        <div className="flex items-between justify-center">
          <div className="w-3/5 p-6">
            <h2 className="text-xl font-bold py-6">Details de facturation</h2>
            <form>
                <div className="flex justify-between gap-3">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="name">Nom *</label>
                        <input className="p-1" type="text" name="name"/>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="first-name">Prenom *</label>
                        <input className="p-1" type="text" name="first-name"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="country">Pays/Region *</label>
                    <select name="country" id="" className="p-1">
                        <option value="Congo-Kinshasa">Congo-Kinshasa</option>
                        <option value="Congo-Brazzaville">Congo-Brazzaville</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="adress">Adresse complète ( Numéro, Quartier, Commune )  *</label>
                    <input className="p-1" type="text" name="adress" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="adress-2">Bâtiment, Numéro d'appartement, etc. (facultatif)</label>
                    <input className="p-1" type="text" name="adress-2" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="city">Ville</label>
                    <input className="p-1" type="text" name="city" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="township">Province/Commune</label>
                    <input className="p-1" type="text" name="township" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone">Telephone</label>
                    <input className="p-1" type="text" name="phone" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone">Telephone</label>
                    <input className="p-1" type="text" name="phone" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="mail">Telephone</label>
                    <input className="p-1" type="email" name="mail" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="notes">Note de commande (facultatif) </label>
                    <textarea className="p-1" name="notes" id="" cols="30" rows="3"></textarea>
                </div>
            </form>
          </div>

          <div className=" w-2/5">
            <div className="max-w-6xl m-auto p-7 mb-6 border-2 border-slate-300">
              <table className="w-full ">
                <thead className="w-full font-bold border-b border-slate-200">
                  <td colSpan={"2"} className="py-6 text-xl">Votre commande </td>
                  <tr>
                    <td>Porduits</td>
                    <td>Sous-Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 ">
                    <td className="w-40 py-6">Sous-Total</td>
                    <td className=" py-6">$ 1000 </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-6">Expedition</td>
                    <td className="py-6">
                      <tr className="font-semibold">Kinshasa</tr>
                      <tr>Livraison Gratuite</tr>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-6">TOTAL</td>
                    <td className="py-6">$ 1000 </td>
                  </tr>
                </tbody>
                <tfoot>
                  <td colSpan={"2"}><Button className="font-semibold w-full p-6">COMMANDER</Button></td>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
