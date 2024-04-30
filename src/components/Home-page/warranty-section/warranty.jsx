import { WarrantyCard } from "../..";
import {
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  CheckBadgeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

function Warranty() {
  return (
    <section className="bg-slate-100 py-24 px-6">
      <div className="m-auto max-w-7xl xl:max-w-screen-2xl md:flex-row flex flex-col-reverse items-center justify-center gap-14 ">
        <div className="md:flex-row flex-col flex gap-3">
          <div className="flex flex-col gap-3">
            <WarrantyCard
              title={"Produits Garanties"}
              description={"Tout nos produits sont certifiés et garantie 1 ans"}
              icone={<ClipboardDocumentCheckIcon className="text-primary" />}
            />
            <WarrantyCard
              title={"Meilleure qualité"}
              description={"Nous offrons la meilleurs qualité de produits"}
              icone={<CheckBadgeIcon className="text-primary" />}
            />
          </div>
          <div className="flex flex-col gap-3">
            <WarrantyCard
              title={"Livraison Gratuite"}
              description={"La livraison est gratuite et rapide"}
              icone={<TruckIcon className="text-primary" />}
            />
            <WarrantyCard
              title={"Paiement sécurisé"}
              description={"Payez a la livraison pour toute vos commande"}
              icone={<CreditCardIcon className="text-primary" />}
            />
          </div>
        </div>
        <div className="py-6 mx-3">
          <h3 className="text-4xl font-bold md:text-left text-center">
            Acheter en toute securité
          </h3>
          <p className="md:text-left text-center">
            Faites vos achats pour vos produits informatiques en toute securité,
            rapidement et efficacement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Warranty;
