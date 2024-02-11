import React from "react";

function Errors404() {
  return (
    <div className="m-auto max-w-7xl">
      <h1 className=""> Erreur 404 - Page Non Trouvée </h1>
      <p>
        Nous sommes désolés, mais la page que vous recherchez semble
        introuvable. Il se peut qu'elle ait été déplacée, renommée ou supprimée.
        Veuillez vérifier l'URL que vous avez saisie et assurez-vous qu'elle est
        correcte.
      </p>
      <p>
        Si vous avez suivi un lien depuis notre site, veuillez nous en informer
        afin que nous puissions corriger cela. Vous pouvez retourner à la page
        d'accueil en cliquant ici ou utiliser la barre de recherche pour trouver
        le contenu que vous cherchez.
      </p>
      <p>
        Si le problème persiste, n'hésitez pas à nous contacter pour obtenir de
        l'aide. Nous nous excusons pour tout inconvénient que cela pourrait
        causer.
      </p>
    </div>
  );
}

export default Errors404 ;
