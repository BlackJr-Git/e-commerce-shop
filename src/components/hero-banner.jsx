import { Button } from "./ui/button";
import { Link } from "react-router-dom";
// import { InputWithButton } from ".";

function HeroBanner() {
  return (
    <div className="bg-slate-100">
      <div className="hero-banner max-w-7xl m-auto rounded-2xl p-6 py-24 ">
        <div className="products-image rounded-2xl bg-white max-w-full max-h-full md:"></div>
        <div className="hero-title flex flex-col  justify-between gap-3 bg-slate-50 p-7 rounded-2xl">
          <div className="flex flex-col gap-7">
            <h1 className="text-5xl font-bold text-slate-950">
              Trouvez les dernières innovations tech chez Nawtech !
            </h1>
            <p className="text-lg font-medium text-slate-950">
              Nous proposons les meilleurs services et ventes informatiques,
              assurés par des experts de premier plan dans le domaine.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to={"/boutique"}>
              {" "}
              <Button className="font-bold text-xl h-12">
                Acheter Maintenant
              </Button>{" "}
            </Link>{" "}
            <Link to={"/boutique"}>
              {" "}
              <Button className="w-full" variant="outline"> Voir Plus </Button>{" "}
            </Link>{" "}
          </div>
        </div>
        <div className="service-image rounded-2xl bg-white">
          <img
            className="rounded-2xl max-w-full"
            src="src\assets\images\nawtechservices-herojpg.jpg"
            alt=""
          />
        </div>
        <div className="call-to-action flex flex-col  gap-3">
          <Link
            to={"/boutique"}
            className=" w-full h-full bg-teal-500 rounded-2xl flex items-center justify-center font-bold text-4xl text-center"
          >
            SHOP NOW
            {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
