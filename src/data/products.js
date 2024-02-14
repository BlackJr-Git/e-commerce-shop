import { iphone13, iphoneXs, samsungS22plus, samsungS23 } from "@/assets";
import { iphone11, samsungS23Ultra, iphone14ProMax, iphoneXr } from "@/assets";

const productsData = [
  {
    ID: 1,
    name: "Samsung S23 Ultra",
    price: 1069.0,
    images: samsungS23Ultra,
    categories: ["Smartphone", "Samsung"],
    description:
      "Le Samsung Galaxy S23 Ultra est un smartphone haut de gamme sorti en 2023. Il dispose d'un grand\n\\nécran Dynamic AMOLED de 6,8 pouces, d'un processeur Exynos 2300. Il est équipé d'un appareil\n\\nphoto arrière quadruple objectif (108MP + 10MP + 10MP + 12MP) et d'un appareil photo frontal de\n\\n40MP. Le S23 Ultra dispose également d'une batterie de 5 000 mAh, d'un capteur d'empreintes\n\\ndigitales intégré à l'écran et de la certification IP68 pour la résistance à l'eau et à la poussière",
    weight: 234,
    height: 163.4,
    width: 78.1,
    discountPrice: "",
    Étiquettes: "Samsung S23 ULTRA",
    isPublished: true,
    isHighlited: true,
    UGS: "",
  },

  {
    ID: 2,
    name: "IPhone 14 Pro Max",
    price: 1295.0,
    description:
      "L'iPhone 14 Pro Max est l'un des iPhone de la 16e génération du smartphone d'Apple. Il introduit un nouvel écran OLED de 6,7 pouces avec un poinçon dynamique pour le capteur FaceID et la caméra frontale ainsi qu'une fréquence de rafraîchissement dynamique de 120 Hz à true Hz pour le Always on Display. Il possède également un nouveau SoC Apple A16 gravé en 4 nm et un nouveau triple capteur photo de 48+12+12 mégapixels avec téléobjectif X3 et ultra grand-angle",
    images: iphone14ProMax,
    categories: ["Smartphone", "Iphone"],
    UGS: "",
    isPublished: true,
    isHighlited: true,
    weight: 240,
    height: 160.7,
    width: 77.6,
    discountPrice: "",
    Étiquettes: "Iphone 14pro Max",
  },
  {
    ID: 3,
    name: "Samsung S22+",
    price: 889.0,
    images: samsungS22plus,
    categories: ["Smartphone", "Samsung"],
    UGS: "",
    isPublished: true,
    isHighlited: true,
    description:
      "Le Samsung Galaxy S22+ est un smartphone sorti en 2022. Il dispose d'un grand écran Dynamic\n\\nAMOLED de 6,7 pouces, d'un processeur Exynos 2200. Il est équipé d'un appareil photo arrière triple\n\\nobjectif (12MP + 64MP + 12MP) et d'un appareil photo frontal de 10MP. Le S22+ dispose également\n\\nd'une batterie de 4 800 mAh, d'un capteur d'empreintes digitales intégré à l'écran et de la\n\\ncertification IP68 pour la résistance à l'eau et à la poussière.",
    weight: 195,
    height: 157.4,
    width: 75.8,
    discountPrice: "",
    Étiquettes: "Samsung S22",
  },
  {
    ID: 4,
    name: "IPhone XR",
    price: 279.0,
    images: iphoneXr,
    categories: ["Smartphone", "Iphone"],
    UGS: "",
    isPublished: true,
    isHighlited: true,
    description:
      "L'iPhone XR est équipé d'un grand écran LCD de 6,true pouces. Comme ses cousins XS et XS max, il embarque le nouveau processeur A12 Bionic d'Apple et offre la reconnaissance faciale Face ID.",
    weight: "",
    height: "",
    width: "",
    discountPrice: "",
    Étiquettes: "Iphone XR",
  },
  {
    ID: 5,
    name: "IPhone 13",
    price: 709.0,
    images: iphone13,
    categories: ["Smartphone", "Iphone"],
    UGS: "",
    isPublished: true,
    isHighlited: true,
    description:
      "L'iPhone 13 est le modèle central de la 15e itération du smartphone d'Apple. Il est équipé d'un écran OLED de 6,true pouces 60 Hz, d'un SoC Apple A15 Bionic compatible 5G (NR &amp; Sub-6) et d'un double capteur photo de 12+12 mégapixels (grand-angle et ultra grand-angle) avec OIS.",
    weight: "",
    height: "",
    width: "",
    discountPrice: "",
    Étiquettes: "Iphone 13",
  },
  {
    ID: 6,
    name: "Samsung S23",
    price: 1059.0,
    images: samsungS23,
    categories: ["Smartphone", "Samsung"],
    UGS: "",
    isPublished: true,
    isHighlited: true,
    description:
      "Le Samsung Galaxy S23 est un smartphone sorti en 2023. Il dispose d'un écran Dynamic AMOLED de\n\\n6,2 pouces, d'un processeur Exynos 2300. Il est équipé d'un appareil photo arrière triple objectif\n\\n(12MP + 64MP + 12MP) et d'un appareil photo frontal de 10MP. Le S23 dispose également d'une\n\\nbatterie de 4 000 mAh, d'un capteur d'empreintes digitales intégré à l'écran et de la certification\n\\nIP68 pour la résistance à l'eau et à la poussière.",
    weight: 168,
    height: 146.3,
    width: 70.9,
    discountPrice: "",
    Étiquettes: "Samsung S23",
  },
  {
    ID: 7,
    name: "IPhone 11",
    price: 429.0,
    images: iphone11,
    categories: ["Smartphone", "Iphone"],
    UGS: "",
    isPublished: true,
    isHighlited: true,
    description:
      "l'<b>iPhone 11</b> se distingue de son prédécesseur par l'utilisation d'un double module caméra. On trouve à son dos un ultra grand angle en complément de l'objectif principal, chacun d'eux étant associé à un capteur de 12 Mpix. L'iPhone 11 est également équipé du nouveau processeur Apple A13 Bionic et utilise un capteur Face ID amélioré. Il est proposé en plusieurs couleurs originales.",
    weight: 194,
    height: 150.9,
    width: 75.7,
    discountPrice: "",
    Étiquettes: "Iphone 11",
  },
  {
    ID: 8,
    name: "IPhone Xs",
    price: 339.0,
    images: iphoneXs,
    categories: ["Smartphone", "Iphone"],
    UGS: "",
    isPublished: true,
    isHighlited: 0,
    description:
      "Malgré le même design extérieur que l'iPhone X, l'iPhone XS est un successeur fortement mis à\n\\nniveau. Il dispose d'un écran OLED de 5,8 pouces qui prend en charge la lecture vidéo HDR10 et une\n\\nlarge gamme de couleurs, ainsi que d'un capteur TrueTone amélioré pour ajuster la température de\n\\ncouleur de l'écran.",
    weight: 177,
    height: 110.6,
    width: 70.9,
    discountPrice: "",
    Étiquettes: "Iphone XS",
  },
];

export default productsData;
