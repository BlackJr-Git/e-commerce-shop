import {
  BoltIcon,
  UserGroupIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

function WhysUs() {
  return (
    <section className="bg-slate-50 py-24 ">
      <div className="max-w-7xl m-auto lg:flex justify-center items-center ">
        <div className="p-6 flex flex-col items-center gap-14">
          <h3 className="text-4xl font-bold text-center md:text-left">Pourquoi nous et pas d'autres?</h3>
          <p className="text-center md:text-left">
            "Un bon service client coute moins cher qu'un mauvais service
            client."
          </p>
        </div>
        <div className="relative">
          <img
            className="rounded-xl"
            src="src/assets/images/hand-trust-nawtech.jpg"
            alt=""
          />
        </div>
        <div className="p-6 flex flex-col items-left  gap-14">
          <div className="flex flex-col items-center md:block">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center drop-shadow-lg">
              <UserGroupIcon className="w-10 text-teal-500" />
            </div>
            <h4 className="text-2xl font-bold">Expertise</h4>
            <p className="text-center md:text-left">
              Nous mettons a votre disposition les meilleurs expert nationaux et
              internationaux sur vos projets.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:block">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center drop-shadow-lg">
              <HandThumbUpIcon className="w-10 text-teal-500" />
            </div>
            <h4 className="text-2xl font-bold">Fiabilité</h4>
            <p className="text-center md:text-left">
              Nous faisons un suivis de nos travaux pour garantir une meilleurs
              expériences
            </p>
          </div>

          <div className="flex flex-col items-center md:block">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center drop-shadow-lg">
              <BoltIcon className="w-10 text-teal-500" />
            </div>
            <h4 className="text-2xl font-bold">Gestion du temps</h4>
            <p className="text-center md:text-left">
              Votre temps est précieux et nous le savons, nos équipes garantisse
              un services éclaire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhysUs;
