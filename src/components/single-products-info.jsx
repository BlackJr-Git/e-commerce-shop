/* eslint-disable react/prop-types */
//

import { useState } from "react";



function SingleProductInfo({product}) {
  
  const [infoDisplayed, setInfoDisplayed] = useState(<Description product={product} />);
  const [isActive, setIsActive] = useState({
    isDescriptionActive: true,
    isCompInfoActive: false,
  });

  function displayComplementaryInfo() {
    setInfoDisplayed(<Informations product={product} />);
    setIsActive({ isDescriptionActive: false, isCompInfoActive: true });
  }

  function displayDescription() {
    setInfoDisplayed(<Description product={product} />);
    setIsActive({ isCompInfoActive: false, isDescriptionActive: true });
  }

  return (
    <div className="max-w-7xl m-auto my-12">
      <nav className="flex items-center justify-start gap-6 my-6 border-t border-t-slate-200">
        <li
          className={
            isActive.isDescriptionActive
              ? "font-bold text-xl cursor-pointer border-t-4 border-t-slate-500"
              : "font-bold text-xl cursor-pointer"
          }
          onClick={displayDescription}
        >
          Desciption
        </li>

        <li
          className={
            isActive.isCompInfoActive
              ? "font-bold text-xl cursor-pointer border-t-4 border-t-slate-500"
              : "font-bold text-xl cursor-pointer"
          }
          onClick={displayComplementaryInfo}
        >
          Informations Complementaires
        </li>

        <li className="font-bold text-xl cursor-pointer">Avis(0) </li>
      </nav>
      <div>{infoDisplayed}</div>
    </div>
  );
}

SingleProductInfo.propTypes = {
  product : Object , 
}

export default SingleProductInfo;

function Description({product}) {
  return (
    <div>
      <p>
        {product.description}
      </p>
    </div>
  );
}

function Informations({product}) {
  return (
    <div className="w-full">
      <table className="w-full">
        <tbody className="border border-slate-200 ">
          <tr className="border border-slate-200 text-left ">
            <th className="border border-slate-200 p-2">Poids</th>
            <td className="p-2"> {product.weight} g</td>
          </tr>
          <tr className="border border-slate-200 text-left">
            <th className="border border-slate-200 p-2">Dimension</th>
            <td className="p-2"> {product.height} x {product.width} x 123 mm</td>
          </tr>
          <tr className="border border-slate-200 text-left">
            <th className="border border-slate-200 p-2">Memoire</th>
            <td className="p-2">64Gb , 128Gb </td>
          </tr>
          <tr className="border border-slate-200 text-left">
            <th className="border border-slate-200 p-2">Couleurs</th>
            <td className="p-2">Rouge , Bleu , Blanc , Noire </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
