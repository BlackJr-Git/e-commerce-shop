import {
  CogIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function ServicesCard() {
  return (
    <section>
      <div className="m-auto rounded-2xl w-4/5 h-auto py-6 items-center justify-center gap-3 bg-white flex md:flex-row flex-col -mt-32 z-50 drop-shadow-lg">
        <div className="md:w-1/3 flex flex-col items-center justify-center p-3 gap-3">
          <CodeBracketIcon className="w-24" />
          <h2 className="text-xl font-bold text-center"> Developement Web </h2>
          <p className="text-center">
            Nous boostons la présence en ligne des entreprises avec nos services
            de conception web.
          </p>
          <Link to={"/services"} className="text-primary flex gap-3">
            {" "}
            En Savoir Plus <ArrowRightCircleIcon className="w-6" />{" "}
          </Link>
        </div>

        <div className="md:w-1/3 flex flex-col items-center justify-center p-3 gap-3">
          <DevicePhoneMobileIcon className="w-24" />
          <h2 className="text-xl font-bold text-center">
            Devellopement Mobile
          </h2>
          <p className="text-center">
            Nous concevons des applications mobiles et de bureau sur mesure pour
            vos besoins d'entreprise uniques.
          </p>
          <Link to={"/services"} className="text-primary flex gap-3">
            {" "}
            En Savoir Plus <ArrowRightCircleIcon className="w-6" />{" "}
          </Link>
        </div>

        <div className="md:w-1/3 flex flex-col items-center justify-center p-3 gap-3">
          <CogIcon className="w-24" />
          <h2 className="text-xl font-bold text-center">
            Maintenance & Reparation
          </h2>
          <p className="text-center">
            Nous offrons des services d’entretien, de dépannage et de
            maintenance pour vos appareils informatiques.
          </p>
          <Link to={"/services"} className="text-primary flex gap-3">
            {" "}
            En Savoir Plus <ArrowRightCircleIcon className="w-6" />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
