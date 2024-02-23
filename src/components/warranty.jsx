import { WarrantyCard } from ".";
import {
    ClipboardDocumentCheckIcon,
    CreditCardIcon,
    CheckBadgeIcon,
    TruckIcon,
} from '@heroicons/react/24/outline'

function Warranty() {
  return (
    <section className="bg-slate-100 p-24">
      <div className="m-auto max-w-7xl md:flex-row flex flex-col items-center justify-center gap-14 ">
        <div className="md:flex-row flex-col flex gap-3"> 
          <div className="flex flex-col gap-3">
            <WarrantyCard title={"Produits Garanties"} description={"Tout nos produits sont certifiés et garantie 1 ans"} icone={<ClipboardDocumentCheckIcon className="text-teal-500"/>} />
            <WarrantyCard title={'Meilleure qualité'} description={'Nous offrons la meilleurs qualité de produits'} icone={<CheckBadgeIcon className="text-teal-500"/>} />
          </div>
          <div className="flex flex-col gap-3">
            <WarrantyCard title={"Livraison Gratuite"} description={"La livraison est gratuite et rapide"} icone={<TruckIcon className="text-teal-500"/>} />
            <WarrantyCard title={'Paiement sécurisé'} description={"Payez a la livraison pour toute vos commande"} icone={<CreditCardIcon className="text-teal-500"/>}/>
          </div>
        </div>
        <div className="py-6 ">
          <h3 className="text-4xl font-bold">Acheter en toute securité</h3>
          <p>
            Faites vos achats pour vos produits informatiques en toute securité,
            rapidement et efficacement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Warranty;
