/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import { AnimatedPages } from "..";
import { motion } from "framer-motion";

function SingleProductInfo({ product }) {
  const [productData, setProductData] = useState(product);
  const [infoDisplayed, setInfoDisplayed] = useState(
    <Description product={productData} />
  );
  const [isActive, setIsActive] = useState({
    isDescriptionActive: true,
    isCompInfoActive: false,
  });

  useEffect(() => {
    setProductData(product);
  }, [product]); 

  function displayComplementaryInfo() {
    setInfoDisplayed(<Informations product={productData} />);
    setIsActive({ isDescriptionActive: false, isCompInfoActive: true });
  }
  function displayDescription() {
    setInfoDisplayed(<Description product={productData} />);
    setIsActive({ isCompInfoActive: false, isDescriptionActive: true });
  }

  return (
    <div className="max-w-7xl m-auto my-12">
      <nav className="flex flex-col md:flex-row justify-start gap-6 my-6 border-t border-t-slate-200">
        <motion.li
          className={
            isActive.isDescriptionActive
              ? "font-bold text-xl text-center cursor-pointer border-t-4 border-t-slate-500"
              : "font-bold text-xl text-center cursor-pointer"
          }
          onClick={displayDescription}
        >
          Desciption
        </motion.li>

        <motion.li
          className={
            isActive.isCompInfoActive
              ? "font-bold text-xl text-center cursor-pointer border-t-4 border-t-slate-500"
              : "font-bold text-xl text-center cursor-pointer"
          }
          onClick={displayComplementaryInfo}
        >
          Informations Complementaires
        </motion.li>

        <li className="font-bold text-xl text-center cursor-pointer">
          Avis(0){" "}
        </li>
      </nav>
      <div className="">{infoDisplayed}</div>
    </div>
  );
}


export default SingleProductInfo;

function Description({ product }) {
  const [productData, setProductData] = useState(product);
  useEffect(() => {
    setProductData(product);
    console.log(product);
  }, [product]);
  return (
    <AnimatedPages>
      <div className="px-6">
        <p>{productData.description}</p>
      </div>
    </AnimatedPages>
  );
}

function Informations({ product }) {
  const [productData, setProductData] = useState(product);
  useEffect(() => {
    setProductData(product);
    console.log(product);
  }, [product]);

  return (
    <AnimatedPages>
      <div className="w-full px-12">
        <table className="w-full">
          <tbody className="border border-slate-200 ">
            <tr className="border border-slate-200 text-left ">
              <th className="border border-slate-200 p-2">Poids</th>
              <td className="p-2"> {productData.weight} g</td>
            </tr>
            <tr className="border border-slate-200 text-left">
              <th className="border border-slate-200 p-2">Dimension</th>
              <td className="p-2">
                {" "}
                {productData.height} x {productData.width} x 123 mm
              </td>
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
    </AnimatedPages>
  );
}

// function ProductReviews() {
//   return (
//     <AnimatedPages>
//       <form>
//         <textarea name="" id="" cols="30" rows="10"></textarea>
//       </form>
//     </AnimatedPages>
//   );
// }
