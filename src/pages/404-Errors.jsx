import { AnimatedPages } from "@/components";
import { Link } from "react-router-dom";

function Errors404() {
  return (
    <AnimatedPages>
    <div className="m-auto max-w-7xl p-6 pt-24 h-[65vh]">
      <h1 className="text-2xl font-bold text-center p-6"> Erreur 404 - Page Non Trouvée </h1>
      <p className="px-12 py-6">
        Nous sommes désolés, mais la page que vous recherchez semble
        introuvable. Il se peut qu'elle ait été déplacée, renommée ou supprimée.
        Veuillez vérifier l'URL que vous avez saisie et assurez-vous qu'elle est
        correcte.
      </p>
      <p className="px-12 py-6">
        Si vous avez suivi un lien depuis notre site, veuillez nous en informer
        afin que nous puissions corriger cela. Vous pouvez retourner à la page
        d'accueil en cliquant <Link to={"/"} className="font-semibold text-blue-400">ici</Link> ou utiliser la barre de recherche pour trouver
        le contenu que vous cherchez.
      </p>
      <p className="px-12 py-6 font-semibold">
        Si le problème persiste, n'hésitez pas à nous contacter pour obtenir de
        l'aide. Nous nous excusons pour tout inconvénient que cela pourrait
        causer.
      </p>
    </div>
    </AnimatedPages>
  );
}

export default Errors404 ;
