import { useStore } from "@/appStore";


function SucessOrder() {
    const { currentUser } = useStore();
  return (
    <div className="m-auto max-w-7xl p-6 pt-24 h-[65vh]">
      <h1 className="text-2xl font-bold text-center p-6"> Commande validee </h1>
      <p className="text-center mb-6">Merci pour votre commande.</p>
      <p className="px-12 py-6">
        Votre commande a été envoyée à l&lsquo;adresse
        suivante : 
        <p className="py-6">{currentUser.address} {currentUser.address2}</p>
      </p>
    </div>
  );
}

export default SucessOrder; 
