import {
    BuildingStorefrontIcon,
    EnvelopeIcon,
    MapIcon,
    MapPinIcon,
    PhoneIcon,
    ClockIcon
  } from "@heroicons/react/24/outline";


function ContactInfo() {
  return (
    <div className="md:w-1/2 px-12">
      <div className="py-4">
        <h2 className="text-4xl font-bold py-3">Nous Contacter</h2>
        <p>
          Nous serions ravis de discuter de vos besoins en informatique et de
          vous fournir un devis personnalisé. Contactez nous pour prendre
          rendez-vous avec notre équipe d’experts dès maintenant.
        </p>
      </div>
      <div className="py-4">
        <p className="text-2xl font-semibold flex items-center gap-3 py-2"> <BuildingStorefrontIcon className="w-6 text-primary"/> Contact</p>
        <p className="px-4 flex items-center gap-2"> <PhoneIcon className="w-5 text-primary"/> +243 851 750 853</p>
        <p className="px-4 flex items-center gap-2"> <EnvelopeIcon className="w-5 text-primary"/> contact@nawtech.net</p>
      </div>
      <div className="py-4">
        <p className="text-2xl font-semibold flex items-center gap-3 py-2"><MapIcon className="w-6 text-primary"/> Localisation</p>
        <p className="px-4 flex items-center gap-2"> <MapPinIcon className="w-5 text-primary"/> Boulevard du 30 juin n 166B C / Gombe Kinshasa RDC.</p>
      </div>
      <div className="py-4">
        <p className="text-2xl font-semibold flex items-center gap-3 py-2"> <ClockIcon className="w-6 text-primary"/> Heure d'ouverture</p>
        <p className="px-4 flex items-center gap-2">Lun-Jeu 9h00 à 20h00</p>
        <p className="px-4 flex items-center gap-2">Ven 9h00 à 19h00</p>
        <p className="px-4 flex items-center gap-2">Sam 9h00 à 17h00</p>
      </div>
      
    </div>
  );
}

export default ContactInfo;
