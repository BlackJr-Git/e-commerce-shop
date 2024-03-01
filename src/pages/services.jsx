/* eslint-disable react/prop-types */
import { MobileDev, Repaire, WebpageDev } from "@/assets";
import {
  AnimatedPages,
  PageBanner,
  ServicesCard,
  ContactForm,
  ContactInfo,
} from "@/components";
import { Button } from "@/components/ui/button";

function Services() {
  return (
    <AnimatedPages>
      <main className="bg-slate-100">
        <PageBanner title={"Nos Services"} description={"Notre équipe s’assure que vous recevez la meilleure qualité de service."} />
        <ServicesCard />
        <ServiceSection
          bgColor={'bg-slate-100'}
          id={"dev-web"}
          ServiceTitle={"Developpement Web"}
          image={WebpageDev}
          description={
            "Une entreprise a besoin d’un site web car il s’agit de son image en ligne. C’est un moyen de communiquer avec ses clients potentiels et existants, de se présenter, de promouvoir ses produits ou services, de fournir des informations utiles et de se démarquer de la concurrence. Un site web peut aider une entreprise à atteindre un public plus large, à générer des leads et à améliorer sa visibilité en ligne. C’est un investissement qui peut rapporter des résultats à long terme."
          }
        />
        <ServiceSection
        bgColor={'bg-slate-50'}
          id={"dev-mobile"}
          flexType={"md:flex-row-reverse"}
          image={MobileDev}
          ServiceTitle={"Developpement Mobile"}
          description={
            "Notre équipe spécialisée en développement mobile crée des applications sur mesure, à la fois esthétiques et fonctionnelles, pour iOS et Android. Nous transformons vos idées en solutions mobiles performantes, optimisées pour une expérience utilisateur exceptionnelle. Grâce à une approche agile et à l’utilisation des dernières technologies, nous garantissons des applications rapides, réactives et sécurisées, adaptées aux besoins spécifiques de votre entreprise."
          }
        />
        <ServiceSection
        bgColor={'bg-slate-100'}
          id={"repaire"}
          image={Repaire}
          ServiceTitle={"Maintenance et Reparation"}
          description={
            "Une entreprise a besoin d’une maintenance régulière de ses matériels informatiques et de ses sites web pour garantir leur bon fonctionnement et éviter les temps d’arrêt coûteux. Les appareils et les sites web peuvent subir des pannes, des bugs, des failles de sécurité ou des mises à jour nécessaires qui peuvent impacter l’efficacité et la productivité de l’entreprise. Une maintenance régulière permet de résoudre ces problèmes rapidement et de manière proactive, de prévenir les futures pannes et de s’assurer que les matériels et les sites web sont toujours opérationnels."
          }
        />
        <div className="flex md:flex-row flex-col bg-slate-50 py-24">
          
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </AnimatedPages>
  );
}

export default Services;

function ServiceSection({ flexType, ServiceTitle, description, image, id,bgColor }) {
  return (
    <section className={`${bgColor} py-24`} id={id}>
      <div
        className={` ${flexType} max-w-7xl m-auto flex md:flex-row flex-col-reverse items-center justify-center flex-wrap `}
      >
        <div className="md:w-1/2  p-6 ">
          <h2 className="text-4xl font-bold py-6 text-center md:text-left"> {ServiceTitle} </h2>
          <p className="py-6">{description}</p>
          <Button className="font-semibold text-xl h-11">Faire un devis</Button>
        </div>
        <div className="md:w-1/2">
          <img
            className="drop-shadow-2xl"
            src={image}
            alt="illustration devellopement web"
          />
        </div>
      </div>
    </section>
  );
}
